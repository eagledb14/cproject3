import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 4c008e : really dark purple
// 8600fe : dark purple
// b867ff : light purple
// 7a7083 : gray
// white : fff


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue')
  },
  {
    path: '/cards',
    name: "Cards",

    component: () => import("../views/Cards.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
