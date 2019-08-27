import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Icon from '@/pages/Icon/Icon'
import Paper from '@/pages/Paper/Paper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Icon/:id',
      name: 'Icon',
      component: Icon,
      props: true
    }, {
      path: '/Paper/:id',
      name: 'Paper',
      component: Paper,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
