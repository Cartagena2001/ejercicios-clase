import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/ejercicio1',
    name: 'Ejercicio1',
    component: () => import('../views/Ejercicio1.vue')
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio2',
    component: () => import('../views/Ejercicio2.vue')
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    component: () => import('../views/Ejercicio3.vue')
  },
  {
    path: '/ejercicio4',
    name: 'Ejercicio4',
    component: () => import('../views/Ejercicio4.vue')
  },
  {
    path: '/ejercicio5',
    name: 'Ejercicio5',
    component: () => import('../views/Ejercicio5.vue')
  },
  {
    path: '/ejercicio6',
    name: 'Ejercicio6',
    component: () => import('../views/Ejercicio6.vue')
  },
  {
    path: '/ejercicio7',
    name: 'Ejercicio7',
    component: () => import('../views/Ejercicio7.vue')
  },
  {
    path: '/ejercicio8',
    name: 'Ejercicio8',
    component: () => import('../views/Ejercicio8.vue')
  },
  {
    path: '/ejercicio9',
    name: 'Ejercicio9',
    component: () => import('../views/Ejercicio9.vue')
  },
  {
    path: '/ejercicio10',
    name: 'Ejercicio10',
    component: () => import('../views/Ejercicio10.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
