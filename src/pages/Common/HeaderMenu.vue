<template>
  <div class="menu-wrap" @click="HandleMenuClose">
    <div class="menu-left">
      <div class="menu-head border-bottom">
        <div class="menu-left-name">gengjian1203</div>
        <div class="menu-left-text">You can either travel or read, but either your body or soul must be on the way.</div>
      </div>
      <ul class="menu-data">
        <router-link to="/" tag="li" class="menu-item border-bottom">首页</router-link>
        <router-link
          v-for="item of list"
          :key="item.id"
          :to="'/Icon/' + item.id"
          tag="li"
          class="menu-item border-bottom iconfont"
        >
          &#xe86e;{{item.name}}
        </router-link>
      </ul>
    </div>
    <div class="menu-right"></div>
  </div>
</template>

<script>

export default {
  name: 'HeaderMenu',
  props: {
    list: Array
  },
  methods: {
    HandleMenuClose () {
      this.$emit('close')
    }
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.menu-wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .menu-left {
    float: left;
    width: 60%;
    height: 100%;
    color: #ffffff;
    background: @common-clr;
    border-radius: 0 @common-radius @common-radius 0;
    .menu-head {
      overflow: hidden;
      width: 100%;
      height: calc(@title-h * 2);
      text-align: left;
      .menu-left-name {
        font-size: @menu-name-size;
        line-height: @menu-name-size;
        padding: @common-space;
      }
      .menu-left-text {
        font-size: @menu-text-size;
        line-height: @menu-text-size;
        padding: 0 @common-space;
      }
    }
    .menu-data {
      width: 100%;
      .menu-item {
        box-sizing: border-box;
        width: 100%;
        height: @menu-list-h;
        line-height: @menu-list-h;
        font-size: @menu-list-size;
        text-align: left;
        padding: 0 @common-space;
      }
    }
  }
  .menu-right {
    float: left;
    width: 40%;
    height: 100%;
  }
}

</style>
