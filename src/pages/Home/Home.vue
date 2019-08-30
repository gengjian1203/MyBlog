<template>
  <div class="home" @touchmove.prevent="">
    <common-header v-if="Icon.length" :title="title" :list="Icon"></common-header>
    <div class="wrapper" ref="scroll">
      <div class="content">
        <home-search :list="List"></home-search>
        <home-shown :list="Shown"></home-shown>
        <home-icon :list="Icon"></home-icon>
        <home-list
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
    <div class="iconfont icon-top" v-show="bShowTop" @click="HandleTopClick">&#xe88d;</div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
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
      bShowTop: false,
      timer: null,
      Shown: [],
      Icon: [],
      List: []
    }
  },
  computed: {
    ...mapState(['nDev']),
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
            tap: true,
            probeType: 3
          })
          // 滚动组件的滚动回调函数
          this.scroll.on('scroll', (pos) => {
            // 函数节流
            if (!this.timer) {
              this.timer = setTimeout(() => {
                if (pos.y < -50) {
                  this.bShowTop = true
                } else {
                  this.bShowTop = false
                }
                clearTimeout(this.timer)
                this.timer = null
              }, 200)
            }
          })
        } else {
          this.scroll.refresh()
          this.scroll.scrollTo(0, 0)
        }
      }, 100)
    },
    // 点击置顶按钮
    HandleTopClick () {
      this.scroll.scrollTo(0, 0, 500)
    },
    // 获取home.json数据
    getHomeInfo () {
      if (this.nDev) {
        // 本地调用
        axios.get('/api/home.json').then(this.getHomeInfoSucc)
      } else {
        // 远程调用
        axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/home.json').then(this.getHomeInfoSucc)
      }
    },
    // 获取home.json数据，回调函数
    getHomeInfoSucc (res) {
      const r = res.data
      // console.log(r)
      if (r.ret && r.data) {
        const data = r.data
        this.Shown = data.Shown
      }
      this.refreshScroll()
    },
    // 获取icon.json数据
    getIconInfo () {
      if (this.nDev) {
        // 本地调用
        axios.get('/api/icon.json').then(this.getIconInfoSucc)
      } else {
        // 远程调用
        axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json').then(this.getIconInfoSucc)
      }
    },
    // 获取icon.json数据，回调函数
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
  .icon-top {
    position: absolute;
    width: @icon-size;
    height: @icon-size;
    right: @icon-size;
    bottom: @icon-size;
    border: .15rem solid @common-bg;
    border-radius: 50%;
    font-size: @icon-text-size;
    line-height: @icon-size;
    text-align: center;
    color: #ffffff;
    background: @common-clr;
    opacity: .9;
  }
}

</style>
