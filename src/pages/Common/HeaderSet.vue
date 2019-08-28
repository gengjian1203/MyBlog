<template>
  <div class="set-wrap" @click="HandleSetClose" @touchmove.prevent="">
    <div id="0" class="ball red" @click="HandleBallClick"></div>
    <div id="1" class="ball blue" @click="HandleBallClick"></div>
    <div id="2" class="ball green" @click="HandleBallClick"></div>
    <div id="3" class="ball yellow" @click="HandleBallClick"></div>
    <div id="4" class="ball purple" @click="HandleBallClick"></div>
  </div>
</template>

<script>

// import { mapState, mapActions } from 'vuex'

export default {
  name: 'HeaderSet',
  methods: {
    // ...mapActions(['HandleSelectColor']),
    HandleSetClose () {
      this.$emit('close')
    },
    HandleBallClick (el) {
      // this.HandleSelectColor(parseInt(el.target.id))
      console.log(parseInt(el.target.id))
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
