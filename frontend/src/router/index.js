import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: () => import('../views/ContactUsView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
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
    path: '/highest',
    name: 'highest',
    component: () => import( '../views/HighestView.vue')
  },
  {
    path: '/lowest',
    name: 'lowest',
    component: () => import( '../views/LowestView.vue')
  },
  {
    path: '/editproduct/:id',
    name: 'editproduct',
    props: true,
    component: () => import( '../views/EditView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/ProfileView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
