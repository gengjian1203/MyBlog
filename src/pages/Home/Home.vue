<template>
  <div class="home">
    <home-header :title="title"></home-header>
    <div class="wrapper" ref="scroll">
      <div class="content">
        <home-search></home-search>
        <home-shown></home-shown>
        <home-icon></home-icon>
        <home-list></home-list>
        <home-list></home-list>
        <home-list></home-list>
        <home-list></home-list>
        <home-footer></home-footer>
      </div>
    </div>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import HomeHeader from 'Common/Header'
import HomeSearch from './components/Search'
import HomeShown from './components/Shown'
import HomeIcon from './components/Icon'
import HomeList from './components/List'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      title: '耿健的个人博客'
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeShown,
    HomeIcon,
    HomeList,
    HomeFooter
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
      }
    })
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.home {
  .wrapper {
    overflow: hidden;
    position: absolute;
    top: @title-h;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
