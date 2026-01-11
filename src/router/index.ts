import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/AboutMe.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/pages/Cv.vue'),
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('@/pages/AboutMe.vue'),
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('@/pages/Goals.vue'),
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('@/pages/References.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/Projects.vue'),
    }
  ],
})

export default router
