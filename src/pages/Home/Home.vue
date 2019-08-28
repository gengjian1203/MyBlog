<template>
  <div class="home" @touchmove.prevent="">
    <common-header v-if="Icon.length" :title="title" :list="Icon"></common-header>
    <div class="wrapper" ref="scroll">
      <div class="content">
        <home-search :list="List"></home-search>
        <home-shown :list="Shown"></home-shown>
        <home-icon :list="Icon"></home-icon>
        <home-list
          v-if="index < 11"
          v-for="(item, index) of reverseList"
          :key="item.id"
          :index="index"
          :title="Icon[index].name"
          :list="item"
        >
        </home-list>
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
      Icon: [],
      List: []
    }
  },
  computed: {
    reverseList () {
      const result = []
      if (this.List) {
        for (let item of this.List) {
          const child = item.reverse()
          result.push(child)
        }
      }
      return result
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
    },
    getHomeInfo () {
      // 本地调用
      axios.get('/api/home.json').then(this.getHomeInfoSucc)
      // 远程调用
      // axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const r = res.data
      // console.log(r)
      if (r.ret && r.data) {
        const data = r.data
        this.Shown = data.Shown
      }
      this.refreshScroll()
    },
    getIconInfo () {
      // 本地调用
      axios.get('/api/icon.json').then(this.getIconInfoSucc)
      // 远程调用
      // axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json').then(this.getIconInfoSucc)
    },
    getIconInfoSucc (res) {
      const r = res.data
      if (r.ret && r.data) {
        const data = r.data
        this.List = data.File
        this.Icon = data.Icon
      }
      this.refreshScroll()
    }
  },
  mounted () {
    this.getHomeInfo()
    this.getIconInfo()
  },
  activated () {
    this.refreshScroll()
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
