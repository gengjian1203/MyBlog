<template>
  <div class="shown-wrap">
    <swiper class="shown-content" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <router-link :to="'/Paper/' + item.id">
          <img class="shown-item" :src="item.imgUrl" :alt="item.name">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeShown',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        // 循环滚动
        loop: true,
        // 自动轮播2.5s/图
        autoplay: {
          delay: 2500,
          stopOnLastSlide: false,
          // 点击Swiper后不自动停止
          disableOnInteraction: false
        }
      }
    }
  },
  activated () {
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
