import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Déclaration des routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFoundPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/MyLogin.vue')
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: () => import('../views/CataloguePage.vue')
  },
  {
    path: '/formation/:code',
    name: 'programme',
    component: () => import('../views/ProgrammeFormation.vue')
  },
  {
    path: '/inscription/:code',
    name: 'inscription',
    component: () => import('../views/InscriptionPage.vue')
  },
]

// Je déclare mon router et ses paramètres
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
});



// J'exporte le router pour qu'il soit disponible dans l'application
export default router;
