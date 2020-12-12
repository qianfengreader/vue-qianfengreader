import Vue from 'vue'
import Router from 'vue-router'
import registry from '@/components/registry'
import login from '@/components/login'
import goods from '@/components/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path:'/registry',
      name:'registry',
      component:registry
    },{
      path:'/goods',
      name:'goods',
      component:goods
    }
  ]
})
