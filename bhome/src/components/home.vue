<template>
	<div class="content" ref='mark' id="content">
		<div class="item" id="scroll">
			<div>
			<div class="item_list" v-for='(item,index) in arr'>
				<router-link :to="{path:'/main',query:{data:item}}">
					<dl>
						<dt><img :src="item.img" ></dt>
						<dd><p>{{item.title}}</p></dd>
					</dl>
					<div class="last">
						<div>
							<span>{{item.spans}}</span>
						</div>
						<p>
							<i class="iconfont" v-html='item.icon'></i>
						</p>
					</div>
				</router-link>
			</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.content{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.item{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.item_list{
		width: 90%;
		height: 172px;
		margin-top: 10px;
		border: 1px solid #ccc;
		margin: 10px 5% 0 5%;
	}
	.item_list a{
		color: #000;
	}
	.item_list dl{
		width: 100%;
		height: 135px;
	}
	.item_list dl dd{
		font-size: 13px;
		padding-left: 5px;
	}
	.item_list dl dt img{
		width: 100%;
		height: 116px;
	}
	.last{
		width: 100%;
		height: 37px;
	}
	.last div{
		width: 85%;
		font-size: 10px;
		padding-left: 5px;
		float: left;
	}
	.last p{
		float:right;
		padding-right: 10px;
	}
	.last p i{
		display: inline-block;
		color: #37a0a6;
	}
</style>
<script>
	import {mapActions} from "vuex";
	export default {
		data(){
			return {
				arr:[
					{"img":"/static/img/images/hotel_03.jpg",
					"title":"三亚亚龙湾瑞吉度假酒店",
					"spans":"我们曾经会写出冗长的JavaScript代码,那种代码常常是既难以阅读又难以维护的.",
					"icon":"&#xe619;",
					"id":1
					},
					{"img":"/static/img/images/hotel2_06.jpg",
					"title":"北京后海商圈王府建筑豪华酒店",
					"spans":"你可以用 jQuery 方法 appendTo() 将一个 HTML 元素添加到 DOM 树中。",
					"icon":"&#xe619;",
					"id":2
					},
					{"img":"/static/img/images/hotel_03.jpg",
					"title":"三亚亚龙湾瑞吉度假酒店",
					"spans":"each() 函数就像是 Java 里的一个 Iterator，它允许你遍历一个元素集合。",
					"icon":"&#xe619;",
					"id":3
					},
					{"img":"/static/img/images/hotel2_06.jpg",
					"title":"北京后海商圈王府建筑豪华酒店",
					"spans":"这是一个事件处理问题。jQuery为按钮点击之类的事件提供了很好的支持。",
					"icon":"&#xe619;",
					"id":4
					}
				],
				ws:document.body.offsetWidth,
				hs:document.body.offsetHeight
			}
		},
		mounted(){
			this.$store.dispatch("change",2)
			new IScroll('#scroll', { scrollX: true, freeScroll: true,preventDefault: false});
		}
	}
</script>