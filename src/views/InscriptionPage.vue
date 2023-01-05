<template>
    <section class="inscri">
        <NavBar/>
        <div class="template">
            <!-- SECTION HEADER -->
            <PresentationInscriptions/>
            <div class="row g-3 mt-5">
                <div class="col-lg-6">
                    <div class="card recap">
                        <div class="card-header ">
                            <h2 class="fs-5 text-light formationTitle">Informations de la session :</h2>
                        </div>
                        <div class="card-body">
                            <p class="titre mb-0">Titre de la formation : TEST</p>
                            <p class="date mb-0">Date(s) de session : TEST</p>
                            <p class="ville mb-0">Lieu de session : TEST</p>
                            <p class="prix mb-0">Prix : TEST</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="onglets">
                        <button class="ongletPromotion buttonRecherche btn text-light" type="button" @click="modeIndividuelle()">Individuelle</button>
                        <button class="ongletPromotion buttonPromotion btn text-light" type="button" @click="modeEntreprise()">Entreprise</button>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <form class="inscriptionsInd" @submit.prevent="sendSubscription()" v-if="modeVisible === 'ind'">
                                <h3 class="indTitre fs-5 formationTitle mb-3 rounded p-2 text-light">Inscription individuelle</h3>
                                <div class="row mb-2">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" required>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" required>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" placeholder="Email" aria-label="email" required>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="tel" class="form-control" placeholder="Téléphone" aria-label="Téléphone" required>
                                    </div>
                                </div>
                                <input type="text" class="form-control mb-2" placeholder="Adresse" aria-label="adresse" required>
                                <input type="text" class="form-control mb-2" placeholder="Code postal" aria-label="Code postal" required>
                                <input type="text" class="form-control mb-2" placeholder="Localité" aria-label="Localité" required>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkCgv" required>
                                    <label class="form-check-label" for="checkCgv">
                                        En cochant cette case, je déclare avoir pris connaissance des conditions générales de vente et les accepter. 
                                    </label>
                                    </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-ind mt-4 text-light">S'inscrire</button>
                                </div>
                            </form>
                            <form class="inscriptionsEntreprise" @submit.prevent="sendSubscription()" v-if="modeVisible === 'entreprise'">
                                <h3 class="entreTitre fs-5 formationTitle mb-3 rounded p-2 text-light">Inscription des collaborateurs de l'entreprise</h3>
                                <div class="row mb-2">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" required>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" required>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" placeholder="Email" aria-label="email" required>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="tel" class="form-control" placeholder="Téléphone" aria-label="Téléphone" required>
                                    </div>
                                </div>
                                <input type="text" class="form-control mb-2" placeholder="Adresse" aria-label="adresse" required>
                                <input type="text" class="form-control mb-2" placeholder="Code postal" aria-label="Code postal" required>
                                <input type="text" class="form-control mb-2" placeholder="Localité" aria-label="Localité" required>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkCgv" required>
                                    <label class="form-check-label" for="checkCgv">
                                        En cochant cette case, je déclare avoir pris connaissance des conditions générales de vente et les accepter. 
                                    </label>
                                    </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-entre mt-4 text-light">S'inscrire</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
        
      </section>


</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PresentationInscriptions from '@/components/catalog/PresentationInscriptions.vue'

export default {
    name: 'InscriptionPage',

    components: {
        NavBar,
        PresentationInscriptions,
    },

    data () {
        return {
            modeVisible: 'ind',
        }
    },

    methods: {
    modeIndividuelle: function() {
      this.modeVisible = 'ind';
    },
    modeEntreprise: function() {
      this.modeVisible = 'entreprise';
    },
    },
}
</script>



<style lang="scss" scoped>
.inscri {
  background: radial-gradient(circle at top left, $third-color-clear 30%, $third-color);
}

.card-header {
    background: $third-color-dark;
}

.ongletPromotion {
  border-radius: 10px 10px 0 0;
  font-weight: 600;
}

.buttonRecherche {
  background: $secondary-color;
  &:hover {
    background: $fifth-color;
  }
}

.buttonPromotion {
  background: $third-color;
  &:hover {
    background: $fifth-color;
  }
}
.indTitre, .btn-ind {
    background: $secondary-color;
}
.entreTitre, .btn-entre{
    background: $third-color;
}


</style>