<template>
	<div class="t-parkland">
	  <header>
	  	<a a href="javascript:history.go(-1)"><i class="iconfont">&#xe612;</i></a>
	  	<h2>景区订单</h2>
	  </header>
	  <div class="t-content" id="iscroll">
	  	<div>
	  	    <div v-for="(val,index) in imgArr" class="t-box">
	  	    	<span class="t-span" :class="index%2==0?'':'add'">{{val.name}}</span>
	  		    <img :src="val.url" alt="">
	  	</div>
	  	</div>
	  </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			  imgArr:[
                {url:"../static/img/images/jingqu3_03.jpg",name:"白色沙漠"},
                {url:"../static/img/images/jingqu4_07.jpg",name:"美丽古城"},
                {url:"../static/img/images/jingqu5_10.jpg",name:"芬芳花田"},
                {url:"../static/img/images/jingqu2_06.jpg",name:"白色沙漠"},
                {url:"../static/img/images/jingqu4_07.jpg",name:"美丽古城"},
                {url:"../static/img/images/jingqu5_10.jpg",name:"芬芳花田"}
			  ]
			}
		},
		mounted(){
			setTimeout(function(){
				new IScroll("#iscroll")
			},1000)
		}
	}
</script>