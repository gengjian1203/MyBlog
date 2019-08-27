<template>
  <div class="paper"  @touchmove.prevent="">
    <common-header
      v-if="List.length && Icon.length"
      :title="List[nIcon][nPaper].name"
      :list="Icon"
    >
    </common-header>
    <paper-navigation
      v-if="List.length && Icon.length"
      :nIcon="nIcon"
      :icon="Icon[nIcon].name"
      :title="List[nIcon][nPaper].name"
    >
    </paper-navigation>
    <paper-word v-if="List.length && Icon.length" :strUrl="List[nIcon][nPaper].path"></paper-word>
  </div>
</template>

<script>

import axios from 'axios'
import CommonHeader from 'Common/Header'
import PaperNavigation from './components/Navigation'
import PaperWord from './components/Word'

export default {
  name: 'Paper',
  props: {
    id: String
  },
  data () {
    return {
      Icon: [],
      List: []
    }
  },
  computed: {
    nIcon () {
      return Math.floor(parseInt(this.id) / 10000)
    },
    nPaper () {
      return Math.floor(parseInt(this.id) % 10000)
    }
  },
  components: {
    CommonHeader,
    PaperNavigation,
    PaperWord
  },
  methods: {
    getPaperInfo () {
      axios.get('/api/paper.json').then(this.getPaperInfoSucc)
      // 远程调用
      // axios.get('https://raw.githubusercontent.com/gengjian1203/MyBlog/master/static/mock/paper.json').then(this.getPaperInfoSucc)
    },
    getPaperInfoSucc (res) {
      const r = res.data
      if (r.ret && r.data) {
        const data = r.data
        this.Icon = data.Icon
        this.List = data.File
      }
    }
  },
  mounted () {
    this.getPaperInfo()
  }
}
</script>

<style lang="less" scoped>

</style>
