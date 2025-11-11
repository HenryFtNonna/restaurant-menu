import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../lib/supabase'
import IndexPages from '../components/pages/IndexPages.vue'
import HomePage from '../components/pages/homepage/HomePage.vue'
import LoginPage from '../components/pages/loginpage/LoginPage.vue'
import IndexDashboard from '../components/pages/admindashboard/IndexDashboard.vue'

const routes = [
  {
    path: '/',
    component: IndexPages,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'login',
        name: 'Login',
        component: LoginPage
      },
      {
        path: 'admin',
        name: 'Admin',
        component: IndexDashboard,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard dengan Supabase session check
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router