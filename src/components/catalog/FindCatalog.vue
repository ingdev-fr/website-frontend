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
                    <input class="form-control rounded me-1" type="search" placeholder="Recherche par titre, contenu ou code !" aria-label="Search" v-model="searchWords" @keyup.enter="setSearch()">
                </div>
                <!-- Filtres Modalités -->
                <div class="search-filters">
                    <p class="fw-bold">Filtres :</p>
                    <div class="check">
                        <div class="d-md-flex flex-wrap justify-content-start">
                            <div class="form-check form-switch me-5">
                                <input class="form-check-input form-check-input-general" type="checkbox" value="" id="form-check-cpf">
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
                            <select name="ville" class="form-select" aria-label="Durée">
                                <option selected>Durée</option>
                                <option value="dog">- de 5 jours</option>
                                <option value="cat">Entre 5 et 15 jours</option>
                                <option value="hamster">+ de 15 jours</option>
                            </select>
                        </div>
                        <div class="me-5">
                            <select name="ville" class="form-select" aria-label="Ville">
                                <option selected>Ville</option>
                                <option value="dog">Metz</option>
                                <option value="cat">Nancy</option>
                                <option value="hamster">Luxembourg</option>
                                <option value="parrot">Paris</option>
                            </select>
                        </div>
                    </div>         
                </div>
                <!-- Filtres Catégories -->
                <div class="search-filters">
                            <p class="fw-bold">Catégories :</p>
                            <div class="d-md-flex flex-wrap mb-3">
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-peda" type="checkbox" value="" id="form-check-peda">
                                    <label class="form-check-label pedagogie" for="form-check-peda">
                                        Pédagogie
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5 mb-3">
                                    <input class="form-check-input form-check-input-peda-digi" type="checkbox" value="" id="form-check-peda-digi">
                                    <label class="form-check-label pedagogie-digitale" for="form-check-peda-digi">
                                        Pédagogie digitale
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5 mb-3">
                                    <input class="form-check-input form-check-input-ing" type="checkbox" value="" id="form-check-peda-ing">
                                    <label class="form-check-label pedagogie-digitale" for="form-check-peda-ing">
                                        Ingénierie de formation
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-projet" type="checkbox" value="" id="form-check-peda-projet">
                                    <label class="form-check-label pedagogie-digitale" for="form-check-peda-projet">
                                        Gestion de projet
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-informatique" type="checkbox" value="" id="form-check-peda-informatique">
                                    <label class="form-check-label pedagogie-digitale" for="form-check-peda-informatique">
                                        Informatique
                                    </label>
                                </div>
                            </div>
                </div>
                <!-- Bouton de recherche -->
                <div class="my-2">
                    <button class="button btn btn-recherche">Lancer la recherche</button>
                </div>
            </form>
        </div>
        <!-- AFFICHAGE DES FORMATIONS -->
        <div class="affichage p-4 rounded">
                    <div class="d-flex affichage__resultats">
                        <p class="fw-bold">Résultats :</p>
                    </div>
                    
                    <div class="card affichage__card">
                        <!-- CARD HEADER -->
                        <div class="card-header header-training d-flex justify-content-between">
                            <div class="d-flex">
                                <div class="cat-color me-2" style="background: orange;"></div>
                                <div class="">
                                    <h3 class="affichage__card__header fs-5 mb-0 fw-bold text-light">Réaliser une formation dans Moodle</h3>
                                    <div class="domaine text-light">Domaine : <span class="domaine-span" style="color: orange;">Pédagogie digitale</span></div>
                                </div>
                            </div>
                            <div>
                                <a href="#" class="btn btn-program mt-1">Programme</a>
                            </div>
                        </div>
                        <!-- CARD BODY MODALITES -->
                        <div class="card-body affichage__card__body">
                            <div class="">
                                <div><span class="fw-bold">Durée :</span> 3 jours</div>
                                <div><span class="fw-bold">Modalité : </span>Blended learning</div>
                                <div><span class="fw-bold">Certification : </span>Certificat de réussite</div>
                            </div>
                        </div>
                        <!-- CARD BODY PRESENTATION COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-header d-flex">
                                <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                                <div class="" data-bs-toggle="collapse" href="#collapsePresentationFind" role="button" aria-expanded="false" aria-controls="collapsePresentationFind">Présentation</div>
                            </div>
                            <div id="collapsePresentationFind" class="collapse">
                                <p class="card-text card-body">Apprenez à concevoir, animer et évaluer un cours dans Moodle. Inscrivez vos étudiants et communiquez avec eux !</p>
                            </div>
                            
                        </div>
                        <!-- CARD BODY SESSIONS COLLAPSE-->
                        <div class="affichage__card__body-2">
                            <div class="card-header d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                                    <div class=""  data-bs-toggle="collapse" href="#collapseSessionsFind" role="button" aria-expanded="false" aria-controls="collapseSessionsFind">Sessions</div>
                                </div>
                            </div>
                            <div id="collapseSessionsFind" class="collapse">
                                <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.</div>
                                <div class="session card-text ms-3 d-flex pe-4">
                                    <img class="sessionList-logo me-2" src="../../assets/images/logo-v.svg" alt="item de liste">
                                    <div class="card-session px-2 d-flex mb-1 rounded"> Du 14/12/2022 au 16/12/2022 - Paris - 1895.00 € HT - Places disponibles<a class="nav-link text-primary d-flex ms-4" href="">S'inscrire</a></div>
                                </div>
                                <div class="session card-text ms-3 d-flex pe-4">
                                    <img class="sessionList-logo me-2" src="../../assets/images/logo-v.svg" alt="item de liste">
                                    <div class="card-session px-2 d-flex mb-1 rounded"> Du 21/12/2022 au 24/12/2022 - Metz - 1895.00 € HT - Places disponibles<a class="nav-link text-primary ms-4" href="">S'inscrire</a></div>
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

}
</script>

<style lang="scss" scoped>

//---------- POUR LA RECHERCHE 
.recherche {
    border: 1px solid $third-color;
    &__form {
        background: $third-color-clear;
    }
}

.form-check {
    &-input {
        &-general {
            border: 1px solid $third-color;
            background-image: url("../../assets/images/round-switch-item-general.svg") !important;
        }
        &-peda {
            background-image: url("../../assets/images/round-switch-item-peda.svg") !important;
        }
        &-peda-digi {
            background-image: url("../../assets/images/round-switch-item-peda-digi.svg") !important;
        }
        &-ing {
            background-image: url("../../assets/images/round-switch-item-ing.svg") !important;
        }
        &-projet {
            background-image: url("../../assets/images/round-switch-item-projet.svg") !important;
        }
        &-informatique {
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

.card-session {
    &:hover {
        background: $clear-color;
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

// ------------------- MEDIA QUERIES -------------------

    // ------- Max = 767px 
@media(max-width: 767px) {
    .recherche {
        border-radius: 0 10px 10px 10px !important;
    }
}

</style>