import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const News  =()=>import('../components/infor/news.vue')
const Message =()=>import('../components/infor/message.vue')
const Profile =()=>import('../components/infor/profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    mete:{
      title:'首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      title:'关于'
    },
    beforeEnter:((to,form,next)=>{
      console.log('about beforeEnter');
      next()
    })
  },
  {
    path:'/user/:id',
    component:()=>import('../components/user.vue'),
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
    children:[
      {
        path:'news',
        component:News,
        meta:{
          title:'新闻'
        }
      },
      {
        path:'message',
        component:Message,
        meta:{
          title:'资讯'
        }
      }
    ]
  }
]

const router = new VueRouter({
	mode:'history',
	routes
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router
