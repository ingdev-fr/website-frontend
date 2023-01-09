<template>
    <section class="inscri">
        <NavBar/>
        <div class="template">
            <!-- SECTION HEADER -->
            <PresentationInscriptions/>
                <!-- INFORMATIONS SESSION  -->
                <div class="col-lg-8 mx-auto my-4">
                    <div class="card recap">
                        <div class="card-header ">
                            <h2 class="fs-5 text-light formationTitle">Informations de la session :</h2>
                        </div>
                        <div class="card-body">
                            <p class="mb-0"><span class="info">Titre de la formation : </span>{{titreFormation}}</p>
                            <p class="mb-0"><span class="info">Code de la formation : </span>{{codeFormation}}</p>
                            <p class="mb-0"><span class="info">Durée de la formation : </span>{{dureeFormation}} heures</p>
                            <p class="mb-0"><span class="info">Date(s) de session : </span>du {{dateDebutSession}} au {{dateFinSession}}</p>
                            <p class="mb-0"><span class="info">Lieu de la formation : </span>{{lieuSession}}</p>
                            <p class="mb-0"><span class="info">Prix : </span>{{prixSession}} euros HT</p>
                            <p class="mb-0"><span class="info">Nombre de places restantes : </span><span class="text-success">5</span> /10</p>
                        </div>
                    </div>
                </div>
                <!-- INSCRIPTIONS-->
                <div class="col-lg-8 mx-auto pb-4" >
                    <!-- ONGLETS -->
                    <div class="onglets">
                        <button class="ongletPromotion buttonRecherche btn text-light" type="button" @click="modeIndividuelle()">Individuelle</button>
                        <button class="ongletPromotion buttonPromotion btn text-light" type="button" @click="modeEntreprise()">Entreprise</button>
                    </div>
                    <!--FORMULAIRE-->
                    <div class="card">
                        <div class="card-body">
                            <!-- FORMULAIRE INDIVIDUEL-->
                            <form class="inscriptionsInd" @submit.prevent="sendSubscription()" v-if="modeVisible === 'ind'">
                                <h3 class="indTitre fs-5 formationTitle mb-3 rounded p-2 text-light">Inscription individuelle</h3>
                                <div class="row mb-2">
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="text" class="form-control " placeholder="Prénom" aria-label="Prénom" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="email" class="form-control" placeholder="Email" aria-label="email" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="tel" class="form-control" placeholder="Téléphone" aria-label="Téléphone" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                </div>
                                <div class="input-required">
                                    <input type="text" class="form-control mb-2" placeholder="Adresse" aria-label="adresse" required>
                                    <span class="text-danger asterix asterix-long">*</span>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="text" class="form-control " placeholder="Code postal" aria-label="Code postal" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                    <div class="col-md-6 mb-2 input-required">
                                        <input type="text" class="form-control" placeholder="Localité" aria-label="Localité" required>
                                        <span class="text-danger asterix">*</span>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkCgv">
                                    <label class="form-check-label" for="checkCgv">
                                        Je souhaite utiliser mon CPF pour financer une partie ou toute la formation. 
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkCgv" required>
                                    <label class="form-check-label" for="checkCgv">
                                        En cochant cette case, je déclare avoir pris connaissance des conditions générales de vente et les accepter.<span class="text-danger">*</span>
                                    </label>
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="btn btn-ind mt-4 text-light" data-bs-toggle="modal" data-bs-target="#subscriptionModal">S'inscrire</button>
                                </div>
                                <div class="modal" tabindex="-1" id="subscriptionModal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">C'est un showroom !</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Vous n'avez pas oublié hein ? vous êtes dans une démo ! N'hésitez pas à nous contacter pour parler plus en détails de vos besoins !</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <!-- FORMULAIRE ENTREPRISE-->
                            <form class="inscriptionsEntreprise" @submit.prevent="sendLogin()" v-if="modeVisible === 'entreprise'">
                                <h3 class="entreTitre fs-5 formationTitle mb-3 rounded p-2 text-light">Inscription des collaborateurs de l'entreprise</h3>
                                <div class="mb-2 text-center">
                                    <p><span class="text-danger">! </span>Vous devez vous connecter avant de continuer</p>
                                    <div class="mb-2 text-center">
                                        <div class="col-sm-8 col-lg-6 mx-auto input-required">
                                            <input type="text" class="form-control mb-3" placeholder="Nom d'utilisateur" aria-label="Nom d'utilisateur" required>
                                            <span class="text-danger asterix">*</span>
                                        </div>
                                        <div class="col-sm-8 col-lg-6 mx-auto input-required">
                                            <input type="email" class="form-control mb-3" placeholder="Email" aria-label="email" required>
                                            <span class="text-danger asterix">*</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-entre mt-4 text-light" data-bs-toggle="modal" data-bs-target="#loginModal">Se connecter</button>
                                </div>
                                <div class="modal" tabindex="-1" id="loginModal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">C'est un showroom !</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Vous n'avez pas oublié hein ? vous êtes dans une démo ! N'hésitez pas à nous contacter pour parler plus en détails de vos besoins !</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
            dateDebut: '',
            dateFin: '', 
            subscriptionMode: false,       
        }
    },

    computed : {
        // je récupère la formation pour laquelle je vais afficher les informations en récupérant le paramètre d'url qui est son code. 
       maSession () {
        const id = this.$route.params.code;
        console.log(id);
        console.log(this.$store.state.sessions);
        return this.$store.state.sessions.find(session => session.id == id);
       },
       // J'attribue les différentes valeurs aux données que je vais afficher dans le html
       titreFormation () {
        return this.maSession.attributes.formation.data.attributes.titre;
       },
       codeFormation () {
        return this.maSession.attributes.formation.data.attributes.code;
       },
       dureeFormation () {
        return this.maSession.attributes.formation.data.attributes.dureeEnHeures;
       },
       dateDebutSession () {
        this.dateDebut = this.maSession.attributes.date_debut.split("-");
        return `${this.dateDebut[2]}-${this.dateDebut[1]}-${this.dateDebut[0]}`;
       },
       dateFinSession () {
        this.dateFin = this.maSession.attributes.date_fin.split("-");
        return `${this.dateFin[2]}-${this.dateFin[1]}-${this.dateFin[0]}`;
       },
       joursSession () {
        return this.maSession.attributes.jours_formation;
       },
       lieuSession () {
        return this.maSession.attributes.ville.data.attributes.nom;
       },
       prixSession () {
        return this.maSession.attributes.formation.data.attributes.prix;
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

    created: function () {
        this.$store.dispatch('getSessions'); // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 
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
.indTitre {
    background: $secondary-color;
  }

.btn-ind {
    background: $secondary-color;
    &:hover {
    background: $fifth-color;
  }
}
.entreTitre{
    background: $third-color;
  }


.btn-entre{
    background: $third-color;
    &:hover {
    background: $fifth-color;
  }
}

.input-required {
    position: relative;
}

.asterix {
    position: absolute;
    top: 5px;
    right: 20px;
    &-long {
        right: 10px;
    }
}

.info {
    font-weight: 600;
}


</style>