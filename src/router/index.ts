import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Currencies from '../views/Currencies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'currencies',
    component: Currencies
  },
  {
    path: '/converter',
    name: 'converter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Converter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
