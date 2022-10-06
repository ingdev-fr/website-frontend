import { createStore } from 'vuex'
import axios from 'axios'

// On crée le store de l'application (le container des données de l'appli). Les données sont à l'intérieur du "state".   
const store = createStore({
    state: {
        homepage: {
        // Je crée une data "titre" dans le store
        titre: 'Hello man !',
        },
        counter: 0,
    },

    // les mutations permettent de modifier de manière synchrone les datas. Elles prennent toujours en 1er argument le state, puis occasionnellement d'autres arguments. 
    mutations: {
        // la mutation permet d'augmenter d'une certaine valeur le counter défini dans le store. Ici le 2ème argument représentera un nombre que nous utiliserons pour incrémenter le counter. 
        INCREASE(state, number){
            state.counter += number;
        },
        // la mutation permet de diminuer d'une certaine valeur le counter défini dans le store. Ici le 2ème argument représentera un nombre que nous utiliserons pour incrémenter le counter. 
        DECREASE(state, number) {
            state.counter -= number;
        }
        
    },
    // Les actions permettent de réaliser des actions asynchrones sur les datas comme la récupération d'une API. 
    actions: {
        // Action de mise à jour du titre de la page avec la donnée reçue de l'API
        changeTitle() {
            // Je fais un appel à l'API
            axios
            .get('http://localhost:1337/api/articles/2')
            // Ensuite je récupère les données et j'attribue à la data du store "titre" la valeur de la donnée récupérée. 
            .then((response) => {
                store.state.homepage.titre = response.data.data.attributes.titre;

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