import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login.vue'
import index from '../components/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    name: 'Index',
    component: index
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
