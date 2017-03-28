<template>
	<div class="login">
		<nav>
			<ul>
				<li><i class="iconfont">&#xe612;</i><span>返回</span></li>
				<li><h2>注册</h2></li>
				<li></li>
			</ul>
		</nav>
	</div>
</template>
<style lang='scss'>
.login{
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
					width: 110px;
					color: #fff;
					line-height: 44px;
				
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
}
</style>