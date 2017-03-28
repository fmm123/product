import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import myself from '@/components/myself'
import order from '@/components/order'
import diary from '@/components/diary'
import stroll from '@/components/stroll'
import guide from '@/components/guide'
import main from '@/components/main'
import login from '@/components/login'
Vue.use(Router)
export default new Router({
  routes: [
     {
        path:"/",
        name:"guide",
        component:guide
    },
    {
        path:"/main",
        name:"main",
        component:main
    },
    {
        path:"/login",
        name:"login",
        component:login
    },
     {
        path: '/index',
        name: 'index',
        component: index,
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
    			component:stroll
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
