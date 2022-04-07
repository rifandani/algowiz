import { createRouter, createWebHistory } from 'vue-router'
// files
import { routes } from './routes'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
