import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'home' },
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/pages/Home.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/pages/AboutMe.vue'),
        },
        {
          path: 'cv',
          name: 'cv',
          component: () => import('@/pages/Cv.vue'),
        },
        {
          path: 'aboutme',
          name: 'aboutme',
          component: () => import('@/pages/AboutMe.vue'),
        },
        {
          path: 'goals',
          name: 'goals',
          component: () => import('@/pages/Goals.vue'),
        },
        {
          path: 'references',
          name: 'references',
          component: () => import('@/pages/References.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/pages/Projects.vue'),
        },
        {
          path: 'impressum',
          name: 'impressum',
          component: () => import('@/pages/Impressum.vue'),
        },
      ],
    },
  ],
})

export default router
