import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyLogin from '../views/MyLogin.vue'
import Catalogue from '../views/CataloguePage.vue'
import ProgrammeFormation from '../views/ProgrammeFormation.vue'
import InscriptionPage from '../views/InscriptionPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

// Déclaration des routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Accueil INGDEV", 
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: NotFoundPage,
    meta: {
      title: "404 Page non trouvée !",
    }
  },
  {
    path: '/login',
    name: 'login',
    component: MyLogin,
    meta: {
      title: "Login", 
    }
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: Catalogue,
    meta: {
      title: "Catalogue des formations INGDEV", 
    }
  },
  {
    path: '/formation/:code',
    name: 'programme',
    component: ProgrammeFormation,
    meta: {
      title: "Programme de formation INGDEV", 
    }
  },
  {
    path: '/inscription/:code',
    name: 'inscription',
    component: InscriptionPage,
    meta: {
      title: "Page des inscriptions", 
    }
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

// Grace à la méthode 'afterEach()' de router, je déclare les titres et descriptions des pages web de l'appli en les associant aux métas déclarées dans les routes.
router.afterEach((to) => {
  document.title = to.meta.title;
})

// J'exporte le router pour qu'il soit disponible dans l'application
export default router;
