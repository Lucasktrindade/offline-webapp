import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/pages/Showcase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Showcase',
      component: Showcase
    }
  ]
})
