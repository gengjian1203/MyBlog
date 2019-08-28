import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1为本地环境、0为远程环境
    nDev: 0
    // nSelectColor: 0
  },
  actions: {
    // HandleSelectColor (ctx, value) {
    //   console.log('sss')
    //   ctx.commit('HandleSelectColor', value)
    // }
  },
  mutations: {
    // HandleSelectColor (state, value) {
    //   console.log('111')
    //   state.nSelectColor = value
    // }
  }
})
