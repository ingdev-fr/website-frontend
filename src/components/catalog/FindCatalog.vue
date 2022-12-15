<template>
  <section>
    <div class="recherche p-2 rounded bg-light">
        <h2 class="recherche__title fs-4 text-center p-3 rounded">Trouver votre formation</h2>
        <!-- RECHERCHE -->
        <div class="recherche__card px-3 pb-3 rounded">
            <!-- Zone de recherche -->
            <form class="recherche__form row p-4 mb-3 rounded" role="search" v-on:submit.prevent>
                <p class="fw-bold">Recherche :</p>
                <div class="search-bar d-md-flex mb-3">
                    <input class="form-control rounded me-1" type="search" placeholder="Recherche par titre, contenu ou code !" aria-label="Search" v-model="searchWords" >
                </div>
                <!-- Filtres Modalités -->
                <div class="search-filters">
                    <p class="fw-bold">Filtres :</p>
                    <div class="check">
                        <div class="d-md-flex flex-wrap justify-content-start">
                            <div class="form-check form-switch me-5">
                                <input class="form-check-input form-check-input-general" type="checkbox" value="" id="form-check-cpf" @click="setCheckBox(checkCpf)">
                                <label class="form-check-label" for="form-check-cpf">Eligible CPF
                                </label>
                            </div>
                            <div class="form-check form-switch me-5">
                                <input class="form-check-input form-check-input-general" type="checkbox" value="" id="form-check-qualif">
                                <label class="form-check-label" for="form-check-qualif">Formation qualifiante
                                </label>
                            </div>
                            <div class="form-check form-switch me-5">
                                <input class="form-check-input form-check-input-general" type="checkbox" value="" id="form-check-modal">
                                <label class="form-check-label" for="form-check-modal">A distance
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="select d-flex flex-wrap my-3">
                        <div class="me-5 selectDuree">
                            <select name="duree" class="form-select" aria-label="Durée">
                                <option selected>Durée</option>
                                <option value="- de 5 jours">- de 5 jours</option>
                                <option value="Entre 5 et 15 jours">Entre 5 et 15 jours</option>
                                <option value="+ de 15 jours">+ de 15 jours</option>
                            </select>
                        </div>
                        <div class="me-5">
                            <select name="ville" class="form-select" aria-label="Ville" >
                                <option selected>Villes</option>
                                <option :value="item.attributes.nom" v-for="(item, idx) in $store.state.villes" v-bind:key="idx">{{item.attributes.nom}}</option>
                            </select>
                        </div>
                    </div>         
                </div>
                <!-- Filtres Catégories -->
                <div class="search-filters">
                            <p class="fw-bold">Catégories :</p>
                            <div class="d-md-flex flex-wrap mb-3" >
                                <div class="form-check form-switch me-5" v-for="(item, idx) in $store.state.categories" v-bind:key="idx">
                                    <input class="form-check-input" :class="'form-check-input-'+item.id" type="checkbox" value="" :id="'form-check-input-'+item.id">
                                    <label class="form-check-label" :class="'form-check-label-'+item.id" :for="'form-check-input-'+item.id">
                                        {{item.attributes.nom}}
                                    </label>
                                </div>
                                
                            </div>
                </div>
                <!-- Bouton de recherche -->
                <div class="my-2">
                    <button class="button btn btn-recherche" @click="setSearch()">Lancer la recherche</button>
                </div>
            </form>
        </div>
        <!-- AFFICHAGE DES FORMATIONS -->
        <div class="affichage p-4 mt-3 rounded">
                    <div class="d-flex affichage__resultats">
                        <p class="fw-bold">Résultats :</p>
                    </div>      
                    <div class="card affichage__card mb-3" v-for="(item, idx) in $store.state.formations" v-bind:key="idx">
                        <!-- CARD HEADER -->
                        <div class="card-header header-training d-flex justify-content-between">
                            <div class="d-flex">
                                <div class="cat-color me-2" :style="{backgroundColor: item.attributes.categoryFormation.data.attributes.color}"></div>
                                <div class="">
                                    <h2 class="affichage__card__header formationTitle fs-4 mb-0 fw-bold text-light">{{item.attributes.titre}}</h2>
                                    <div class="domaine text-light">Domaine : <span class="domaine-span" :style="{color: item.attributes.categoryFormation.data.attributes.color}">{{item.attributes.categoryFormation.data.attributes.nom}}</span></div>
                                </div>
                            </div>
                            <!-- Bouton Programme de formation -->
                            <button type="button" class="btn btn-program mt-1" @click="showProgram(item.attributes.code)">Programme</button>
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
                                <div class="d-flex">
                                    <span class="fw-bold">Certification : </span>
                                    <div class="nav-link ms-1" v-for="(certif, idx) in item.attributes.certifications.data" :key="idx">{{certif.attributes.nom}}<span v-if="(idx + 1) !== item.attributes.certifications.data.length"> /</span></div>
                                </div>
                            </div>
                        </div>
                        <!-- CARD BODY PRESENTATION COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-header d-flex">
                                <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                                <div class="" data-bs-toggle="collapse" :href="'#collapsePresentationFind'+item.id" role="button" aria-expanded="false" :aria-controls="'collapsePresentationFind'+item.id">Présentation</div>
                            </div>
                            <div :id="'collapsePresentationFind'+item.id" class="collapse">
                                <p class="card-text card-body">{{item.attributes.presentationRapide}}</p>
                            </div>
                            
                        </div>
                        <!-- CARD BODY SESSIONS COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-header d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                                    <div class=""  data-bs-toggle="collapse" :href="'#collapseSessionFind'+item.id" role="button" aria-expanded="false" :aria-controls="'collapseSessionFind'+item.id">Sessions</div>
                                </div>
                            </div>
                            <div :id="'collapseSessionFind'+item.id" class="collapse mb-3">
                                <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.</div>
                                <div class="session card-text d-flex flex-wrap ps-3 pe-2 pt-2 align-items-center" v-for="(session, idx) in item.attributes.sessions.data" :key="idx">
                                    <div class="card-session px-2 mb-1 rounded col-8 col-sd-9 col-lg-10" ><span class="session-span">Du {{session.attributes.date_debut}} au {{session.attributes.date_fin}}</span>  - {{session.attributes.ville.data.attributes.nom}} - {{item.attributes.prix}} € HT - {{session.attributes.nombre_places}} places disponibles</div>
                                    <button class="inscription-button col-4 col-sd-3 col-lg-2 btn btn-primary mb-2"  @click="showInscription(item.attributes.code)">S'inscrire</button>
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
            searchWords: '',
            resultWords: [],
            resultCpf: [],
            totalResult : [],
            queryTitreContent: null,
            checkCpf: false,
        }
    },

    computed : {

    },
    
    methods: {
        showProgram: function(param) {
            this.$router.push({name: 'programme', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },
        showInscription: function(param) {
            this.$router.push({name: 'inscription', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },
        setCheckBox: function()
        {
            this.checkCpf = !this.checkCpf;
            console.log(this.checkCpf);
        },       
        setSearch: function() {
            let searchWordsOptim = this.searchWords.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(' '); // je transforme la requête string en tableau de mots
            console.log(searchWordsOptim);

            let result = this.$store.state.formations // je crée un tableau des résultats
                .filter(function(item) { // je recherche dans le tableau des formations, pour chaque formation (item) si 
                    let titre = item.attributes.titre.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); // Je transforme le titre de la formation , avec 'trim' j'enleve les espaces avant et après, avec toLowerCase je mets tout en minuscule, avec normalize je décomposeles lettres et diacritics, avec replace je supprime toutes les diacritics (signe accompagnant une lettre ou un graphème pour en modifier le sens ou la prononciation).
                    console.log(titre);
                    let content = item.attributes.presentationRapide.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); //Je transforme le contenu de la présentation de la formation 
                    let code = item.attributes.code.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); // Je transforme le code de la formation
                    let resp = []; // je crée un tableau qui va recevoir les réponses positives (true) du matching
                    for(let i in searchWordsOptim) { // Pour chaque mot dans la tableau des mots de recherche
                        if(titre.match(searchWordsOptim[i]) || content.match(searchWordsOptim[i]) || code.match(searchWordsOptim[i])) { // si le mot est contenu dans le titre de ma formation
                            resp.push('true'); // si oui, je pousse une valeur ('true') dans mon tableau de réponses du matching
                        }
                    } 
                    if(resp.length > 0) { // si mon tableau resp contient au moins une valeur, c'est que le titre de la formation contient au moins un mot de recherche
                        return true; // donc je sélectionne la formation ('return true' car la méthode filter sélectionne tous les items qui ont une réponse 'true') pour qu'elle apparaisse dans le tableau de résultats de mon filter. 
                    }
                    // Je vais pouvoir afficher mes résultats de recherche par length décroissante de mon tableau 'resp' : peut-être en attribuant une valeur = à la length comme propriété d'une formation. 
                        
                })
            console.log(result);

            
        }
    },

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
        &-1 {
            background-image: url("../../assets/images/round-switch-item-peda.svg") !important;
        }
        &-2 {
            background-image: url("../../assets/images/round-switch-item-peda-digi.svg") !important;
        }
        &-3 {
            background-image: url("../../assets/images/round-switch-item-ing.svg") !important;
        }
        &-4 {
            background-image: url("../../assets/images/round-switch-item-projet.svg") !important;
        }
        &-5 {
            background-image: url("../../assets/images/round-switch-item-informatique.svg") !important;
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
}

 .button-inscription:hover

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

 .sessionList-logo {
    height: 1rem;
    margin-top: 3px;
 }

 .session-span {
    font-weight: 600;
 }

// ------------------- MEDIA QUERIES -------------------

    // ------- Max = 767px 
@media(max-width: 767px) {
    .recherche {
        border-radius: 0 10px 10px 10px !important;
    }
}

</style>