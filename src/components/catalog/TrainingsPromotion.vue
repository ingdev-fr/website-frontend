<template>
  <section class="promotion p-2 rounded bg-white" id="promotion">
    <!-- Promotions -->
    <h2 class="promotion__title fs-4 text-center p-3 rounded">Exclusivités</h2>
    <div class="promotion__list" >
        <!--  Carte 1 de formation -->
        <div v-for="(form,idx) in this.$store.state.onTop" :key="idx">
            <div class="card promotion__card mb-3"  v-if="prom === idx">
                <img class="card-img-top card__img" :src="(this.$store.state.urlUploads+form.attributes.formationPhoto.media.data.attributes.url)"  :alt="form.attributes.formationPhoto.alt">
                <div class="card-header header-training promotion__card__header">
                    <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">{{form.attributes.titre}}<span class="cat-color ms-2" :style="`background: ${form.attributes.categoryFormation.data.attributes.color};`"></span></h2>
                    <p class="mb-2 text-light">Domaine : <span class="fw-bolder" :style="`color: ${form.attributes.categoryFormation.data.attributes.color};`">{{form.attributes.categoryFormation.data.attributes.nom}}</span>
                    </p>
                </div>
                <div class="card-body">
                    <div class="">
                        <div><span class="fw-bold">Durée :</span> {{form.attributes.dureeEnJour}}<span v-if="form.attributes.dureeEnJour == 1"> jour</span><span v-else> jours</span></div>
                        <div><span class="fw-bold">Prix :</span> {{form.attributes.prix}} euros HT</div>
                        <div>
                            <span class="fw-bold">Modalité : </span>
                            <div class="d-inline" v-for="(mod,idx) in form.attributes.modalitePedagogiques.data" :key="idx">{{mod.attributes.nom}}<span class="ms-1" v-if="(idx+1 != form.attributes.modalitePedagogiques.data.length)">/</span></div>
                        </div>
                        <div>
                            <span class="fw-bold">Certifications : </span>
                            <div class="d-inline" v-for="(certif,idx) in form.attributes.certifications.data" :key="idx">{{certif.attributes.nom}}<span class="ms-1" v-if="(idx+1 != form.attributes.certifications.data.length)">/</span></div>
                        </div>
                    </div>
                </div>
                <!-- CARD BODY PRESENTATION COLLAPSE-->
                <div class="affichage__card__body-2">
                    <div class="card-body card-headerCollapse card-headerCollapse-1 d-flex py-2">
                        <img src="@/assets/images/icons8-plus-1.svg" alt="flèche vers le bas" class="arrow-down me-2">
                        <div class="card__collapse text-light" data-bs-toggle="collapse" :href="'#collapsePresentationPromotion'+form.id" role="button" aria-expanded="false" :aria-controls="'#collapsePresentationPromotion'+form.id">Présentation</div>
                    </div>
                    <div :id="'collapsePresentationPromotion'+form.id" class="collapse ">
                        <p class="card-text card-body mb-0">{{form.attributes.presentationRapide}}</p>
                        <!-- Bouton Programme de formation -->
                        <button type="button" class="btn btn-program mt-1 ms-3 mb-3"  @click="showProgram(form.attributes.code)">Programme</button>
                    </div>                           
                </div>
                <!-- CARD BODY SESSIONS COLLAPSE-->
                <div class="affichage__card__body-2">
                    <div class="card-body text-light card-headerCollapse card-headerCollapse-2 d-flex justify-content-between py-2">
                        <div class="d-flex  ">
                            <img src="@/assets/images/icons8-plus-1.svg" alt="flèche vers le bas" class="arrow-down me-2">
                            <div class="card__collapse"  data-bs-toggle="collapse" :href="`#collapseSessionsPromotion`+form.id" role="button" aria-expanded="false" :aria-controls="`collapseSessionsPromotion`+form.id">Sessions</div>
                        </div>
                    </div>
                    <div :id="`collapseSessionsPromotion`+form.id" class="collapse">
                        <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.
                        </div>
                        <div class="session card-text px-2 py-2" v-for="(session, idx) in form.attributes.sessions.data" :key="idx">
                            <div class="card-session px-2 mb-1"><span class="fw-bolder">Du {{this.$store.state.dateFormated(session.attributes.date_debut)}} au {{this.$store.state.dateFormated(session.attributes.date_fin)}}</span> {{session.attributes.ville.data.attributes.nom}} - {{form.attributes.prix}} € HT - {{session.attributes.nombre_places}} Places disponibles
                            </div>
                            <button class="inscription-button btn btn-primary mb-2" @click="showInscription(session.id)">S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="d-flex justify-content-center button__list">
            <button class="button__promo button__promo-1 me-2 mb-2" @click="show(0)">1</button>
            <button class="button__promo button__promo-2 me-2 mb-2" @click="show(1)">2</button>
            <button class="button__promo button__promo-3 me-2 mb-2" @click="show(2)">3</button>
        </div>
    </div>
  </section>
</template>

<script>


export default {
    name: 'TrainingsPromotion',

    data() {
        return {
            prom: 0,
        }

    },

    methods: {
        showProgram: function(param) {
            this.$router.push({name: 'programme', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },
        showInscription: function(param) {
            this.$router.push({name: 'inscription', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },
        show (arg) {
            this.prom = arg;
        }
    },

}
</script>

<style lang="scss" scoped>

.promotion {
    border: 1px solid $third-color;
}

.card {
    box-shadow: 5px 4px 3px rgba($text-color, 0.25);
    &__img {
            height: 200px;
            object-fit: cover;
    }
    &__body {
        background: $third-color-clear;
        &__img {
            height: 30px;
        }
    }
    &-headerCollapse{
        font-weight: 600;
        &-1{
            background: $dark-color;
        }
        &-2{
            background: $third-color;
            border-radius: 0 0 5px 5px;
        }
    }
}

.header-training {
    background: $secondary-color;
}

.btn{
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

.button {
        &__promo {
            height: 30px;
            width: 30px;
            border-radius: 50px;
            color: $clear-color;
            border: $clear-color;
            &-1 {
                background: $pink-color;
            }
            &-2 {
                background: $third-color;
            }
            &-3 {
                background: $secondary-color-flashy;
            }
        }
    }

.cat-color {
    margin-top: 3px;
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50px;
}

.ico {
    height: 1rem;
    margin-top: 3px;
 }

 .session {
    border: 1px solid $third-color-clear;
    &:hover {
        background: $third-color-clear;
    }
}

 .sessionList-logo {
    height: 1rem;
    margin-top: 3px;
 }



 // ------------------- MEDIA QUERIES -------------------

@media(min-width: 992px) {

}


</style>