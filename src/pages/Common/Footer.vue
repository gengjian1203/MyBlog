<template>
  <div class="footer-wrap">
    <p class="footer-text">made by <span><a href="https://github.com/gengjian1203">gengjian1203</a></span></p>
    <p class="footer-text">E-mail:<span><a href="mailto:gengjian1203@foxmail.com">gengjian1203@foxmail.com</a></span></p>
  </div>
</template>

<script>

export default {
  name: 'CommonFooter'
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
  .footer-text {
    box-sizing: border-box;
    width: 100%;
    height: @footer-size-h;
    font-size: @footer-size;
    margin-top: @footer-space;
    @ellipsis();
  }
}

</style>
