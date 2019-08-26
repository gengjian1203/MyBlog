<template>
  <div class="set-wrap" @click="HandleSetClose" @touchmove.prevent="">
    <div id="red" class="ball red" @click="HandleBallClick"></div>
    <div id="blue" class="ball blue" @click="HandleBallClick"></div>
    <div id="green" class="ball green" @click="HandleBallClick"></div>
    <div id="yellow" class="ball yellow" @click="HandleBallClick"></div>
    <div id="purple" class="ball purple" @click="HandleBallClick"></div>
  </div>
</template>

<script>

export default {
  name: 'HeaderSet',
  methods: {
    HandleSetClose () {
      console.log('bShow false')
      this.$emit('close')
    },
    HandleBallClick (el) {
      console.log(el.target.id)
    }
  }
}

</script>

<style lang="less" scoped>

@import '~style/normal.less';

.set-wrap {
  width: 100%;
  height: 100%;
  .ball {
    position: absolute;
    width: @title-size;
    height: @title-size;
    border-radius: 50%;
    box-shadow: 0 0 .1rem .05rem #ffffff;
  }
  .red {
    background: red;
    top: .24rem;
    right: 1.40rem;
  }
  .blue {
    background: blue;
    top: .62rem;
    right: 1.32rem;
  }
  .green {
    background: green;
    top: .95rem;
    right: 1.11rem;
  }
  .yellow {
    background: yellow;
    top: 1.16rem;
    right: .78rem;
  }
  .purple {
    background: purple;
    top: 1.24rem;
    right: .4rem;
  }
}
</style>
