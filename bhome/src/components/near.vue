<template>
  <div class="g-section g-near" >
    <div id="g-near" class="g-near">
      <div>
        <div class="g-near-list">
        <aside class="g-title">
          <div class="g-logo">
            <img src="/static/img/images/header1_03.jpg" alt=""/>
          </div>
        </aside>
        <section class="g-content">
          <h4 class="g-tit"><span class="text-blue">小世界</span>在<span class="text-blue">办公室</span>拍摄了照片</h4>
          <dl class="g-banner">
            <dt><img src="/static/img/images/guang1_06.jpg" alt=""/></dt>
            <dd>
              <p class="g-p">轻松，高校的工作</p>
              <div class="g-div">
                <span class="g-hour">
                  <i class="iconfont">&#xe618;</i> 4分钟前
                </span>
                <span class="g-city">
                  <i class="iconfont">&#xe516;</i> 湖北省
                </span>
              </div>
            </dd>
          </dl>
        </section>
      </div>
        <div class="g-near-list">
          <aside class="g-title">
            <div class="g-logo">
              <img src="/static/img/images/header2_06.jpg" alt=""/>
            </div>
          </aside>
          <section class="g-content">
            <h4 class="g-tit"><span class="text-blue">梦想家</span>在<span class="text-blue">旅途中</span>拍摄了照片</h4>
            <dl class="g-banner">
              <dt><img src="/static/img/images/guang2_11.jpg" alt=""/></dt>
              <dd>
                <p class="g-p">一望无际啊！</p>
                <div class="g-div">
                <span class="g-hour">
                  <i class="iconfont">&#xe618;</i> 10分钟前
                </span>
                <span class="g-city">
                  <i class="iconfont">&#xe516;</i> 鸡西市
                </span>
                </div>
              </dd>
            </dl>
          </section>
        </div>
        <div class="g-near-list">
          <aside class="g-title">
            <div class="g-logo">
              <img src="/static/img/images/header1_03.jpg" alt=""/>
            </div>
          </aside>
          <section class="g-content">
            <h4 class="g-tit"><span class="text-blue">小世界</span>在<span class="text-blue">办公室</span>拍摄了照片</h4>
            <dl class="g-banner">
              <dt><img src="/static/img/images/guang1_06.jpg" alt=""/></dt>
              <dd>
                <p class="g-p">轻松，高校的工作</p>
                <div class="g-div">
                <span class="g-hour">
                  <i class="iconfont">&#xe618;</i> 4分钟前
                </span>
                <span class="g-city">
                  <i class="iconfont">&#xe516;</i> 湖北省
                </span>
                </div>
              </dd>
            </dl>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from "vuex";
  export default {
    mounted () {
      this.$store.dispatch("changeCount",0);

      setTimeout(function () {
        new IScroll("#g-near");
      },300);
    }
  }
</script>
