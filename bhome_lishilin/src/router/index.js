import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import myself from '@/components/myself'
import order from '@/components/order'
import diary from '@/components/diary'
import stroll from '@/components/stroll'
import diary_write from '@/components/diary_write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: "/index/home",
          name: "home",
          component: home
        },
        {
          path: "/index/myself",
          name: "myself",
          component: myself
        },
        {
          path: "/index/stroll",
          name: "stroll",
          component: stroll
        },
        {
          path: "/index/order",
          name: "order",
          component: order
        },
        {
          path: "/index/diary",
          name: "diary",
          component: diary,
        }
      ]
    },
    {
      path: "/diary_write",
      name: "diary_write",
      component: diary_write
    }
  ]
})
