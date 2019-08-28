<template>
  <div class="icon" @touchmove.prevent="">
    <common-header v-if="arrMenu.length" :title="arrMenu[nIndex].name" :list="arrMenu"></common-header>
    <icon-navigation v-if="arrMenu.length" :title="arrMenu[nIndex].name"></icon-navigation>
    <icon-list v-if="arrList.length" :index="nIndex" :list="arrList[nIndex]"></icon-list>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import axios from 'axios'
import CommonHeader from 'Common/Header'
import IconNavigation from './components/Navigation'
import IconList from './components/List'

export default {
  name: 'Icon',
  props: {
    'id': String
  },
  data () {
    return {
      arrMenu: [],
      arrList: []
    }
  },
  computed: {
    ...mapState(['nDev']),
    nIndex () {
      const n = (parseInt(this.id) % 10000)
      return n
    }
  },
  components: {
    CommonHeader,
    IconNavigation,
    IconList
  },
  methods: {
    getIconInfo () {
      if (this.nDev) {
        // 本地调用
        axios.get('/api/icon.json').then(this.getIconInfoSucc)
      } else {
        // 远程调用
        axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/icon.json').then(this.getIconInfoSucc)
      }
    },
    getIconInfoSucc (res) {
      const r = res.data
      if (r.ret && r.data) {
        const data = r.data
        this.arrMenu = data.Icon
        this.arrList = data.File
      }
    }
  },
  mounted () {
    this.getIconInfo()
  }
}

</script>

<style lang="less" scoped>

</style>
