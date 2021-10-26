import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homepage.vue'
import Categorias from '../views/pageCategorias.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categorias
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
