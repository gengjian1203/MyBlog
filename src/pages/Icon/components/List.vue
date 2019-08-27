<template>
  <div class="list-wrap">
    <div class="list-wrapper" ref="scroll">
      <ul class="list-content">
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-item iconfont border-top">&#xe86e;从axios中获取</li>
        <li class="list-tail border-top">———— 你已经看到我的底线了 ————</li>
      </ul>
    </div>
    <common-footer class="list-footer"></common-footer>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import CommonFooter from 'Common/Footer'

export default {
  name: 'IconList',
  components: {
    CommonFooter
  },
  activated () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: true,
          tap: true
        })
      } else {
        this.scroll.refresh()
        this.scroll.scrollTo(0, 0)
      }
    })
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.border-top {
  &:before {
    border-color: #cccccc;
  }
}

.list-wrap {
  .list-wrapper {
    overflow: hidden;
    position: fixed;
    top: calc(@title-h * 2);
    left: 0;
    right: 0;
    bottom: 0;
    background: @common-bg;
    .list-content {
      width: 100%;
      .list-item {
        box-sizing: border-box;
        width: 100%;
        height: 0;
        padding: 0 @common-space @list-h @common-space;
        line-height: @list-h;
      }
    }
    .list-tail {
      box-sizing: border-box;
      width: 100%;
      height: @footer-h;
      padding: 0 @common-space;
      line-height: @footer-h;
      text-align: center;
      font-size: @list-size;
    }
  }
  .list-footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
