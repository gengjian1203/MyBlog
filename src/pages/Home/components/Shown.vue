<template>
  <div class="shown-wrap">
    <swiper class="shown-content" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <a href="https://github.com/gengjian1203">
          <img class="shown-item" src="~img/shown_github.jpg" alt="github">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://gengjian1203.github.io/BaiDuIFE_Day54/">
          <img class="shown-item" src="~img/shown_football.jpg" alt="github">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://gengjian1203.github.io/QunarTravel/dist/#/">
          <img class="shown-item" src="~img/shown_travel.jpg" alt="github">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeShown',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // 循环滚动
        loop: true,
        // 自动轮播2.5s/图
        autoplay: {
          delay: 2500,
          // 点击Swiper后不自动停止
          disableOnInteraction: false
        }
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

.swiper-pagination {
  bottom: 2px;
}

.shown-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding: 0 @common-space 40% @common-space;
  background: @common-bg;
  .shown-content {
    width: 100%;
    border-radius: @common-radius;
    .shown-item {
      width: 100%;
    }
  }
}

</style>
