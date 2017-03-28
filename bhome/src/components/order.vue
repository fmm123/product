<template>
	<div>
        <ul class="t-orderList">
        	<li>
           <i class="iconfont">&#xe64c;</i> 
           酒店订单
           <span><i class="iconfont">&#xe619;</i></span>
          </li>
          <li>
           <router-link to="/sendplane" class="t-router">
           <i class="iconfont">&#xe637;</i> 
           送机订单
             <span><i class="iconfont">&#xe619;</i></span>
           </router-link>
          </li>
          <li>
          <i class="iconfont">&#xe63d;</i> 
           团购订单
             <span><i class="iconfont">&#xe619;</i></span>
          </li>
          <li>
            <router-link to="/parkland" class="t-router">
            <i class="iconfont">&#xe61e;</i> 
             景区订单
               <span><i class="iconfont">&#xe619;</i></span>
            </router-link>
          
          </li>
          <li>
          <i class="iconfont">&#xe516;</i> 
           身边订单
             <span><i class="iconfont">&#xe619;</i></span>
          </li>
          <li>
            <router-link to="/callcar" class="t-router">
          <i class="iconfont">&#xe632;</i> 
           车车订单
             <span><i class="iconfont">&#xe619;</i></span>
              </router-link>
          </li>
        </ul>
	</div>
</template>
<script>
import {mapActions} from "vuex";
	export default {
		data(){
          return{
	     }
     },
		mounted(){
			this.$store.dispatch("change",1)
		}
	}
</script>