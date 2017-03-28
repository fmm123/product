<template>
  <div id="diary" @click="delMask">
    <div class="diary-mask" v-if="flag" ref="diaryMask">
      <div class="diary-hint">
        <p>此处为自己写下旅程日记</p>
        <img src="../assets/icon_arrows.gif" alt="" class="diary-icon_arrows">
      </div>
      <div class="diary-icon">
        <i class="iconfont" v-html="diaryIcon.icon"></i>
        <span>{{diaryIcon.name}}</span>
      </div>
    </div>
    <div class="diary-left">
      <div class="diary-header">
        <img src="../assets/diary_head.gif" alt="">
      </div>
      <ol class="diary-date_lists">
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">现在</p>
        </li>
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">2012</p>
        </li>
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">2011</p>
        </li>
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">2010</p>
        </li>
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">2009</p>
        </li>
        <li>
          <span class="diary-icon_list"></span>
          <p class="diary-text_list">2008</p>
        </li>
      </ol>
      <ul class="diary-events_lists">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="diary-center">
      <h2>回忆里的疯狂 <img src="../assets/icon_diary.gif" alt=""></h2>
      <div class="diary-bubble">
        <ul class="diary-bubble-cont">
          <li>
            <div class="diary-day">
              <span>十</span>
              <span>二</span>
            </div>
            <div class="diary-date">2013-6-9</div>
          </li>
          <li>"执子之手,与子偕老"</li>
          <li><img src="../assets/diary_data1.gif"></li>
          <li>
            <img src="../assets/icon_diary.inform.gif" alt=""><span>(111)</span><img src="../assets/icon_likeup.gif"
                                                                                     alt=""><span>(98)</span>
          </li>
          <li class="diary-arrow"></li>
        </ul>
      </div>
      <div class="diary-bubble">
        <ul class="diary-bubble-cont">
          <li>
            <div class="diary-day">
              <span>十</span>
              <span>二</span>
            </div>
            <div class="diary-date">2013-6-9</div>
          </li>
          <li>"执子之手,与子偕老"</li>
          <li><img src="../assets/diary_data1.gif"></li>
          <li>
            <img src="../assets/icon_diary.inform.gif" alt=""><span>(111)</span><img src="../assets/icon_likeup.gif"
                                                                                     alt=""><span>(98)</span>
          </li>
          <li class="diary-arrow"></li>
        </ul>
      </div>
    </div>
    <div class="diary-right">
      <div class="diary-right-title"><img src="../assets/icon_inform2.gif" alt=""><span>随想</span> <img src="../assets/icon_star2.gif" alt=""><span>生活笔记</span></div>
      <div class="diary-bubble">
        <ul class="diary-bubble-cont">
          <li>
            <div class="diary-day">
              <span>十</span>
              <span>二</span>
            </div>
            <div class="diary-date">2013-6-9</div>
          </li>
          <li>"执子之手,与子偕老"</li>
          <li><img src="../assets/diary_data1.gif"></li>
          <li>
            <img src="../assets/icon_diary.inform.gif" alt=""><span>(111)</span><img src="../assets/icon_likeup.gif"
                                                                                     alt=""><span>(98)</span>
          </li>
          <li class="diary-arrow"></li>
        </ul>
      </div>
      <div class="diary-bubble">
        <ul class="diary-bubble-cont">
          <li>
            <div class="diary-day">
              <span>十</span>
              <span>二</span>
            </div>
            <div class="diary-date">2013-6-9</div>
          </li>
          <li>"执子之手,与子偕老"</li>
          <li><img src="../assets/diary_data1.gif"></li>
          <li>
            <img src="../assets/icon_diary.inform.gif" alt=""><span>(111)</span><img src="../assets/icon_likeup.gif"
                                                                                     alt=""><span>(98)</span>
          </li>
          <li class="diary-arrow"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from "vuex";
  export default {
    name: "diary",
    data(){
    	return{
        diaryIcon:{"name":"日记","icon":"&#xe74d;","url":"/index/diary"},
    		flag:true,
        maskWidth:document.body.offsetWidth,
        maskHeight:document.body.offsetHeight
      }
    },
    methods:{
      delMask(){
        this.flag=false
      }
    },
    mounted(){
      this.$refs.diaryMask.style.width=this.maskWidth+"px";
      this.$refs.diaryMask.style.height=this.maskHeight+"px";
      this.$store.dispatch("change", 3)
    }
  }
</script>
<style lang="scss">
  @media only screen and (max-width: 1080px), only screen and (max-device-width:1080px) {
    html {
      font-size:208px;
    }
  }
  @media only screen and (max-width: 960px), only screen and (max-device-width:960px) {
    html {
      font-size:198px;
    }
  }
  @media only screen and (max-width: 800px), only screen and (max-device-width:800px) {
    html {
      font-size:188px;
    }
  }
  @media only screen and (max-width: 720px), only screen and (max-device-width:720px) {
    html {
      font-size:178px;
    }
  }
  @media only screen and (max-width: 640px), only screen and (max-device-width:640px) {
    html {
      font-size:168px;
    }
  }
  @media only screen and (max-width: 600px), only screen and (max-device-width:600px) {
    html {
      font-size:158px;
    }
  }
  @media only screen and (max-width: 540px), only screen and (max-device-width:540px) {
    html {
      font-size:148px;
    }
  }
  @media only screen and (max-width: 480px), only screen and (max-device-width:480px) {
    html {
      font-size:138px;
    }
  }
  @media only screen and (max-width: 414px), only screen and (max-device-width:414px) {
    html {
      font-size:129px;
    }
  }
  @media only screen and (max-width: 400px), only screen and (max-device-width:400px) {
    html {
      font-size:125px;
    }
  }
  @media only screen and (max-width: 375px), only screen and (max-device-width:375px) {
    html {
      font-size:120px;
    }
  }
  @media only screen and (max-width: 360px), only screen and (max-device-width:360px) {
    html {
      font-size:110px;
    }
  }
  @media only screen and (max-width: 320px), only screen and (max-device-width:320px) {
    html {
      font-size:100px;
    }
  }
  #diary {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url("../assets/diary.gif") no-repeat;
    background-size: 100% 100%;
    display: flex;
    font-family: "Microsoft YaHei";
    /*overflow-y: auto;*/
  }
  .diary-mask {
    position: absolute;
    background-color: #000000;
    z-index: 10000;
    width: 100px;
    height: 100px;
    opacity: 0.8;
  }
  .diary-hint{
    position: absolute;
    bottom: 99px;
    right: 44px;
    text-align: center;
    color: #ffffff;

  }
  .diary-icon_arrows{
    width: 18px;
    height: 42px;
  }
  .diary-icon{
    color: #24a2a8;
    position: absolute;
    bottom: 0.45rem;
    right: 0.82rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-shadow: 1px 1px 7px #FFFFFF;
    i{
      line-height: 0.09rem;
    }
  }
  .diary-left{
    position: relative;
  }
  .diary-date_lists{
    width: 0.01rem;
    background-color: #d3d3d3;
    height: 3.07rem;
    margin-left: 0.47rem;
    margin-top: 0.69rem;
    float: left;
    li{
      margin-top:0.31rem;
      position: relative;
    }
    .diary-icon_list{
      display: inline-block;
      margin-left: -0.07rem;
      width: 0.07rem;
      height: 0.02rem;
      background-color: #d3d3d3;
    }
    .diary-text_list{
      position: absolute;
      font-size: 0.07rem;
      color: #d3d3d3;
      left: -0.4rem;
      top: 0.05rem;
    }
  }
  .diary-events_lists{
    width: 0.01rem;
    background-color: #d3d3d3;
    height: 3.07rem;
    margin-left: 0.12rem;
    margin-top: 0.69rem;
    float: left;
    li{
      height: 0.04rem;
      width: 0.04rem;
      background-color: #42c6cc;
      border: 1px solid #FFFFFF;
      border-radius: 0.04rem;
      margin-left: -0.02rem;
      margin-top: 0.38rem;
    }
  }
  .diary-header {
    position: absolute;
    height: 0.53rem;
    width: 0.53rem;
    overflow: hidden;
    border: 2px solid #FFFFFF;
    border-radius: 1.05rem;
    top: 0.12rem;
    left: 0.19rem;
  }

  .diary-header img {
    height: 100%;
    width: 100%;
  }
  .diary-center{
    margin-left: 0.10rem;
    width: 1.13rem;
  }
  .diary-right{
    width: 1.13rem;
    margin-left: 0.12rem;
    .diary-right-title{
      padding-top: 0.15rem;
      font-size: 0.1rem;
      margin-bottom: 0.14rem;
      span{
        padding-left: 0.04rem;
      }
      img{
        width: 0.1rem;
        height: 0.1rem;
        &:nth-child(2){
           padding-left: 0.02rem;
         }
      }
    }
  }
  .diary-center h2 {
    font-size: 0.14rem;
    margin-top: 0.33rem;
    margin-left: 0.09rem;
    margin-bottom:0.12rem;
    img{
      width: 0.1rem;
    }
  }

  .diary-bubble {
    padding-top: 0.03rem;
    position:relative;
    background-color:#fef9f0;
    border-radius:0.05rem;
    display:flex;
    justify-content:center;
    margin-bottom:0.14rem;
    .diary-bubble-cont{
      width: 0.95rem;
    }
    li{
      &:nth-child(1){
        div{
          float: left;
        }
        .diary-day{
          width: 0.25rem;
          height: 0.21rem;
          background-color: #5acdd2;
          border: 1px solid #bdeae8;
          display:flex;
          flex-direction:column;
          span{
            font-size: 0.09rem;
            line-height: 0.09rem;
            width:0.11rem;
            &:nth-child(1){
               margin-top: 0.02rem;
               margin-left: 0.02rem;
             }
            &:nth-child(2){
               margin-left: 0.14rem;
             }
          }
        }
        .diary-date{
          padding-left: 0.06rem;
          font-size: 0.14rem;
          color: #7e7e7e;
          text-shadow: 0px -1px 0px #c5c4bf;
        ;
        }
       }
      &:nth-child(2){
        clear: both;
         height: 0.13rem;
         line-height: 0.13rem;
        padding-top: 0.03rem;
        font-size: 0.08rem;
        text-align: center;
        color: #989795;
      }
      &:nth-child(3) img {
        width: 0.95rem;
      }
      &:nth-child(4){
         font-size: 0.07rem;
         line-height: 0.07rem;
         padding-top: 0.04rem;
         padding-bottom: 0.03rem;
          float:right;
        img{
          height: 0.09rem;
          width: 0.09rem;
          padding-left: 0.03rem;
        }
        span{
          font-size: 0.07rem;
          line-height: 0.07rem;
          padding-left: 0.02rem;
          color: #a89c9a;
        }
       }
    }
    .diary-arrow{
      position:absolute;
      top:0.25rem;
      left:-0.05rem;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 5px solid #fef9f0;
      border-bottom: 5px solid transparent;
    }
  }
</style>
