import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Bootstrap
import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Fontawesome
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'
    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    /* import specific icons */
    import { faHouseUser, faStore, faLightbulb, faRightToBracket, faChevronRight, faComputer, faBookOpen, faCertificate, faBarsProgress } from '@fortawesome/free-solid-svg-icons'

    /* add icons to the library */
    library.add(faHouseUser, faStore, faLightbulb, faRightToBracket, faChevronRight, faComputer, faBookOpen, faCertificate, faBarsProgress)


createApp(App)
    .use(BootstrapVue3)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(store) // on exporte pour l'ensemble des composants un middleware utilisant vuex.
    .use(VueAxios, axios)
    .mount('#app')
