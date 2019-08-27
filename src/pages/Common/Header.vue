<template>
  <div class="header-wrap">
    <div class="header-content">
      {{this.title}}
      <div class="icon iconfont icon-menu" @click="HandleMenuClick">&#xe890;</div>
      <div class="icon iconfont icon-set" @click="HandleSetClick">&#xe892;</div>
    </div>
    <!-- menu -->
    <transition name="menu">
      <header-menu
        :list="list"
        class="header-pop"
        v-show="bShowMenu"
        @close="HandleMenuClose"
      >
      </header-menu>
    </transition>
    <!-- set -->
    <transition name="set">
      <header-set class="header-pop" v-show="bShowSet" @close="HandleSetClose"></header-set>
    </transition>
  </div>
</template>

<script>

import HeaderMenu from './HeaderMenu'
import HeaderSet from './HeaderSet'

export default {
  name: 'CommonHeader',
  props: {
    title: String,
    list: Array
  },
  data () {
    return {
      bShowMenu: false,
      bShowSet: false
    }
  },
  components: {
    HeaderMenu,
    HeaderSet
  },
  methods: {
    HandleMenuClick () {
      console.log('Menu Click')
      this.bShowMenu = true
    },
    HandleSetClick () {
      console.log('Set Click')
      this.bShowSet = true
    },
    HandleMenuClose () {
      console.log('Menu close')
      this.bShowMenu = false
    },
    HandleSetClose () {
      console.log('Set close')
      this.bShowSet = false
    }
  }
}

</script>

<style lang="less" scpoed>

@import '~style/normal.less';

@keyframes menu-moveIn {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
@keyframes set-moveIn {
  from {
    transform-origin: right top;
    transform: rotate(90deg)
  }
  to {
    transform-origin: right top;
    transform: rotate(0deg)
  }
}

.menu-enter-active {
  animation: menu-moveIn .5s;
}

.set-enter-active {
  animation: set-moveIn .5s;
}
.set-leave-active {
  animation: set-moveIn .5s reverse;
}

.header-wrap {
  width: 100%;
  height: 0;
  padding-bottom: @title-h;
  line-height: @title-h;
  font-size: @title-size;
  text-align: center;
  color: @common-clr;
  background: @common-bg;
  .header-content {
    position: relative;
      .icon {
      position: absolute;
      top: 0;
      font-weight: bold;
      color: @common-clr;
      padding: 0 .2rem;
    }
    .icon-menu {
      left: @common-space;
    }
    .icon-set {
      right: @common-space;
    }
  }
  .header-pop {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
