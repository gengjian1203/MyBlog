<template>
  <div class="search-wrap border-bottom">
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
  padding-bottom: .8rem;
  line-height: .8rem;
  text-align: center;
  .search-input {
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - 2 * @title-space);
    height: .6rem;
    border: 1px solid #cccccc;
    border-radius: .1rem;
    padding: 0 .1rem;
    text-align: center;
  }
}

</style>
