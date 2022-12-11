import { createStore } from 'vuex'
import axios from 'axios'

// On crée le store de l'application (le container des données de l'appli). Les données sont à l'intérieur du "state".   
const store = createStore({
    state: {
        urlUploads: "http://localhost:1337",
        urlEndpoints: "http://localhost:1337/api",
        urlFront: 'http://localhost:8080',
        activeClass: '',
        header: {
            logo: '',
        },
        homepage: {
            hero: {
                title: '',
                content: '',
                backgroundImage: '',
                title2: '',
                content2:'',
                card : {
                    title: '',
                    content: '',
                    keywords: '',
                    },
                card2 : {
                    title: '',
                    content: '',
                    keywords: '',
                        },
                card3 : {
                    title: '',
                    content: '',
                    keywords: '',
                    },
                },
            about: {
                title: '',
                content: '',
                image: '',
                aboutContent: [],
                technologies: {
                    title: '',
                    logos: []
                },
                competency1: {
                    title: '',
                    content: '',
                },
                competency2: {
                    title: '',
                    content: '',
                },
                competency3: {
                    title: '',
                    content: '',
                },
                competency4: {
                    title: '',
                    content: '',
                }
            }        
        },
        formations: [],
        sessions: [],
        villes: [],
        categories: [],
        onTop: [],
    },

    // les mutations permettent de modifier de manière synchrone les datas. Elles prennent toujours en 1er argument le state, puis occasionnellement d'autres arguments (comme la donnée à modifier). 
    mutations: {
        CHANGE_ACTIVECLASS(state) {
            state.activeClass = ''
        },
        GET_HEADER(state, resultAction) {
            state.header.logo = `${store.state.urlUploads}${resultAction.attributes.logo.data.attributes.url}`; // la data 'logo' du state = la data à modifier en argument dans la mutation qui provient qui est en fait l'argument (et la réponse api) de l'action qui appelle cette mutation donc response.data.data. l'argument 'header' de la mutation représente le résultat de l'action donc 'response.data.data'
        }, 
        GET_HOMEPAGEHERO(state, resultAction) {
            state.homepage.hero.backgroundImage = `${store.state.urlUploads}${resultAction.attributes.hero.backgroundImage.data.attributes.url}`;
            state.homepage.hero.title = resultAction.attributes.hero.title;
            state.homepage.hero.content = resultAction.attributes.hero.content;
            state.homepage.hero.title2 = resultAction.attributes.hero.title2;
            state.homepage.hero.content2 = resultAction.attributes.hero.content2;
            state.homepage.hero.card.title = resultAction.attributes.hero.card.title;
            state.homepage.hero.card2.title = resultAction.attributes.hero.card2.title;
            state.homepage.hero.card3.title = resultAction.attributes.hero.card3.title;
            state.homepage.hero.card.content = resultAction.attributes.hero.card.content;
            state.homepage.hero.card2.content = resultAction.attributes.hero.card2.content;
            state.homepage.hero.card3.content = resultAction.attributes.hero.card3.content;
            state.homepage.hero.card.keywords = resultAction.attributes.hero.card.keywords;
            state.homepage.hero.card2.keywords = resultAction.attributes.hero.card2.keywords;
            state.homepage.hero.card3.keywords = resultAction.attributes.hero.card3.keywords;
        }, 
        GET_HOMEPAGEABOUT(state, resultAction) {
            state.homepage.about.title = resultAction.attributes.about.title;
            state.homepage.about.content = resultAction.attributes.about.content;
            state.homepage.about.image = `${store.state.urlUploads}${resultAction.attributes.about.image.data.attributes.url}`;
            state.homepage.about.aboutContent = resultAction.attributes.about.aboutContent;
            state.homepage.about.technologies.title = resultAction.attributes.about.technologies.title;
            state.homepage.about.technologies.logos = resultAction.attributes.about.technologies.logos.data;
            state.homepage.about.competency1.title = resultAction.attributes.about.competency1.title;
            state.homepage.about.competency1.content = resultAction.attributes.about.competency1.content;
            state.homepage.about.competency2.title = resultAction.attributes.about.competency2.title;
            state.homepage.about.competency2.content = resultAction.attributes.about.competency2.content;
            state.homepage.about.competency3.title = resultAction.attributes.about.competency3.title;
            state.homepage.about.competency3.content = resultAction.attributes.about.competency3.content;
            state.homepage.about.competency4.title = resultAction.attributes.about.competency4.title;
            state.homepage.about.competency4.content = resultAction.attributes.about.competency4.content;
        },

        GET_FORMATIONS(state, resultAction) {
            state.formations = resultAction; // la data array 'formations' du state = la data à modifier en argument dans la mutation qui provient qui est en fait l'argument (et la réponse api) de l'action qui appelle cette mutation donc response.data.data
            state.onTop = resultAction.filter(item => item.attributes.onTop === true); // Je récupère dans le tableau 'onTop' les formations qui sont 'à la une' !
        }, 
        GET_SESSIONS(state, sessions) {
            state.sessions = sessions;
        },
        GET_VILLES(state, villes) {
            state.villes = villes;
        },
        GET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
    },
    // Les actions permettent de réaliser des actions asynchrones comme la récupération d'une API. 
    actions: {
        // Fonction de récupération du header avec les données reçue de l'API
        getHeader( {commit} ) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/header?populate=*`)
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then(response => {
                commit('GET_HEADER', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Fonction de récupération de la homepage-hero avec les données reçue de l'API
        getHomepageHero( {commit} ) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/homepage?populate[0]=hero&populate[1]=hero.backgroundImage&populate[2]=hero.card&populate[3]=hero.card2&populate[4]=hero.card3`)
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées en passant par la mutation correspondante. 
            .then((response) => {
                commit('GET_HOMEPAGEHERO', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Fonction de mise à jour de la homepage-hero avec les données reçue de l'API
        getHomepageAbout( {commit} ) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/homepage?populate[0]=about&populate[1]=about.image&populate[2]=about.competency1&populate[3]=about.competency2&populate[4]=about.competency3&populate[5]=about.competency4&populate[6]=about&populate[7]=about.technologies&populate[8]=about.technologies.logos`)
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées en passant par la mutation correspondante. 
            .then((response) => {
                commit('GET_HOMEPAGEABOUT', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getFormations( {commit} ) {
            // Je fais un appel à l'API (attention, 'commit' est entre {})
            axios
            .get(`${store.state.urlEndpoints}/formations?populate=deep`)
            // Ensuite je récupère les données des formations et j'attribue aux datas du store les valeurs des données récupérées en passant par la mutation correspondante. 
            .then(response => {
                commit('GET_FORMATIONS', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getSessions( {commit} ) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/sessions?populate=deep`)
            // Ensuite je récupère les données des sessions et j'attribue aux datas du store les valeurs des données récupérées en passant par la mutation correspondante. 
            .then((response) => {
                commit('GET_SESSIONS', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getVilles( {commit}) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/villes?sort=nom`)
            // Ensuite je récupère les données des villes et j'attribue aux datas du store les valeurs des données récupérées, par ordre alphabétique, en passant par la mutation correspondante. 
            .then((response) => {
                commit('GET_VILLES', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getCategories( {commit} ) {
            // Je fais un appel à l'API
            axios
            .get(`${store.state.urlEndpoints}/category-formations?sort=nom`)
            // Ensuite je récupère les données des catégories de formation et j'attribue aux datas du store les valeurs des données récupérées, par ordre alphabétique, en passant par la mutation correspondante. 
            .then((response) => {
                commit('GET_CATEGORIES', response.data.data);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
    },

    // Les getters permettent de modifier ou de filtrer les données avant qu'elles ne soient mises à disposition des composants
    getters: {


    },

    // Les modules permettent de diviser notre store en plusieurs modules, chaque module ayant ses propres mutations, actions, getters.  
    modules: {

    }

})

export default store;