<template>
  <div class="header-wrap">
    以堪的个人博客
    <div class="iconfont icon-menu">≡</div>
    <div class="iconfont icon-myself">⊙</div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader'
}

</script>

<style lang="less" scpoed>

@import '~style/normal.less';

.header-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: @title-h;
  line-height: @title-h;
  font-size: @title-t;
  text-align: center;
  color: @title-clr;
  background: @title-bg;
  .icon-menu {
    position: absolute;
    top: 0;
    left: @title-space;
  }
  .icon-myself {
    position: absolute;
    top: 0;
    right: @title-space;
  }
}

</style>
