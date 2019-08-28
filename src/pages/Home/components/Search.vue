<template>
  <div class="search-wrap">
    <router-link tag="div" to="/Search/" class="search-input">
      请输入你要搜索的内容
    </router-link>
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
  text-align: center;
  background: @common-bg;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: calc(@title-h - .2rem);
    line-height: calc(@title-h - .2rem);
    color: #cccccc;
    background: #ffffff;
    border-radius: @common-radius;
    padding: 0 .1rem;
    text-align: center;
  }
}

</style>
