import { createRouter, createWebHistory } from '@ionic/vue-router';
import Auth from '@/pages/auth/AuthPage.vue';
import TabsPage from '@/pages/westrock/OsTabsPage.vue';

const routes = [
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
  },
  {
    path: '/home',
    component: () => import('@/pages/westrock/HomePage.vue')
  },
  {
    path: '/schedules',
    component: () => import('@/pages/westrock/SchedulesPage.vue')
  },
  {
    path: '/partsinventory',
    component: () => import('@/pages/westrock/PartsInventory.vue')
  },
  {
    path: '/startservice',
    component: () => import('@/pages/westrock/StartService.vue')
  },
  {
    path: '/equipmentinventory',
    component: () => import('@/pages/westrock/EquipmentInventory.vue')
  },
  {
    path: '/equipmentinventory/transferpart',
    component: () => import('@/pages/westrock/TransferPart.vue')
  },
  {
    path: '/teste',
    component: () => import('@/pages/westrock/TesteComponentsPage.vue')
  },
  {
    path: '/os/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/os/servicestatus'
      },
      {
        path: 'servicestatus',
        component: () => import('@/pages/westrock/ostabs/ServiceStatus.vue')
      },
      {
        path: 'photogallery',
        component: () => import('@/pages/westrock/ostabs/PhotoGallery.vue')
      },
      {
        path: 'report',
        component: () => import('@/pages/westrock/ostabs/ReportService.vue')
      },
      {
        path: 'parts',
        component: () => import('@/pages/westrock/ostabs/parts/UsedParts.vue')
      },
      {
        path: 'map',
        component: () => import('@/pages/westrock/ostabs/MapTeste.vue')
      },
      {
        path: 'checklist',
        component: () => import('@/pages/westrock/ostabs/ChecklistMachine.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
