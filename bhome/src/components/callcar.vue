<template>
	<div class="t-callcar">
      <header>
	  	<a a href="javascript:history.go(-1)"><i class="iconfont">&#xe612;</i></a>
	  	<h2>车车订单</h2>
	  </header>
	  <ul class="t-choice">
	    	<li>预约叫车
              <i class="iconfont">&#xe675;</i>
	    	</li>	
	    	<li>立即叫车
	    	  <i class="iconfont">&#xe675;</i>
	        </li>
	  </ul>
	  <div class="t-cont">
	    <div class="t-cmessage">
	    	<ul>
	    		<li>
	    			<span class="map">
	    				<i class="iconfont">&#xf0029;</i>
	    				上地七街
						<i class="iconfont">&#xe619;</i>
					</span>
	    			<span>
	    				<i class="iconfont">&#xe61c;</i>
	    				软件园
                        <i class="iconfont">&#xe619;</i>
	    			</span>
	    		</li>
	    		<li>
	    			<i class="iconfont">&#xe67e;</i>
	    			2小时后
	    			<span class="date">{{dateStr}}</span>
	    			<i class="iconfont">&#xe619;</i>
	    		</li>
	    		<li>
	    			<i class="iconfont phone">&#xe6a6;</i>
	    			<input type="text" placeholder="+86">
	    			<i class="iconfont close">&#xf0031;</i>
	    		</li>
	    	</ul>
	    	  <button class="btn">预约订单</button>
	    </div>
	  </div>
	</div>
</template>   
<script>																											 
	export default{
		data(){
			return{
              dateStr:""	
			}
		},
		method(){

		},
		mounted(){
			 var nowDate = new Date();
			var year = nowDate.getFullYear();
			 var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
			   : nowDate.getMonth() + 1;
			 var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
			   .getDate();
			 this.dateStr = year + "年" + month + "月" + day+ "号"; 
		}
	}
</script>; 
		}
	}
</script>