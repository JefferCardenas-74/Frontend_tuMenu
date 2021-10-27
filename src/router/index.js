import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homepage.vue'
import Categorias from '../views/pageCategorias.vue'
import Categoria from '../components/Categoria.vue'

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
  },
  {
    path: '/categorias/:id',
    name: 'categoriasId',
    component: Categorias,
    props: true
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
