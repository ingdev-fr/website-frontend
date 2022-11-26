import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyLogin from '../views/MyLogin.vue'
import Catalogue from '../views/CataloguePage.vue'
import ProgrammeFormation from '../views/ProgrammeFormation.vue'

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
    component: Catalogue
  },
  {
    path: '/programme/:name',
    name: 'programme',
    component: ProgrammeFormation,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
