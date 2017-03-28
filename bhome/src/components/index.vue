<template>
  <div id="app">
		<header><h2>{{data[getInd].name}}</h2></header>
		<div class="section">
			<router-view></router-view>
		</div>
		<footer>
			<ul>
				<li v-for='(item,index) in data' @click="change(index)">
					<router-link :to='item.url' :class='getInd==index?"active":""'>	
						<i class="iconfont" v-html="item.icon"></i>
						<span>{{item.name}}</span>
					</router-link>
				</li>
				
			</ul>
		</footer>	
  </div>
</template>
<script>
import store from "../vuex/store.js"
import {mapGetters} from "vuex"
import {mapActions} from "vuex"
export default {
  data () {
    return {
      data:[
      	{"name":"我的","icon":"&#xe6b8;","url":"/index/myself"},
      	{"name":"订单","icon":"&#xe6c5;","url":"/index/order"},
      	{"name":"首页","icon":"&#xe635;","url":"/index/home"},
      	{"name":"日记","icon":"&#xe74d;","url":"/index/diary"},
      	{"name":"逛逛","icon":"&#xe614;","url":"/index/stroll"}
      ]
    }
  },
  methods:{
		change(index){
			this.$store.dispatch("change",index);
		}
	},
	computed:{
		...mapGetters(["getInd"])
	},
	store
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
