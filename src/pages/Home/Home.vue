<template>
  <div class="wrap">
    <home-header></home-header>
    <home-search></home-search>
    <home-shown></home-shown>
    <home-icon></home-icon>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeShown from './components/Shown'
import HomeIcon from './components/Icon'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch,
    HomeShown,
    HomeIcon
  }
}

</script>

<style lang="less" scoped>
/*
@import "~style/normal.less";

.wrapper {
  color: @color;
};
*/
</style>
