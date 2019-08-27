<template>
  <div class="nav-wrap">
    <router-link to="/" class="nav-text">首页</router-link>
    <div class="nav-text">></div>
    <router-link :to="nPath" class="nav-text">{{icon}}</router-link>
    <div class="nav-text">></div>
    <div class="nav-text">{{title}}</div>
  </div>
</template>

<script>

export default {
  name: 'PaperNavigation',
  props: {
    nIcon: Number,
    icon: String,
    title: String
  },
  computed: {
    nPath () {
      return '/Icon/2000' + this.nIcon
    }
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
    max-width: 30%;
    margin: 0 .1rem;
    @ellipsis();
  }
}

</style>
