import { createRouter, createWebHistory } from 'vue-router'

import MainViev from '../views/MainViev.vue'


const routes = [
  {
    path: '/Messenger/',
    name: 'Main',
    component: MainViev
  },
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
})

export default router
