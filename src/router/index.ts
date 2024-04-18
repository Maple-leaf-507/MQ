import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'layout',
      // component: () => import('../views/indexPage/index.vue'),
      // component: HomeView,
      component: () => import('../components/layout/index.vue'),
      children:[
        {
          path:'/home',
          name: '首页',
          component: () => import('../views/indexPage/index.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path:'/:pathMatch(.*)*',
      name: '错误',
      component: () => import('../views/error/index.vue')
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.path === '/'){
    document.title = '首页'
    next('/home')
  }else{
    next()
    document.title = String(to.name)
  }
  
})

export default router
