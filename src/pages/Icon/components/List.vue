<template>
  <div class="list-wrap">
    <div class="list-wrapper" ref="scroll">
      <ul class="list-content">
        <router-link
          :to="'/Paper/' + item.id"
          tag="li"
          v-for="item of reverseList"
          :key="item.id"
          class="list-item border-top"
        >
          <p class="list-item-left">{{item.name}}</p>
          <p class="list-item-right">{{item.date}}</p>
        </router-link>
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
  props: {
    index: Number,
    list: Array
  },
  computed: {
    reverseList () {
      let result = []
      if (this.list) {
        const tmpList = this.list
        result = tmpList.reverse()
        this.refreshScroll()
      }
      return result
    }
  },
  components: {
    CommonFooter
  },
  methods: {
    // 刷新Scroll控件
    refreshScroll () {
      setTimeout(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            click: true,
            tap: true
          })
        } else {
          this.scroll.refresh()
          this.scroll.scrollTo(0, 0)
        }
      }, 100)
    }
  },
  activated () {
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
        .list-item-left {
          width: 70%;
          float: left;
          @ellipsis();
        }
        .list-item-right {
          float: right;
        }
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
