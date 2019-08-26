<template>
  <div class="footer-wrap">
    <p>made by gengjian1203</p>
  </div>
</template>

<script>

export default {
  name: 'HomeFooter'
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.footer-wrap {
  box-sizing: border-box;
  width: 100%;
  height: @footer-h;
  background: @common-bg;
  border-top: 1px solid #999999;
  text-align: center;
}

</style>
