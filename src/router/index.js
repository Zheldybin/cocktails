import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('@/views/RecipeView.vue')
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('@/views/RandomView.vue')
    }
  ]
})

export default router
