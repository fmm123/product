import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import myself from '@/components/myself'
import order from '@/components/order'
import diary from '@/components/diary'
import stroll from '@/components/stroll'
import near from '@/components/near'
import zhibo from '@/components/zhibo'
import hot from '@/components/hot'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/index/home',
      	children:[
    		{
    			path:"/index/home",
    			name:"home",
    			component:home
    		},
    		{
    			path:"/index/myself",
    			name:"myself",
    			component:myself
    		},
    		{
    			path:"/index/stroll",
    			name:"stroll",
    			component:stroll,
          redirect:'/index/stroll/near',
          children:[
            {
              path:'/index/stroll/near',
              name:"near",
              component:near
            },
            {
              path:'/index/stroll/zhibo',
              name:"zhibo",
              component:zhibo
            },
            {
              path:'/index/stroll/hot',
              name:"hot",
              component:hot
            }
          ]
    		},
    		{
    			path:"/index/order",
    			name:"order",
    			component:order
    		},
    		{
    			path:"/index/diary",
    			name:"diary",
    			component:diary
    		}
    	]
    }
  ]
})
