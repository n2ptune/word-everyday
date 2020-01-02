import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/router/index'
import Olds from '@/router/olds'
import Contributing from '@/router/contributing'
import NotFound from './components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'olds',
    path: '/olds',
    component: Olds
  },
  {
    name: 'contributing',
    path: '/contributing',
    component: Contributing
  },
  {
    name: undefined,
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
