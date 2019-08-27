<template>
  <div class="icon-wrap">
    <swiper class="icon-content" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="icon-page">
        <router-link
          tag="div"
          v-for="item of list"
          :key="item.id"
          :to="'/Icon/' + item.id"
          class="icon-item"
        >
          <div class="icon-item-circle">{{item.logo}}</div>
          <p class="icon-item-name">{{item.name}}</p>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
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
