import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import examine from '@/components/examine'
import submission from '@/components/submission'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [{
        path: '/',
        component: submission,
      },{
        path: '/examine',
        component: examine,
      }]
    }
  ]
})
