import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Auth from '@/pages/auth/AuthPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth'
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/auth/forgotpassword',
    component: () => import('@/pages/auth/ForgotPasswordPage.vue')
  },
  {
    path: '/auth/resetpassword',
    component: () => import('@/pages/auth/ResetPasswordPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
