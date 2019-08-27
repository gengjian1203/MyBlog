<template>
  <div class="icon">
    <common-header :title="arrTitle[nIndex]"></common-header>
    <icon-navigation :title="arrTitle[nIndex]"></icon-navigation>
    <icon-list></icon-list>
  </div>
</template>

<script>

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
      arrTitle: ['HTTP专栏', 'CSS专栏', 'JavaScript专栏', 'Vue专栏', 'Node专栏',
        'C++专栏', '算法专栏', '设计模式专栏', '逆向与破解专栏', '常用工具专栏']
    }
  },
  computed: {
    nIndex () {
      const n = (parseInt(this.id) % 10000)
      console.log(n)
      return n
    }
  },
  components: {
    CommonHeader,
    IconNavigation,
    IconList
  },
  mounted () {
    console.log(this.arrTitle)
    console.log(this.id)
  }
}

</script>

<style lang="less" scoped>

</style>
