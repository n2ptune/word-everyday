import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './router/index'
import NotFound from './components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
