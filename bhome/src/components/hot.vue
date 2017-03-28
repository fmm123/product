<template>
  <div class="g-section">
    <div class="g-near" id="g-near">
      <div>
        <div class="g-hot-list">
          <div class="g-img">
            <img src="/static/img/images/remen1_03.jpg" alt=""/>
          </div>
          <div class="g-message">
            <p class="g-m-tit">
              放流在海豚湾
            </p>
            <div>2013.09.29</div>
            <div>8天</div>
          </div>
        </div>
        <div class="g-hot-list">
          <div class="g-img">
            <img src="/static/img/images/remen2_06.jpg" alt=""/>
          </div>
          <div class="g-message">
            <p class="g-m-tit">
              放流在海豚湾
            </p>
            <div>2013.09.29</div>
            <div>8天</div>
          </div>
        </div>
        <div class="g-hot-list">
          <div class="g-img">
            <img src="/static/img/images/remen1_03.jpg" alt=""/>
          </div>
          <div class="g-message">
            <p class="g-m-tit">
              放流在海豚湾
            </p>
            <div>2013.09.29</div>
            <div>8天</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from "vuex";
  export default {
    mounted () {
      this.$store.dispatch("changeCount",2);

      setTimeout(function () {
        new IScroll("#g-near");
      },300)
    }
  }
</script>
