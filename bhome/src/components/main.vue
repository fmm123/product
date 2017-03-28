<template>
	<div class="wrap">
		<nav>
			<ul>
				<li><router-link to='/index/home'><i class="iconfont">&#xe612;</i><span>返回</span></router-link></li>
				<li><h2>酒店</h2></li>
				<li></li>
			</ul>
		</nav>
		<div class="cent">
			<img :src="arr.img" alt="">
		</div>
	</div>
</template>
<style lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
		nav{
			width: 100%;
			height: 44px;
			background: #17b0b8;
			ul{
				display:-webkit-flex;
				width: 100%;
				height: 44px;
				li{
					&:nth-child(1){
						a{
							display:block;
							width: 110px;
							color: #fff;
							line-height: 44px;
						}
					
					}
					&:nth-child(3){
						width: 110px;
					};
					&:nth-child(2){
						flex:1;
						h2{
							color: #fff;
							font-size: 16px;
							text-align:center;
							line-height: 44px;
						}
					};
				}
			}
		}
		.cent img{
			width: 100%;
			height: auto;
		}
	}
</style>
<script>
	export default{
		data(){
				return{
					arr:this.$route.query.data
				}
			}
	}
</script>