import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Authentication/LoginView.vue'
import DashboardVue from '@/layouts/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Authentication/RegisterView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/Authentication/ForgotpasswordView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Dashboard/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Dashboard/AboutView.vue')
    }
  ]
})

export default router
