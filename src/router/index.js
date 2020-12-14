import Vue from 'vue'
import Router from 'vue-router'
import registry from '@/components/registry'
import login from '@/components/login'
import goods from '@/components/goods'
import head from '@/components/head/head'
import main from '@/components/main/main'
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
    },{
      path:'/head',
      name:'head',
      component:head,
      children:[
        {
          path:'main',
          component:main
        }
      ]
    }/*,{
      path:'/main',
      name:'main',
      component:main
    }*/
  ]
})
