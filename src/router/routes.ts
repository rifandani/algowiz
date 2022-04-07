import { RouteRecordRaw } from 'vue-router'
// files
import HomePage from '../pages/home/HomePage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route, which is lazy-loaded when the route is visited.
    component: () => import('../pages/about/AboutPage.vue'),
  },
]
