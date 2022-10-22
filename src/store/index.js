import { createStore } from 'vuex'
import axios from 'axios'

// On crée le store de l'application (le container des données de l'appli). Les données sont à l'intérieur du "state".   
const store = createStore({
    state: {
        urlUploads: "http://localhost:1337",
        urlEndpoints: "http://localhost:1337/api",
        header: {
            logo: '',
        },
        homepage: {
            hero: {
                title: '',
                content: '',
                backgroundImage: '',
                cards: [],
                },
            about: {
                title: '',
                image: '',
                aboutContent: [],
                technologies: {
                    title: '',
                    logos: []
                }
            }        
        }
    },

    // les mutations permettent de modifier de manière synchrone les datas. Elles prennent toujours en 1er argument le state, puis occasionnellement d'autres arguments. 
    mutations: {

        
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
            .get('http://localhost:1337/api/homepage?populate[0]=hero&populate[1]=hero.backgroundImage&populate[2]=hero.card')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.homepage.hero.backgroundImage = `http://localhost:1337${response.data.data.attributes.hero.backgroundImage.data.attributes.url}`;
                store.state.homepage.hero.title = response.data.data.attributes.hero.title;
                store.state.homepage.hero.content = response.data.data.attributes.hero.content;
                store.state.homepage.hero.cards = response.data.data.attributes.hero.card;
                console.log(response.data.data.attributes.hero.card);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Fonction de mise à jour de la homepage-hero avec les données reçue de l'API
        getHomepageAbout() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/homepage?populate[0]=about&populate[1]=about.image&populate[2]=about.aboutContent&populate[3]=about&populate[4]=about.technologies&populate[5]=about.technologies.logos')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.homepage.about.title = response.data.data.attributes.about.title;
                store.state.homepage.about.image = `http://localhost:1337${response.data.data.attributes.about.image.data.attributes.url}`;
                store.state.homepage.about.aboutContent = response.data.data.attributes.about.aboutContent;
                store.state.homepage.about.technologies.title = response.data.data.attributes.about.technologies.title;
                store.state.homepage.about.technologies.logos = response.data.data.attributes.about.technologies.logos.data;
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