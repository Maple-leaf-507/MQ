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
          path: '/vue2',
          name: 'vue2',
          component: () => import('@/views/vue/vue2/index.vue')
        },
        {
          path: '/vue3',
          name: 'vue3',
          component: () => import('@/views/vue/vue3/index.vue')
        },
        {
          path: '/react',
          name: 'react',
          component: () => import('@/views/react/index.vue')
        },
        {
          path: '/tools',
          name: 'tools',
          component: () => import('@/views/tools/index.vue')
        },
        {
          path: '/three',
          name: '3D',
          component: () => import('@/views/3DModel/index.vue')
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../views/AboutView.vue')
        // }
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
