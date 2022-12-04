import { createStore } from 'vuex'
import axios from 'axios'

// On crée le store de l'application (le container des données de l'appli). Les données sont à l'intérieur du "state".   
const store = createStore({
    state: {
        urlUploads: "http://localhost:1337",
        urlEndpoints: "http://localhost:1337/api",
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
    },

    // les mutations permettent de modifier de manière synchrone les datas. Elles prennent toujours en 1er argument le state, puis occasionnellement d'autres arguments. 
    mutations: {
        CHANGE_ACTIVECLASS(state) {
            state.activeClass = ''
        }

        
    },
    // Les actions permettent de réaliser des actions asynchrones sur les datas comme la récupération d'une API. 
    actions: {
        // Fonction de récupération du header avec les données reçue de l'API
        getHeader() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/header?populate=*')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.header.logo = `http://localhost:1337${response.data.data.attributes.logo.data.attributes.url}`;
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Fonction de récupération de la homepage-hero avec les données reçue de l'API
        getHomepageHero() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/homepage?populate[0]=hero&populate[1]=hero.backgroundImage&populate[2]=hero.card&populate[3]=hero.card2&populate[4]=hero.card3')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.homepage.hero.backgroundImage = `http://localhost:1337${response.data.data.attributes.hero.backgroundImage.data.attributes.url}`;
                store.state.homepage.hero.title = response.data.data.attributes.hero.title;
                store.state.homepage.hero.content = response.data.data.attributes.hero.content;
                store.state.homepage.hero.title2 = response.data.data.attributes.hero.title2;
                store.state.homepage.hero.content2 = response.data.data.attributes.hero.content2;
                store.state.homepage.hero.card.title = response.data.data.attributes.hero.card.title;
                store.state.homepage.hero.card2.title = response.data.data.attributes.hero.card2.title;
                store.state.homepage.hero.card3.title = response.data.data.attributes.hero.card3.title;
                store.state.homepage.hero.card.content = response.data.data.attributes.hero.card.content;
                store.state.homepage.hero.card2.content = response.data.data.attributes.hero.card2.content;
                store.state.homepage.hero.card3.content = response.data.data.attributes.hero.card3.content;
                store.state.homepage.hero.card.keywords = response.data.data.attributes.hero.card.keywords;
                store.state.homepage.hero.card2.keywords = response.data.data.attributes.hero.card2.keywords;
                store.state.homepage.hero.card3.keywords = response.data.data.attributes.hero.card3.keywords;

            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Fonction de mise à jour de la homepage-hero avec les données reçue de l'API
        getHomepageAbout() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/homepage?populate[0]=about&populate[1]=about.image&populate[2]=about.competency1&populate[3]=about.competency2&populate[4]=about.competency3&populate[5]=about.competency4&populate[6]=about&populate[7]=about.technologies&populate[8]=about.technologies.logos')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.homepage.about.title = response.data.data.attributes.about.title;
                store.state.homepage.about.content = response.data.data.attributes.about.content;
                store.state.homepage.about.image = `http://localhost:1337${response.data.data.attributes.about.image.data.attributes.url}`;
                store.state.homepage.about.aboutContent = response.data.data.attributes.about.aboutContent;
                store.state.homepage.about.technologies.title = response.data.data.attributes.about.technologies.title;
                store.state.homepage.about.technologies.logos = response.data.data.attributes.about.technologies.logos.data;
                store.state.homepage.about.competency1.title = response.data.data.attributes.about.competency1.title;
                store.state.homepage.about.competency1.content = response.data.data.attributes.about.competency1.content;
                store.state.homepage.about.competency2.title = response.data.data.attributes.about.competency2.title;
                store.state.homepage.about.competency2.content = response.data.data.attributes.about.competency2.content;
                store.state.homepage.about.competency3.title = response.data.data.attributes.about.competency3.title;
                store.state.homepage.about.competency3.content = response.data.data.attributes.about.competency3.content;
                store.state.homepage.about.competency4.title = response.data.data.attributes.about.competency4.title;
                store.state.homepage.about.competency4.content = response.data.data.attributes.about.competency4.content;
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getFormations() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/formations?populate=deep')
            // Ensuite je récupère les données des formations et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.formations = response.data.data;
                console.log(store.state.formations);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getSessions() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/sessions?populate=deep')
            // Ensuite je récupère les données des sessions et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.sessions = response.data.data;
                console.log(store.state.sessions);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getVilles() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/villes?sort=nom')
            // Ensuite je récupère les données des villes et j'attribue aux datas du store les valeurs des données récupérées, par ordre alphabétique. 
            .then((response) => {
                store.state.villes = response.data.data;
                console.log(store.state.villes);
                console.log(store.state.villes[0].attributes.nom);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        getCategories() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/category-formations?sort=nom')
            // Ensuite je récupère les données des catégories de formation et j'attribue aux datas du store les valeurs des données récupérées, par ordre alphabétique. 
            .then((response) => {
                store.state.categories = response.data.data;
                console.log(store.state.categories);
                console.log(store.state.categories[0].attributes.nom);
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