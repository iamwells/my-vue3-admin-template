import { createRouter, createWebHistory } from 'vue-router'

import IndexLayout from '@/layout/index/IndexLayout.vue'
import SignLayout from '@/layout/sign/SignLayout.vue'
import progress from '@/utils/progress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexLayout,
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignLayout,
      children: [],
    },
  ],
})

router.beforeEach((to, from, next) => {
  progress.start()
  next()
})

router.afterEach((to, from, failure) => {
  progress.done()
})

export default router
