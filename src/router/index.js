import { createRouter, createWebHistory } from 'vue-router'

import MainViev from '../views/MainViev.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainViev
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
