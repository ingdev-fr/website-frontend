import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Tailwind

// Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"


// Fontawesome
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'
    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    /* import specific icons */
    import { faHouseUser, faStore, faLightbulb, faRightToBracket, faChevronRight, faComputer, faBookOpen, faCertificate, faBarsProgress, faMicrochip } from '@fortawesome/free-solid-svg-icons'

    /* add icons to the library */
    library.add(faHouseUser, faStore, faLightbulb, faRightToBracket, faChevronRight, faComputer, faBookOpen, faCertificate, faBarsProgress, faMicrochip)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store) // on exporte pour l'ensemble des composants un middleware utilisant vuex.
    .use(VueAxios, axios)
    .mount('#app')
