<template>
  <div class="nav-wrap">
    <router-link to="/" class="nav-text">首页</router-link>
    <div class="nav-text">></div>
    <div class="nav-text">{{this.title}}</div>
  </div>
</template>

<script>

export default {
  name: 'IconNavigation',
  props: {
    title: String
  }
}

</script>

<style lang="less" scoped>

@import '~style/normal.less';

.nav-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 0;
  line-height: @title-h;
  padding: 0 @common-space @title-h @common-space;
  background: @common-bg;
  .nav-text {
    float: left;
    margin: 0 .1rem;
  }
}

</style>
