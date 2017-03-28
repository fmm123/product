<template>
  <div class="diary_write">
    <div class="diary_write_header">
      <span class="diary_write_left">
        <i class="iconfont ">&#xe612</i>
      </span>
      <div class="diary_write_title">发布图片</div>
      <span class="diary_write_send">发送</span>
    </div>
    <div class="diary_write_section">
      <div class="diary_write_introduce">分享新美丽图片，新鲜事...</div>
      <ul class="diary_write_pictures">
        <li><img src="../assets/fabu1_03.jpg" alt=""></li>
        <li><img src="../assets/fabu2_06.jpg" alt=""></li>
        <li><img src="../assets/fabu3_05.jpg" alt=""></li>
        <li><img src="../assets/fabu4_07.jpg" alt=""></li>
        <li><img src="../assets/fabu5_16.jpg" alt=""></li>
        <li><img src="../assets/fabu6_18.jpg" alt=""></li>
        <li><img src="../assets/fabu7_20.jpg" alt=""></li>
        <li><img src="../assets/fabu8_23.jpg" alt=""></li>
      </ul>
      <textarea name="" id="" cols="30" rows="10" class="diary_write_texts" style="resize: none;wrap:virtual;" ></textarea>
      <div class="diary_write_location">
        <div><i class="iconfont">&#xe516;</i>北京市，海淀区，东北旺南路</div>
        <div><i class="iconfont">&#xe608;</i>公开</div>
      </div>
    </div>

    <div class="diary_write_footer">
      <div><i class="iconfont">&#xe631;</i></div>
      <div><i class="iconfont">&#xe6a0;</i></div>
      <div><i class="iconfont">&#xe643;</i></div>
      <div><i class="iconfont">&#xe670;</i></div>
      <div><i class="iconfont">&#xe604;</i></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "diary_write",
  }
</script>
<style lang="scss">
  .diary_write {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .diary_write_header {
    height: 44px;
    background-color: #17b0b8;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

  span {
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .diary_write_left {
    font-size: 20px;
  }

  }

  .diary_write_section {
    flex: 1;
  }

  .diary_write_introduce {
    margin-top: 20px;
    margin-left: 4%;
  }

  .diary_write_pictures {
    display: flex;
    flex-wrap: wrap;

  li {
    width: 20%;
    height: 66px;
    padding-left: 4%;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  }
  .diary_write_texts {
    width: 91%;
    height: 28%;
    margin-top: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }

  .diary_write_location {
    display: flex;
    margin-left:4%;
    margin-right: 4%;
    margin-top: 10px;
    justify-content:space-between;
    div{
      height: 23px;
      border: 1px solid #a7a7a7;
      text-align:center;
      line-height:23px;
      &:nth-child(1){
         width: 70%;
        border-radius: 23px;
       }
      &:nth-child(2){
         width: 20%;
         border-radius: 23px;
       }
    }
  }

  .diary_write_footer {
    height: 44px;
    background-color: #383838;
    display: flex;

  div {
    width: 20%;
    text-align: center;
    line-height: 44px;
    color: #FFFFFF;
    i{
      font-size: 22px;
    }
  }

  }

</style>
