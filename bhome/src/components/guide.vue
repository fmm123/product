<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
       	<div class="swiper-slide" v-for="(item,index) in pic">
		       	<router-link to='/index/home' v-if="index==4"><img :src='item.img'></router-link>
	    	 	<img :src='item.img' v-else>
	       	</div>
       </div>
    </div>
</template>
<style scoped>
	.swiper-container{
		@include flex;
		width: 100%;
		height: 100%;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>
<script>
	export default{
		data(){
			return {
				pic:[
					{"img":"/static/img/images/interface1.jpg"},
					{"img":"/static/img/images/interface2.jpg"},
					{"img":"/static/img/images/interface3.jpg"},
					{"img":"/static/img/images/interface4.jpg"}
				]
			}
		},
		mounted(){
	  		new Swiper('.swiper-container')
		}
	}
</script>