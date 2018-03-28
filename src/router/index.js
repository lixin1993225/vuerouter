import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Page01 from '@/components/page01'
import Page02 from '@/components/page02'
import Page01A from '@/components/page01/page01-A'
import Page01B from '@/components/page01/page01-B'
import End from '@/components/page01/B/end'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/home',
    	name:'home',
    	component:Home
    },
    {
    	path:'/Page01',
    	name:'Page01',
    	component:Page01,
    	children:[
    		{
    			path:'page01-A',
    			name:'page01-A',
    			component:Page01A,
    		},
    		{
    			path:'page01-b',
    			name:'page01-b',
    			component:Page01B,
    			children:[
    				{
    					path:'end',
    					name:'end',
    					component:End
    				}
    			]
    		}
    	]
    },
    {
    	path:'/page02',
    	name:'page02',
    	component:Page02
    }
  ]
})
