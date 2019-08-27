<template>
  <div class="home">
    <common-header :title="title" :list="Icon"></common-header>
    <div class="wrapper" ref="scroll">
      <div class="content">
        <home-search></home-search>
        <home-shown :list="Shown"></home-shown>
        <home-icon :list="Icon"></home-icon>
        <home-list></home-list>
        <home-list></home-list>
        <home-list></home-list>
        <home-list></home-list>
        <common-footer></common-footer>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import BScroll from '@better-scroll/core'
import CommonHeader from 'Common/Header'
import HomeSearch from './components/Search'
import HomeShown from './components/Shown'
import HomeIcon from './components/Icon'
import HomeList from './components/List'
import CommonFooter from 'Common/Footer'

export default {
  name: 'Home',
  data () {
    return {
      title: '耿健的个人博客',
      Shown: [],
      Icon: []
    }
  },
  components: {
    CommonHeader,
    HomeSearch,
    HomeShown,
    HomeIcon,
    HomeList,
    CommonFooter
  },
  methods: {
    getHomeInfo () {
      // 本地调用
      // axios.get('api/home.json').then(this.getHomeInfoSucc)
      // 远程调用
      axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const r = res.data
      if (r.ret && r.data) {
        const data = r.data
        console.log(data)
        this.Shown = data.Shown
        this.Icon = data.Icon
      }
    }
  },
  mounted () {
    this.getHomeInfo()
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
