<template>
  <div class="icon-wrap">
    <swiper class="icon-content" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="icon-page">
        <div class="icon-item">
          <div class="icon-item-circle">H</div>
          <p class="icon-item-name">Html</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">C</div>
          <p class="icon-item-name">CSS</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">JS</div>
          <p class="icon-item-name">JavaScript</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">V</div>
          <p class="icon-item-name">Vue</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">N</div>
          <p class="icon-item-name">Node</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">C</div>
          <p class="icon-item-name">C++</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">算</div>
          <p class="icon-item-name">经典算法</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">设</div>
          <p class="icon-item-name">设计模式</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">逆</div>
          <p class="icon-item-name">逆向与破解</p>
        </div>
        <div class="icon-item">
          <div class="icon-item-circle">工</div>
          <p class="icon-item-name">常用工具</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.icon-wrap {
  box-sizing: border-box;
  width: 100%;
  height: @icon-h;
  padding: 0 @common-space;
  background: @common-bg;
  .icon-content {
    width: 100%;
    border-radius: @common-radius;
    background: #ffffff;
    .icon-page {
      width: 100%;
      .icon-item {
        position: relative;
        float: left;
        width: 20%;
        height: 0;
        padding-bottom: @icon-item-h;
        text-align: center;
        .icon-item-circle {
          width: @icon-item-circle-r;
          height: 0;
          line-height: @icon-item-circle-r;
          padding-bottom: @icon-item-circle-r;
          margin: @icon-item-circle-space auto @icon-item-circle-space auto;
          font-size: @icon-item-circle-size;
          color: #ffffff;
          background: @common-clr;
          box-shadow: 0px 0px .2rem .05rem @common-clr;
          border-radius: 50%;
        }
        .icon-item-name {
          font-size: @icon-item-name-size;
        }
      }
    }

  }
}

</style>
