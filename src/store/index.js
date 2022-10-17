import { createStore } from 'vuex'
import axios from 'axios'

// On crée le store de l'application (le container des données de l'appli). Les données sont à l'intérieur du "state".   
const store = createStore({
    state: {
        homepage: {
            hero: {
                title: '',
                content: '',
                backgroundImage: '',
                card1: {
                    title: '',
                    content:'',
                    textButton: ''
                },
                card2: {
                    title: '',
                    content:'',
                    textButton: ''
                },
                card3: {
                    title: '',
                    content:'',
                    textButton: ''
                }        
            }
        
        },
    },

    // les mutations permettent de modifier de manière synchrone les datas. Elles prennent toujours en 1er argument le state, puis occasionnellement d'autres arguments. 
    mutations: {

        
    },
    // Les actions permettent de réaliser des actions asynchrones sur les datas comme la récupération d'une API. 
    actions: {
        // Fonction de mise à jour de la homepage-hero avec les données reçue de l'API
        getHomepageHero() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/homepage?populate[0]=hero&populate[1]=hero.backgroundImage&populate[2]=hero.card1&populate[3]=hero.card2&populate[4]=hero.card3')
            // Ensuite je récupère les données et j'attribue aux datas du store les valeurs des données récupérées. 
            .then((response) => {
                store.state.homepage.hero.backgroundImage = `http://localhost:1337${response.data.data.attributes.hero.backgroundImage.data.attributes.url}`;
                store.state.homepage.hero.title = response.data.data.attributes.hero.title;
                store.state.homepage.hero.content = response.data.data.attributes.hero.content;
                store.state.homepage.hero.card1.title = response.data.data.attributes.hero.card1.title;
                store.state.homepage.hero.card1.content = response.data.data.attributes.hero.card1.content;
                store.state.homepage.hero.card1.textButton = response.data.data.attributes.hero.card1.button;
                console.log(store.state.homepage.hero.card1.title);
                store.state.homepage.hero.card2.title = response.data.data.attributes.hero.card2.title;
                store.state.homepage.hero.card2.content = response.data.data.attributes.hero.card2.content;
                store.state.homepage.hero.card2.textButton = response.data.data.attributes.hero.card2.button;
                store.state.homepage.hero.card3.title = response.data.data.attributes.hero.card3.title;
                store.state.homepage.hero.card3.content = response.data.data.attributes.hero.card3.content;
                store.state.homepage.hero.card3.textButton = response.data.data.attributes.hero.card3.button;
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        // Action d'incrémentation du compteur avec la donnée reçue de l'API
        increaseCounter({ commit }) {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/articles/2')
            // Ensuite je récupère la donnée qui est un nombre (je me sers de l'id comme nombre), puis je commit une mutation en lui passant comme 1er argument le nom de la mutation puis en 2ème paramètre le nombre récupéré de l'API (qui sera aussi le 2ème paramètre de la mutation définie plus haut. 
            .then((response) => {
                commit('INCREASE', response.data.data.id);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        },
        decreaseCounter({ commit }) {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/articles/2')
            // Ensuite je récupère les données et j'attribue à la data du store "titre" la valeur de la donnée récupérée. 
            .then((response) => {
                commit('DECREASE', response.data.data.id);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        
        }
    },

    // Les getters permettent de modifier ou de filtrer les données avant qu'elles ne soient mises à disposition des composants
    getters: {
        // on va créer un getter qui va transformer le counter en retournant la valeur de son carré
        counterSquared(state) {
            return state.counter * state.counter;
        }

    },

    // Les modules permettent de diviser notre store en plusieurs modules, chaque module ayant ses propres mutations, actions, getters.  
    modules: {

    }

})

export default store;