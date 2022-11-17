<template>
  <section class="presentation template">
    <!---------- PRESENTATIONS  -->
    <div class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-md-10 mx-auto">
                <h1 class="mb-5">Nos formations</h1>
                <p class="lead fs-5">Retrouvez dans notre exemple de catalogue les informations essentielles permettant à vos clients de sélectionner la formation adaptée à leurs besoins : Recherche par catégorie ou par contenu, modalités de formation, programme de formation avec possibilité de téléchargement, tarifs et disponibilités des places.
                </p>
            </div>
        </div>
    </div>
    <!----------- FORMATIONS -->
    <div class="container">       
        <div class="formations d-flex">
            <!-- Promotions -->
            <div class="promotion p-4 rounded">
                <h2 class="fs-4 text-center mb-4">A ne pas manquer</h2>
                <div class="promotion__list">
                    <div class="card promotion__card">
                        <img class="card-img-top promotion__card__img" src="../../assets/images/restaurant-1.jpeg"  alt="">
                        <div class="card-header promotion__card__header">
                            <div class="">
                                <h3 class="fs-4 mb-0">Réaliser une formation dans Moodle</h3>
                                <div class="mb-3">Domaine : <span class="text-primary">Pédagogie digitale</span></div>
                            </div>
                            <div class="">
                                <div><span class="fw-bold">Durée :</span> 3 jours</div>
                                <div><span class="fw-bold">Modalité : </span>Blended learning</div>
                                <div><span class="fw-bold">Certifications : </span>Certificat de réussite</div>
                                <div><span class="fw-bold">Prochaine session 2022 : </span>25/11, 26/11, 30/11</div>
                            </div>
                        </div>
                        <div class="card-body promotion__card__body">
                            <div class="d-flex">
                                <img class="promotion__card__body__img" src="../../assets/images/icons8-process.svg" alt="">
                                <h4 class="fs-5 ms-2">Objectifs</h4>
                            </div>
                            <p class="card-text">Apprenez à concevoir, animer et évaluer un cours dans Moodle. Inscrivez vos étudiants et communiquez avec eux !</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Barre de recherche -->
            <div class="recherche p-4 rounded">
                <h2 class="fs-4 text-center mb-4">Trouver votre formation</h2>
                <form class="row" role="search" v-on:submit.prevent>
                    <div class="d-md-flex mb-3">
                        <input class="form-control rounded me-1" type="search" placeholder="Recherche par titre, contenu ou code !" aria-label="Search" v-model="searchWords" @keyup.enter="setSearch()">
                        <select class="form-select rounded ms-1" aria-label="Domaines de formation">
                            <option selected>Recherche par domaines de formation</option>
                            <option value="1">Pédagogie</option>
                            <option value="2">Pédagogie digitale</option>
                            <option value="3">Ingénierie de formation</option>
                            <option value="3">Développement Web</option>
                        </select>
                    </div>
                    <div class="d-md-flex justify-content-between mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Eligible CPF
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Durée
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Formation qualitfiante
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                A distance
                            </label>
                        </div>
                    </div>
                    <div class="text-center mb-4">
                        <button class="button btn btn-primary">Lancer la recherche</button>
                    </div>
                    
                </form>
                <!-- Affichage des formations -->
                <div class="affichage">
                    <div class="card affichage__card">
                        <!-- CARD HEADER -->
                        <div class="card-header">
                            <h3 class="affichage__card__header fs-4 mb-0">Réaliser une formation dans Moodle</h3>
                            <div class="">Domaine : <span class="text-primary">Pédagogie digitale</span></div>
                        </div>
                        <!-- CARD BODY 1 MODALITES -->
                        <div class="card-body affichage__card__body">
                            <div class="">
                                <div><span class="fw-bold">Durée :</span> 3 jours</div>
                                <div><span class="fw-bold">Modalité : </span>Blended learning</div>
                                <div><span class="fw-bold">Certifications : </span>Certificat de réussite</div>
                                <div><span class="fw-bold">Prochaine session 2022 : </span>25/11, 26/11, 30/11</div>
                            </div>
                        </div>
                        <!-- CARD BODY 2 OBJECTIFS -->
                        <div class="affichage__card__body-2 accordion accordion-flush ms-3" id="accordionObjectifs">
                            <div class="accordion-item">
                                <h4 class="accordion-header fs-5" id="headingOne">
                                    <button class="accordion-button collapsed px-0 py-2 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Objectifs
                                    </button>
                                </h4>
                            </div>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionObjectifs">
                                <p class="card-text accordion-body">Apprenez à concevoir, animer et évaluer un cours dans Moodle. Inscrivez vos étudiants et communiquez avec eux !</p>
                            </div>
                            
                        </div>
                        <!-- CARD FOOTER -->
                        <div class="card-footer d-flex justify-content-between">
                            <div><a href="#" class="btn btn-primary">Programme</a></div>
                            <div><a href="#" class="btn btn-success">S'inscrire</a></div>
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
    name: 'HeaderCatalog', 

}
</script>

<style lang="scss" scoped>

.promotion, .recherche {
    border: 1px solid $third-color;
    background: $third-color;
}

.promotion {
    &__card {
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
        &__img {
            height: 100px;
            object-fit: cover;
        }
        &__body {
            background: $third-color-clear;
            &__img {
                height: 30px;
            }
        }
    }
}

.affichage {
    &__card {
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
    }   
}

.accordion {
    &-header {
        & .accordion-button {
            border-bottom: 1px solid $third-color;
            outline: none;

            &:not(.collapsed) {
                color: $third-color;
                background-color: $secondary-color-clear;
                box-shadow: none;
            }
        }
    }
}

.btn{
    &-program {
        width: 120px;

     
    }
    &-inscription {
        width: 120px; 
    }
}


// ------------------- MEDIA QUERIES -------------------

    // ------- Min = 768px 
@media(min-width: 768px) {
    .promotion {
        width: 33%;
        margin-right: 5px;
    }

    .recherche {
        width: 67%;
    }

}

</style>