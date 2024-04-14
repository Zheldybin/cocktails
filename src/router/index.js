import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomeView.vue')
    },
    {
      path: '/cocktail/:rid',
      name: 'cocktail',
      component: () => import('@/pages/CocktailView.vue')
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('@/pages/CocktailRandomView.vue')
    }
  ]
})

export default router
