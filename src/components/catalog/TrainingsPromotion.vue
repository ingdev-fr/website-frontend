<template>
  <section class="promotion p-2 rounded bg-white" id="promotion">
    <!-- Promotions -->
    <h2 class="promotion__title fs-4 text-center p-3 rounded">Exclusivités</h2>
    <div class="promotion__list" >
        <!--  Carte 1 de formation -->
        <div class="card promotion__card mb-3" v-for="(form,idx) in this.$store.state.onTop" :key="idx">
            <img class="card-img-top card__img" :src="(this.$store.state.urlUploads+form.attributes.formationPhoto.media.data.attributes.url)"  :alt="form.attributes.formationPhoto.alt">
            <div class="card-header header-training promotion__card__header">
                <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">{{form.attributes.titre}}<span class="cat-color ms-2" :style="`background: ${form.attributes.categoryFormation.data.attributes.color};`"></span></h2>
                <p class="mb-2 text-light">Domaine : <span :style="`color: ${form.attributes.categoryFormation.data.attributes.color};`">Pédagogie digitale</span>
                </p>
            </div>
            <div class="card-body">
                <div class="">
                    <div><span class="fw-bold">Durée :</span> {{form.attributes.dureeEnJour}}<span v-if="form.attributes.dureeEnJour == 1"> jour</span><span v-else> jours</span></div>
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
                <div class="card-header d-flex">
                    <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                    <div class="" data-bs-toggle="collapse" :href="'#collapsePresentationPromotion'+form.id" role="button" aria-expanded="false" :aria-controls="'#collapsePresentationPromotion'+form.id">Présentation</div>
                </div>
                <div :id="'collapsePresentationPromotion'+form.id" class="collapse ">
                    <p class="card-text card-body mb-0">{{form.attributes.presentationRapide}}</p>
                    <!-- Bouton Programme de formation -->
                    <button type="button" class="btn btn-program mt-1 ms-3 mb-3"  @click="showProgram(form.attributes.code)">Programme</button>
                </div>                           
            </div>
            <!-- CARD BODY SESSIONS COLLAPSE-->
            <div class="affichage__card__body-2">
                <div class="card-header d-flex justify-content-between">
                    <div class="d-flex">
                        <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                        <div class=""  data-bs-toggle="collapse" :href="`#collapseSessionsPromotion`+form.id" role="button" aria-expanded="false" :aria-controls="`collapseSessionsPromotion`+form.id">Sessions</div>
                    </div>
                </div>
                <div :id="`collapseSessionsPromotion`+form.id" class="collapse">
                    <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.
                    </div>
                    <div class="session card-text px-2 py-2" v-for="(session, idx) in form.attributes.sessions.data" :key="idx">
                        <div class="card-session px-2 mb-1"><span class="fw-bolder">Du {{session.attributes.date_debut}} au {{session.attributes.date_fin}}</span> {{session.attributes.ville.data.attributes.nom}} - {{form.attributes.prix}} € HT - {{session.attributes.nombre_places}} Places disponibles
                        </div>
                        <button class="inscription-button btn btn-primary mb-2" @click="showInscription(form.attributes.code)">S'inscrire</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>


export default {
    name: 'TrainingsPromotion',

    data() {
        return {
        }

    },

    methods: {
        showProgram: function(param) {
            this.$router.push({name: 'programme', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },
        showInscription: function(param) {
            this.$router.push({name: 'inscription', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
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

@media(max-width: 767px) {
}


</style>