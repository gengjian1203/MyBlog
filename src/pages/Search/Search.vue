<template>
  <div class="search" @touchmove.prevent="">
    <input class="search-input" type="text" placeholder="请输入你要搜索的内容" v-model="strSearch"/>
    <router-link to="/" class="search-canncel">取消</router-link>
    <div class="search-wrapper" ref="scroll" >
      <ul class="search-content">
        <router-link
          tag="li"
          :to="'/Paper/' + item.id"
          class="search-item border-bottom"
          v-for="(item, index) of listResult"
          :key="index"
        >
          <div class="search-item-left">{{item.name}}</div>
          <div class="search-item-right">{{item.date}}</div>
        </router-link>
        <li class="search-item" v-show="bShowNone">未找到相关内容</li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import axios from 'axios'
import BScroll from '@better-scroll/core'

export default {
  name: 'Search',
  data () {
    return {
      strSearch: '',
      timer: null,
      list: [],
      listResult: []
    }
  },
  computed: {
    ...mapState(['nDev']),
    bShowNone () {
      return (!this.listResult.length && this.strSearch)
    }
  },
  watch: {
    strSearch (value) {
      this.listResult.length = 0
      if (value) {
        // 函数防抖
        clearTimeout(this.timer)
        // 函数查询
        this.timer = setTimeout(() => {
          this.list.forEach((item, index) => {
            item.forEach((it, i) => {
              if (it.name.indexOf(value) > -1) {
                const tmpChild = {
                  'id': it.id,
                  'name': it.name,
                  'date': it.date
                }
                this.listResult.push(tmpChild)
                this.refreshScroll()
              }
            })
          })
        }, 100)
        this.timer = null
      }
    }
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
    getSearchInfo () {
      if (this.nDev) {
        // 本地调用
        axios.get('/api/icon.json').then(this.getSearchInfoSucc)
      } else {
        // 远程调用
        axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json').then(this.getSearchInfoSucc)
      }
    },
    getSearchInfoSucc (res) {
      const r = res.data
      if (r.ret && r.data) {
        const data = r.data
        this.list = data.File
      }
    }
  },
  mounted () {
    this.getSearchInfo()
  },
  activated () {
    this.refreshScroll()
  }
}

</script>

<style lang="less" scoped>

@import "~style/normal.less";

.border-bottom {
  &:before {
    border-color: #cccccc;
  }
}

.search {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: @common-space;
  background: @common-bg;
  .search-input {
    box-sizing: border-box;
    float: left;
    width: 88%;
    height: calc(@title-h - .2rem);
    line-height: calc(@title-h - .2rem);
    color: #cccccc;
    background: #ffffff;
    border-radius: @common-radius;
    padding: 0 .1rem;
    text-align: center;
  }
  .search-canncel {
    box-sizing: border-box;
    float: right;
    width: 12%;
    height: calc(@title-h - .2rem);
    line-height: calc(@title-h - .2rem);
    text-align: right;
  }
  .search-wrapper {
    overflow: hidden;
    position: absolute;
    top: @title-h;
    left: 0;
    right: 0;
    bottom: 0;
    .search-content {
      .search-item {
        width: 100%;
        height: @list-h;
        line-height: @list-h;
        box-sizing: border-box;
        text-align: center;
        padding: 0 @common-space;
        .search-item-left {
          float: left;
          width: 70%;
          text-align: left;
          @ellipsis();
        }
        .search-item-right {
          float: right;
          width: 30%;
          text-align: right;
          @ellipsis();
        }
      }
    }
  }
}
</style>
