<template>
  <section class="section">
    <div class="recherche p-2 rounded bg-light">
        <h2 class="recherche__title fs-4 text-center p-3 rounded">Trouver votre formation</h2>
        <!-- RECHERCHE -->
        <div class="recherche__card px-2 rounded">
            <!-- Zone de recherche -->
                <form class="recherche__form row px-2 px-md-4 py-2 py-md-4 pb-1 mb-3 rounded" name="recherche__form" role="search" v-on:submit.prevent>
                    <p class="fw-bold">Recherche par mots clés :</p>
                    <div class="search-bar d-md-flex mb-3">
                        <input class="form-control rounded me-1" type="search" placeholder="Recherche par mots clés dans le titre ou code !" aria-label="Search" v-model="this.$store.state.searchDatas.searchWords" >
                    </div>
                    <!-- Filtres Modalités -->
                    <div class="search-filters">
                        <p class="fw-bold">Recherche par filtres :</p>
                        <div class="check  mb-4">
                            <div class="d-md-flex flex-wrap justify-content-start">
                                <div class="form-check form-switch me-5 mb-md-3">
                                    <input class="form-check-input form-check-input-general" type="checkbox" id="form-check-cpf" v-model="this.$store.state.searchDatas.cpf">
                                    <label class="form-check-label" for="form-check-cpf">Eligible CPF
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox" id="form-check-qualif" v-model="this.$store.state.searchDatas.qualif">
                                    <label class="form-check-label" for="form-check-qualif">Formation qualifiante
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox"  id="form-check-distance" v-model="this.$store.state.searchDatas.distance">
                                    <label class="form-check-label" for="form-check-distance">100% distance
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox"  id="form-check-courte" v-model="this.$store.state.searchDatas.courte">
                                    <label class="form-check-label" for="form-check-courte">Courte (5 jours max)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="select d-flex flex-wrap my-4">
                            <div class="me-5 selectCategorie mb-3 mb-sm-0">
                                <select id="selectCatégories" name="categorie" class="form-select" aria-label="catégorie" v-model="this.$store.state.searchDatas.selectedCategory">
                                    <option value="Catégories" selected>Catégories</option>
                                    <option :value="item.attributes.nom" v-for="(item, idx) in $store.state.categories" v-bind:key="idx">{{item.attributes.nom}}</option>
                                </select>
                            </div>
                            <div class="me-5">
                                <select id="selectVilles" name="ville" class="form-select" aria-label="Ville" v-model="this.$store.state.searchDatas.selectedVilles">
                                    <option value="Villes" selected>Villes</option>
                                    <option :value="item.attributes.nom" v-for="(item, idx) in $store.state.villes" v-bind:key="idx">{{item.attributes.nom}}</option>
                                </select>
                            </div>
                        </div>         
                    </div>
                    <!-- Bouton de recherche -->
                    <div class="mt-2 d-flex justify-content-between flex-wrap">
                        <button class="button btn btn-recherche mb-3 me-2" @click.stop="setSearch(); highlight()">Lancer la recherche</button>
                        <button class="button btn btn-recherche btn-recherche__all mb-3 me-1" @click="seeAll()">Toutes les formations</button>
                        <button class="button btn btn-recherche btn-recherche__reinit mb-3 me-1" @click="reinitSearch()">Réinitialiser</button>

                        
                    </div>
                </form>
        </div>
        <!-- AFFICHAGE DES FORMATIONS -->
        <div class="affichage p-2 p-md-4 mt-3 rounded">
                    <div class="d-flex affichage__resultats">
                        <p class="fw-bold">Résultats :</p>
                    </div> 
                    <div class="messages">
                        <p class="rechercheMatch" v-if="this.$store.state.searchDatas.finalResult.length > 0">Il existe {{this.$store.state.searchDatas.finalResult.length}} formation(s) pour votre recherche</p> 
                        <p class="rechercheNoMatch" v-else>Aucun résultat pour votre recherche</p>
                    </div>    
                    <div class="card affichage__card mb-3" v-for="(item, idx) in this.$store.state.searchDatas.finalResult" v-bind:key="idx">
                        <!-- CARD HEADER -->
                        <div class="card-header header-training d-sm-flex justify-content-between align-items-center">
                            <div class="d-flex">
                                <div class="cat-color me-2" :style="{backgroundColor: item.attributes.categoryFormation.data.attributes.color}"></div>
                                <div class="">
                                    <h2 class="affichage__card__header formationTitle titreFormation fs-4 mb-0 fw-bold text-light">{{item.attributes.titre}}</h2>
                                    <div class="domaine text-light">Domaine : <span class="domaine-span" :style="{color: item.attributes.categoryFormation.data.attributes.color}">{{item.attributes.categoryFormation.data.attributes.nom}}</span></div>
                                    <p class="mb-0 text-light">Code: <span class="code fw-bold">{{item.attributes.code}}</span></p>
                                </div>
                            </div>
                            <!-- Bouton Programme de formation -->
                            <div class="text-end my-2 mt-md-0">
                                <router-link :to="{name: 'programme', params: {code : item.attributes.code}}">
                                    <button type="button" class="btn btn-program p-1">Programme</button>
                                </router-link>
                            </div>
                        </div>
                        <!-- CARD BODY MODALITES -->
                        <div class="card-body affichage__card__body">
                            <div class="">
                                <div><span class="fw-bold">Durée : </span>{{item.attributes.dureeEnJour}}<span v-if="item.attributes.dureeEnJour == 1"> jour</span><span v-else> jours</span></div>
                                <div>
                                    <span class="fw-bold">Modalité : </span>
                                    <ul>
                                        <li class="me-1" v-for="(mod, idx) in item.attributes.modalitePedagogiques.data" :key="idx">{{mod.attributes.nom}}</li>
                                    </ul>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <span class="fw-bold">Certification : </span>
                                    <div class="nav-link ms-1" v-for="(certif, idx) in item.attributes.certifications.data" :key="idx">{{certif.attributes.nom}}<span v-if="(idx + 1) !== item.attributes.certifications.data.length"> /</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- CARD BODY PRESENTATION COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-body card-headerCollapse card-headerCollapse-1 d-flex py-2">
                                <img src="@/assets/images/icons8-plus-1.svg" alt="flèche vers le bas" class="arrow-down me-2">
                                <div class="card__collapse text-light" data-bs-toggle="collapse" :href="'#collapsePresentationFind'+item.id" role="button" aria-expanded="false" :aria-controls="'collapsePresentationFind'+item.id">Présentation</div> 
                            </div>
                            <div :id="'collapsePresentationFind'+item.id" class="collapse">
                                <p class="card-text card-body presentation">{{item.attributes.presentationRapide}}</p>
                            </div>
                            
                        </div>
                        <!-- CARD BODY SESSIONS COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-body card-headerCollapse card-headerCollapse-2 d-flex justify-content-between py-2">
                                <div class="d-flex ">
                                    <img src="@/assets/images/icons8-plus-1.svg" alt="flèche vers le bas" class="arrow-down me-2">
                                    <div class="card__collapse text-light"  data-bs-toggle="collapse" :href="'#collapseSessionFind'+item.id" role="button" aria-expanded="false" :aria-controls="'collapseSessionFind'+item.id">Sessions</div>
                                </div>
                            </div>
                            <div :id="'collapseSessionFind'+item.id" class="collapse mb-3">
                                <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.</div>
                                <div class="session card-text d-flex flex-wrap ps-3 pe-2 pt-2 align-items-center" v-for="(session, idx) in item.attributes.sessions.data" :key="idx">
                                    <div class="card-session px-2 mb-1 rounded col-9 col-lg-10" ><span class="session-span">Du {{this.$store.state.dateFormated(session.attributes.date_debut)}} au {{this.$store.state.dateFormated(session.attributes.date_fin)}}</span>  - {{session.attributes.ville.data.attributes.nom}} - {{item.attributes.prix}} € HT - {{session.attributes.nombre_places}} places disponibles</div>
                                    <router-link :to="{name: 'inscription', params: {code : session.id}}" class="col-3 col-lg-2 text-end">
                                        <button class="btn btn-inscription btn-primary mb-2">S'inscrire</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'FindCatalog',

    data () {
        return {
            dateDebut: '',
            dateFin: '',
        }
    },

    computed : {

    },
    
    methods: {
        showInscription: function(param) {
            this.$router.push({name: 'inscription', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        }, 

        reinitSearch: function () {
            // Je réinitialise les filtres
                // le filtre de recherche par mots clés
            this.$store.state.searchDatas.searchWords = '';
                // les filtres cpf
            document.getElementById('form-check-cpf').checked = false;
            document.getElementById('form-check-qualif').checked = false;
            document.getElementById('form-check-distance').checked = false;
            document.getElementById('form-check-courte').checked = false;
            this.$store.state.searchDatas.cpf = '';
            this.$store.state.searchDatas.qualif = '';
            this.$store.state.searchDatas.courte = '';
            this.$store.state.searchDatas.distance = '';
            this.$store.state.searchDatas.selectedCategory = 'Catégories';
            this.$store.state.searchDatas.selectedVilles = 'Villes';
            this.$store.state.searchDatas.finalResult = [];
        },  
        // Pour voir toutes les formations
        seeAll() {
            this.reinitSearch;
            this.$store.state.searchDatas.finalResult = this.$store.state.formations;
        },
        // Méthode pour la recherche et les filtres
        setSearch: function() {
            let searchWordsOptim = this.$store.state.searchDatas.searchWords.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); // je normalize la requête string 
            let searchWordsOptimArray = searchWordsOptim.split(' ');
            let regexSearch = new RegExp(searchWordsOptimArray.join('|'), 'g');
            if(searchWordsOptim != ''){
                this.$store.state.searchDatas.resultWords = this.$store.state.formations // j'actualise le tableau des résultats créé dans le store
                    .filter(function(element) { 
                        element.attributes.matchesNumber = 0;
                        let formationTitre = element.attributes.titre.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
                        let formationTitreArray = formationTitre.split(' ');
                        let formationCode = element.attributes.code.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
                        let formationCodeArray = formationCode.split(' ');
                        for(let i = 0; i<searchWordsOptimArray.length; i++){
                            let matches = [];
                            if(formationTitreArray.includes(searchWordsOptimArray[i])){
                                matches = formationTitre.match(regexSearch);
                                element.attributes.matchesNumber = matches.length;
                                console.log(matches);
                                return true
                            }
                            else if(formationCodeArray.includes(searchWordsOptimArray[i])){
                                element.attributes.matchesNumber ++;
                                return true
                            }
                        } 
                    })
                    .sort(function(a, b){
                    return b.attributes.matchesNumber - a.attributes.matchesNumber;
                })
                console.log(this.$store.state.searchDatas.resultWords);
                this.$store.state.searchDatas.finalResult = this.$store.state.searchDatas.resultWords; // J'ai besoin d'une data (finalResult) qui va recevoir la valeur finale (this.resultWords) de la requête par les mots et que je vais pouvoir afficher. Si la requête se poursuit avec des filtres, ma data finalResult pourra recevoir le résultat total de ma recherche (mots +  filtres).
                console.log(this.$store.state.searchDatas.finalResult);
            }
            else {
                this.$store.state.searchDatas.resultWords = this.$store.state.formations;
            }
            // Ensuite, si un filtre est sélectionné, je poursuis la recherche (car si pas de filtres ma function "totalRequest" de la fin est incomplète ) : 
            if(document.getElementById('form-check-cpf').checked === true || document.getElementById('form-check-qualif').checked === true || document.getElementById('form-check-distance').checked === true || document.getElementById('form-check-courte').checked === true || this.$store.state.searchDatas.selectedCategory != 'Catégories' || this.$store.state.searchDatas.selectedVilles != 'Villes') {
                let restOfRequest = []; // je créé un tableau qui va contenir les parties intérieures de l'instruction de la suite de la requête

                let startOfRequest = 'this.$store.state.searchDatas.finalResult = this.$store.state.searchDatas.resultWords.filter(function(item) { if(' // début de ma requête
                let endOfRequest = ') {return true} });' // fin de ma requête
                
                if(document.getElementById('form-check-cpf').checked === true) {
                    restOfRequest.push('item.attributes.CPF === true');
                    console.log(restOfRequest);
                }
                
                if(document.getElementById('form-check-qualif').checked === true) {
                    restOfRequest.push('item.attributes.qualifiante === true');
                    console.log(restOfRequest);
                }

                if(document.getElementById('form-check-distance').checked === true) {
                    restOfRequest.push('item.attributes.distance === true');
                    console.log(restOfRequest);
                }

                if(document.getElementById('form-check-courte').checked === true) {
                    restOfRequest.push('item.attributes.courte === true');
                    console.log(restOfRequest);
                }

                if(this.$store.state.searchDatas.selectedCategory != 'Catégories') {
                    restOfRequest.push('item.attributes.categoryFormation.data.attributes.nom === selectedCategory');
                    console.log(restOfRequest);
                }

                if(this.$store.state.searchDatas.selectedVilles != 'Villes') {
                    restOfRequest.push('item.attributes.sessions.data.some(i => i.attributes.ville.data.attributes.nom === selectedVilles)');
                    console.log(restOfRequest);
                }

                let restOfRequestString = restOfRequest.join(' && ');
                console.log(restOfRequestString);

                let totalRequest = startOfRequest.concat(restOfRequestString).concat(endOfRequest); // je recompose ma requête complète avec le début, auquel j'ajoute mes parties de requête + la fin. 
                console.log(totalRequest); 

                // Avant de lancer ma fonction finale de recherche et pour bénéficier d'un scope large des variables qui sont dans cette fonction, je les déclare ici ! Car à l'intérieur de ma fonction, je n'arrive pas à récupérer le 'this'. 
                let selectedCategory = this.$store.state.searchDatas.selectedCategory;  
                console.log(selectedCategory);
                let selectedVilles = this.$store.state.searchDatas.selectedVilles;
                console.log(selectedVilles);

                // Je lance ma fonction complémentaire de recherche (si au moins un filtre a été activé)
                eval(totalRequest); //Je transforme ma requête string en code javascript qui du coup lance ma fonction composée ! 

            } 
        },
        // Je vais highlighter les contenus des formations matchant avec les mots de ma recherche
        async highlight() {
            if(this.$store.state.searchDatas.searchWords.trim() != ''){
                const result = await this.setSearch();
                console.log(result);
                let textToSearch = this.$store.state.searchDatas.searchWords.trim().split(' ');
                console.log(textToSearch);
                let pattern = new RegExp(`${textToSearch.join('|')}`, "gi");
                let matchContents = [];
                let titres = document.querySelectorAll("h2.titreFormation");
                let contents = document.querySelectorAll("p.presentation");
                let codes = document.querySelectorAll("span.code");
                matchContents.push(...titres);
                matchContents.push(...contents);
                matchContents.push(...codes);
                console.log(matchContents);
                for(let i=0; i<matchContents.length; i++){
                    matchContents[i].innerHTML = matchContents[i].innerText.replace(pattern, match => `<span class="bg-warning rounded p-md-1">${match}</span>`);
                }

            }
            
        }
    },

    mounted () {
        this.setSearch();
        this.highlight();
    }
}
</script>


<style lang="scss" scoped>

//---------- POUR LA RECHERCHE 
.recherche {
    border: 1px solid $third-color;
    &__card {
        background: $third-color-clear;
    }
}

.affichage {
    background: $third-color-clear;
}



.form-check {
    &-input {
        &-general {
            border: 1px solid $third-color;
            background-image: url("../../assets/images/round-switch-item-general.svg") !important;
        }
    }
 }

.btn{
    &-recherche {
        background: $third-color;
        color: white;
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
        &:hover {
            background: $text-color;
            color: white;
        }
        &__reinit {
            background: $secondary-color;
        }
        &__all {
            background: $fifth-color;
        }
    }
    &-program {
        background: $third-color;
        color: white;
        width: 130px;
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
        &:hover {
            background: $text-color;
            color: white;
        }
    }
    &-inscription {
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
        &:hover {
            background: $text-color;
            color: white;
        }
    }
}



//------- POUR L'AFFICHAGE --------------------
.affichage {
    background: $third-color-clear;
    &__card {
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
    } 
    &__resultats {
        &__img {
            height: 2rem;
        }
    }  
}
.header-training {
    background: $secondary-color;
}

.session {
    border: 1px solid $third-color-clear;
    &:hover {
        background: $third-color-clear;
    }
}
.cat-color {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50px;
    margin-top: 3px; 
}

 .domaine-span {
    font-weight: 600; 
 }

 .ico {
    height: 1rem;
    margin-top: 3px;
 }

 .arrow-down {
    height: 1.3rem;
 }

 .sessionList-logo {
    height: 1rem;
    margin-top: 3px;
 }

 .session-span {
    font-weight: 600;
 }

 .card {
    &-headerCollapse{
            font-weight: 600;
            &-1{
                background: $dark-color ;
            }
            &-2{
                background: $third-color;
                border-radius: 0 0 5px 5px;
            }
        }
 }

// ------------------- MEDIA QUERIES -------------------

    // ------- Max = 767px 
@media(max-width: 767px) {
    .recherche {
        border-radius: 0 10px 10px 10px !important;
    }
}

@media(min-width: 992px) {
}

</style>