import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyLogin from '../views/MyLogin.vue'
import Catalogue from '../views/CataloguePage.vue'
import ProgrammeFormation from '../views/ProgrammeFormation.vue'
import InscriptionPage from '../views/InscriptionPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: MyLogin
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: Catalogue,
  },
  {
    path: '/formation/:code',
    name: 'programme',
    component: ProgrammeFormation,
  },
  {
    path: '/inscription/:code',
    name: 'inscription',
    component: InscriptionPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
