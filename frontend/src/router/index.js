import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../views/ContactUsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/single/:id',
    name: 'single',
    props: true,
    component: () => import( '../views/SingleView.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import( '../views/ShoesView.vue')
  },
  {
    path: '/tops',
    name: 'tops',
    component: () => import( '../views/TopsView.vue')
  },
  {
    path: '/bottoms',
    name: 'bottoms',
    component: () => import( '../views/BottomsView.vue')
  },
  {
    path: '/editproduct/:id',
    name: 'editproduct',
    props: true,
    component: () => import( '../views/EditView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
