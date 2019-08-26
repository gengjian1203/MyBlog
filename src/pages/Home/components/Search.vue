<template>
  <div class="search-wrap">
    <input class="search-input" type="text" placeholder="请输入你要搜索的内容"/>
  </div>
</template>

<script>

export default {
  name: 'HomeSearch'
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.search-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 0;
  padding: 0 @common-space @title-h @common-space;
  line-height: @title-h;
  text-align: center;
  background: @common-bg;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: calc(@title-h - .2rem);
    color: @common-clr;
    border: 1px solid @common-clr;
    border-radius: @common-radius;
    padding: 0 .1rem;
    text-align: center;
  }
}

</style>
