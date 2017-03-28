<template>
  <div class="g-section">
    <div id="g-near" class="g-near">
      <div>
        <div class="g-near-list">
          <aside class="g-title">
            <div class="g-logo">
              <img src="/static/img/images/header3_03.jpg" alt=""/>
            </div>
          </aside>
          <section class="g-content">
            <h4 class="g-tit"><span class="text-blue">better me</span>在<span class="text-blue">寻找花香蜜语</span>拍摄了照片</h4>
            <dl class="g-banner">
              <dt><img src="/static/img/images/zhibo1_06.jpg" alt=""/></dt>
              <dd>
                <p class="g-p">放纵的年纪！</p>
                <div class="g-div">
                <span class="g-hour">
                  <i class="iconfont">&#xe618;</i> 8分钟前
                </span>
                <span class="g-city">
                  <i class="iconfont">&#xe516;</i> 北京市
                </span>
                </div>
              </dd>
            </dl>
          </section>
        </div>
        <div class="g-near-list">
          <aside class="g-title">
            <div class="g-logo">
              <img src="/static/img/images/header4_06.jpg" alt=""/>
            </div>
          </aside>
          <section class="g-content">
            <h4 class="g-tit"><span class="text-blue">梦想实现家</span>在<span class="text-blue">旅途中</span>拍摄了照片</h4>
            <dl class="g-banner">
              <dt><img src="/static/img/images/zhibo2_12.jpg" alt=""/></dt>
              <dd>
                <p class="g-p">一望无际的沙漠！</p>
                <div class="g-div">
                <span class="g-hour">
                  <i class="iconfont">&#xe618;</i> 10分钟前
                </span>
                <span class="g-city">
                  <i class="iconfont">&#xe516;</i> 上海市
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
      this.$store.dispatch("changeCount",1);

      setTimeout(function () {
        new IScroll("#g-near");
      },300)
    }
  }
</script>
