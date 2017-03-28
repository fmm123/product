<template>
	<div class="g-stroll">
		<div class="g-head">
      <ul class="g-list">
        <li v-for="(item,index) in list" class="g-list-item" @click="change(index)" :class="index==getCount?'active':''">
          <router-link :to='item.url'>
            <i class="iconfont" v-html="item.icon"></i> {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view>

    </router-view>
	</div>
</template>
<script>
  import store from "../vuex/store"
	import {mapActions} from "vuex";
	import {mapGetters} from "vuex";
	export default {
    data () {
      return {
        list:[
              {"title":"附近","icon":"&#xe607;","url":"/index/stroll/near"},
              {"title":"直播","icon":"&#xe60b;","url":"/index/stroll/zhibo"},
              {"title":"热门","icon":"&#xe653;","url":"/index/stroll/hot"}
          ]
      }
    },
    methods:{
      change (index) {
        this.$store.dispatch("changeCount",index);
      }
    },
		mounted(){
			this.$store.dispatch("change",4)
		},
    computed : {
      ...mapGetters(["getCount"])
    },
    store
	}
</script>
