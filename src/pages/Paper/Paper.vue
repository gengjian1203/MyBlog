<template>
  <div class="paper"  @touchmove.prevent="">
    <common-header :title="id"></common-header>
    <paper-navigation></paper-navigation>
    <paper-word></paper-word>
  </div>
</template>

<script>

import CommonHeader from 'Common/Header'
import PaperNavigation from './components/Navigation'
import PaperWord from './components/Word'

export default {
  name: 'Paper',
  props: {
    id: String
  },
  components: {
    CommonHeader,
    PaperNavigation,
    PaperWord
  }
}
</script>

<style lang="less" scoped>

</style>
