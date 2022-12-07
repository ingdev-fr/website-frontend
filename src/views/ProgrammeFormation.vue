<template>
    <section class="program" >
        <NavBar class="navBar"/>
        <div class="template print__heading mb-4">
            <img class="print__logo" src="../assets/images/logo.svg" alt="logo">
            <p>Programme de formation</p>
        </div>
        <!-- ENTETE DE LA FORMATION-->
        <div class="headerTraining mt-3 py-4">
            <div class="template d-md-flex text-light">
                <div class="col-lg-8 ps-md-2 mb-3 mb-md-0">
                    <!-- Titre et descriptif -->
                    <div class="cat p-2 mb-3 text-dark rounded">{{categoryFormation}}</div>
                    <h1 class="formationTitle fs-1">{{titreFormation}}</h1>
                    <h2 class="pitch formationTitle fs-5">{{presentation_rapide}}</h2>
                    <!-- Modalités -->
                    <div class="modalites">
                        <div class="d-md-flex flex-wrap my-3">
                            <div class="duree d-flex align-items-center me-3 me-md-5">
                                <img class="headerTraining__icon" src="../assets/images/icons8-objet-avec-durée.svg" alt="icone de durée">
                                <div class="ms-2">{{duree_en_heures}} heures</div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5">
                                <img class="headerTraining__icon" src="../assets/images/icons8-salle-de-classe.svg" alt="icone de modalité pédagogique">
                                <div class="ms-2" v-for="(modalite, idx) in modalite_pedagogiques" :key="idx">{{modalite.attributes.nom}}<span v-if="(idx + 1) !== modalite_pedagogiques.length"> /</span></div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5">
                                <img class="headerTraining__icon" src="../assets/images/icons8-certification.svg" alt="icone de certification">
                                <div class="ms-2" v-for="(certif,idx) in certifications" :key="idx" >{{certif.attributes.nom}} <span v-if="(idx + 1) !== certifications.length"> /</span></div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5" v-if="cpfFormation == true">
                                <img class="headerTraining__icon" src="../assets/images/icons8-cpf.svg" alt="icone de certification">
                                <div class="ms-2">CPF</div>
                            </div>
                        </div>
                        <!-- Code et prix -->
                        <div class="codePrix d-flex align-items-center pt-3">
                            <div>Code : <span class="code ms-2 p-2 rounded">{{codeFormation}}</span></div>
                            <div class="tarif ms-3">Tarifs : <span class="price ms-2 p-2 rounded">{{prixFormation}}€ HT</span></div>
                        </div>
                    </div>
                    
                </div>
                <!-- Boutons Sessions et inscriptions-->
                <div class="inscription col-lg-4 d-flex align-items-end justify-content-lg-end mb-2">
                    <button class="btn button btn-primary me-3 px-4 fs-5">Sessions</button>
                    <button class="btn button button-2 btn-primary px-4 fs-5">Inscription</button>
                </div>
            </div>
        </div>
        <!-- CONTENU DE LA FORMATION -->
        <div class="contentTraining">
            <!-- Menu navigation programme -->
            <div class="template">
                <ul class="nav navTraining">
                    <li id="public" class="nav-item" :class="this.modeActive == 'public' ? 'active' : '' " @click.prevent="modePublic()">
                        <a class="nav-link py-lg-3 px-4" aria-current="page" href="#">Public</a>
                    </li>
                    <li class="nav-item" :class="this.modeActive == 'comp' ? 'active' : '' " @click.prevent="modeComp()">
                        <a class="nav-link py-lg-3 px-4" href="#">Compétences</a>
                    </li>
                    <li class="nav-item" :class="this.modeActive == 'prog' ? 'active' : '' " @click.prevent="modeProg()">
                        <a class="nav-link py-lg-3 px-4" href="#">Programme</a>
                    </li>
                    <li class="nav-item" :class="this.modeActive == 'certif' ? 'active' : '' " @click.prevent="modeCertif()">
                        <a class="nav-link py-lg-3 px-4" href="#">Certification</a>
                    </li>
                </ul>
            </div>
            <!-- Contenu de la formation pour le PC (screen) -->
            <div class="backgroundContent onScreen py-3 py-lg-5">
                <h2 class="print__title fs-3 p-2">Public</h2>
                <div class="template">
                    <!-- Public -->
                    <div class="public" v-if="modeActive == 'public'">
                        <div class="row">
                            <div class="profils col-lg-8">
                                <h3 class="fs-4">Les métiers et profils visés :</h3>
                                <p>{{publicDescriptif.descriptif}}</p>
                                <h3 class="fs-4">Pré-requis :</h3>
                                <ul>
                                    <li v-for="(prereq,idx) in publicDescriptif.prerequis" :key="idx">{{prereq.nom}}</li>
                                </ul>
                            </div>
                            <div class="listProfils col-lg-4">
                                <div class="d-flex justify-content-lg-center align-items-lg-center">
                                    <div class="">
                                        <div class="metier px-lg-3 py-1 fs-5" v-for="(metier,idx) in publicDescriptif.metiers" :key="idx"><img class="iconMetier me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">{{metier.nom}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Compétences -->
                <h2 class="print__title fs-3 p-2">Compétences</h2>
                <div class="template">
                    <div class="comp" v-if="modeActive == 'comp'">
                        <div class="row">
                            <div class="profils col-lg-8">
                                <h3 class="fs-4">Les compétences visées :</h3>
                                <div class="mb-3">{{competences.visees}}</div>
                                <h3 class="fs-4">Compétences :</h3>
                                <ul>
                                    <li v-for="(comp, idx) in competences.liste" :key="idx">{{comp.nom}}</li>
                                </ul>
                            </div>
                            <!-- Image -->
                            <div class="col-lg-4 portfolioPicture"></div>
                        </div>
                    </div>
                </div>
                <!-- Programme -->
                <h2 class="print__title fs-3 p-2">Programme</h2>
                <div class="template">
                    <div class="programme" v-if="modeActive == 'prog'">
                        <!--  Module 1 de formation -->
                        <div class="card promotion__card mb-3">
                            <div class="card-header promotion__card__header">
                                <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">Module 1: Découvrir les bases de la plateforme Moodle<span class="cat-color ms-2" style="background: orange;"></span></h2>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div><span class="fw-bold">Objectif(s) :</span> Découvrir les bases de la plateforme Moodle</div>
                                    <div><span class="fw-bold">Durée : </span>4 heures</div>
                                    <div><span class="fw-bold">Modalités pédagogiques : </span>A distance</div>
                                </div>
                            </div>
                            <!-- Collapse Contenus-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex">
                                    <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                    <div class="" data-bs-toggle="collapse" href="#collapseContenus" role="button" aria-expanded="false" aria-controls="collapseContenus">Contenus théoriques et méthodologiques</div>
                                </div>
                                <div id="collapseContenus" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Les différentes pages de Moodle (accueil, tableau de bord, cours, profil, administration)</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Les fonctionnalités de base de Moodle</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Ergonomie et expérience utilisateur</div>
                                    </div>
                                </div>                           
                            </div>
                            <!-- Collapse Activités d'apprentissage-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" href="#collapseApprentissage" role="button" aria-expanded="false" aria-controls="collapseApprentissage">Activités d'apprentissage</div>
                                    </div>
                                </div>
                                <div id="collapseApprentissage" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Tutoriel de démonstration</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Exercices pratiques de navigation</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Collapse Activités d'évaluation-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" href="#collapseEvaluation" role="button" aria-expanded="false" aria-controls="collapseEvaluation">Activités d'évaluation</div>
                                    </div>
                                </div>
                                <div id="collapseEvaluation" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Quiz formatif pour mémoriser les connaissances</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Certification -->
                <h2 class="print__title fs-3 p-2">Certification</h2>
                <div class="template">
                    <div class="certif" v-if="modeActive == 'certif'">
                        <div class="row">
                            <div class="profils col-md-8">
                                <h3 class="fs-4">Type de certification :</h3>
                                <p>En cas de réussite aux épreuves certificatives, le candidat se verra remettre un certificat de réussite. Dans le cas contraire, le candidat se verra remettre un certificat de participation.</p>
                                <h3 class="fs-4">Epreuves certificatives :</h3>
                                <ul>
                                    <li>Evaluation des connaissances : Quiz général en fin de formation</li>
                                    <li>Evaluation des compétences : Lors d'un exercice final, le candidat devra implémenter un cours déjà réalisé dans Moodle et paramétrer les inscriptions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Lieu -->
                <h2 class="print__title fs-3 p-2">Lieu de formation</h2>
                <div class="template">
                    <div class="lieu" v-if="modeActive == 'lieu'">
                        <div class="row">
                            <div class="profils col-md-8">
                                <h3 class="fs-4">Lieu de formation :</h3>
                                <p>La formation se déroule entièrement en ligne sur la plateforme pédagogique de la société Ingdev.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Contenu de la formation pour le PRINT (sans les V-if)-->
            <div class="backgroundContent print py-3 py-lg-5">
                <h2 class="print__title fs-3 p-2">Public</h2>
                <div class="template onscreen">
                    <!-- Public -->
                    <div class="public">
                        <div class="row">
                            <div class="profils col-lg-8">
                                <h3 class="fs-4">Les métiers et profils visés :</h3>
                                <p>Pour toutes personnes en situation d'exercer les métiers de formateur, responsable, concepteur ou ingénieur pédagogiques, souhaitant apprendre les bases de la plateforme Moodle, de la création, de l'animation, de l'évaluation et de la gestion d'un cours sur la plateforme pédagogique.</p>
                                <h3 class="fs-4">Pré-requis :</h3>
                                <ul>
                                    <li>Etre en situation d'exercice,</li>
                                    <li>Avoir des bases en pédagogie et création ou animation de cours,</li>
                                    <li>Disposer d'un accès internet,</li>
                                    <li>Avoir un niveau de base en compétences numériques (niveau 3 PIX minimum).</li>
                                </ul>
                            </div>
                            <div class="listProfils col-lg-4">
                                <div class="d-flex justify-content-lg-center align-items-lg-center">
                                    <div class="">
                                        <div class="metier px-lg-3 py-1 fs-5"><img class="iconMetier me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche"> Formateur</div>
                                        <div class="metier px-lg-3 py-1 fs-5"><img class="iconMetier me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Responsable pédagogique</div>
                                        <div class="metier px-lg-3 py-1 fs-5"><img class="iconMetier me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Concepteur pédagogique</div>
                                        <div class="metier px-lg-3 py-1 fs-5"><img class="iconMetier me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Ingénieur pédagogique</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Compétences -->
                <h2 class="print__title fs-3 p-2">Compétences</h2>
                <div class="template">
                    <div class="comp">
                        <div class="row">
                            <div class="profils col-lg-8">
                                <h3 class="fs-4">Les compétences visées :</h3>
                                <p>Dans ce cours vous découvrirez les fonctionnalités de base et l'ergonomie de la plateforme Moodle.<br>Vous apprendrez comment créer un cours dans Moodle, le structurer par sessions, lui ajouter différentes activités d'apprentisssage et des espaces d'échanges et de feedbacks. Vous apprendrez également à structurer l'évaluation du cours en ajoutant des activités d'évaluation et en paramétrant des modalités d'évaluation (type, échelle, seuil de réussite, critères). Vous découvrirez comment organiser le suivi des évaluations des participants à travers l'utilisation du carnet de notes. Enfin, vous apprendrez comment inscrire un participant à un cours et comment gérer les inscriptions. </p>
                                <h3 class="fs-4">Compétences :</h3>
                                <ul>
                                    <li>Découvrir les bases de la plateforme Moodle</li>
                                    <li>Concevoir un cours dans Moodle</li>
                                    <li>Animer un cours dans Moodle</li>
                                    <li>Evaluer un cours dans Moodle</li>
                                    <li>Effectuer le suivi des évaluations dans Moodle</li>
                                    <li>Gérer un cours et les inscriptions dans Moodle</li>
                                </ul>
                            </div>
                            <!-- Image -->
                            <div class="col-lg-4 portfolioPicture"></div>
                        </div>
                    </div>
                </div>
                <!-- Programme -->
                <h2 class="print__title fs-3 p-2">Programme</h2>
                <div class="template">
                    <div class="programme">
                        <!--  Module 1 de formation -->
                        <div class="card promotion__card mb-3">
                            <div class="card-header promotion__card__header">
                                <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">Module 1: Découvrir les bases de la plateforme Moodle<span class="cat-color ms-2" style="background: orange;"></span></h2>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div><span class="fw-bold">Objectif(s) :</span> Découvrir les bases de la plateforme Moodle</div>
                                    <div><span class="fw-bold">Durée : </span>4 heures</div>
                                    <div><span class="fw-bold">Modalités pédagogiques : </span>A distance</div>
                                </div>
                            </div>
                            <!-- Collapse Contenus-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex">
                                    <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                    <div class="" data-bs-toggle="collapse" href="#collapseContenus" role="button" aria-expanded="false" aria-controls="collapseContenus">Contenus théoriques et méthodologiques</div>
                                </div>
                                <div id="collapseContenus" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Les différentes pages de Moodle (accueil, tableau de bord, cours, profil, administration)</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Les fonctionnalités de base de Moodle</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Ergonomie et expérience utilisateur</div>
                                    </div>
                                </div>                           
                            </div>
                            <!-- Collapse Activités d'apprentissage-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" href="#collapseApprentissage" role="button" aria-expanded="false" aria-controls="collapseApprentissage">Activités d'apprentissage</div>
                                    </div>
                                </div>
                                <div id="collapseApprentissage" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Tutoriel de démonstration</div>
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Exercices pratiques de navigation</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Collapse Activités d'évaluation-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" href="#collapseEvaluation" role="button" aria-expanded="false" aria-controls="collapseEvaluation">Activités d'évaluation</div>
                                    </div>
                                </div>
                                <div id="collapseEvaluation" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">Quiz formatif pour mémoriser les connaissances</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Certification -->
                <h2 class="print__title fs-3 p-2">Certification</h2>
                <div class="template">
                    <div class="certif">
                        <div class="row">
                            <div class="profils col-md-8">
                                <h3 class="fs-4">Type de certification :</h3>
                                <p>En cas de réussite aux épreuves certificatives, le candidat se verra remettre un certificat de réussite. Dans le cas contraire, le candidat se verra remettre un certificat de participation.</p>
                                <h3 class="fs-4">Epreuves certificatives :</h3>
                                <ul>
                                    <li>Evaluation des connaissances : Quiz général en fin de formation</li>
                                    <li>Evaluation des compétences : Lors d'un exercice final, le candidat devra implémenter un cours déjà réalisé dans Moodle et paramétrer les inscriptions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import NavBar from '../components/NavBar.vue'

export default {
    name: 'ProgrammeFormation',

    components: {
        NavBar,
    },

    data() {
        return {
            modeActive: 'public',
            code: 'test',
            maFormation: {},
            categoryFormation: '',
            titreFormation: '',
            presentation_rapide: '',
            duree_en_jour: '',
            duree_en_heures: '',
            modalite_pedagogiques: [],
            certifications: [],
            cpfFormation: '',
            codeFormation: '',
            prixFormation: '',
            top_formation: '',
            pdf: '',
            publicDescriptif: '',
            competences: '',
            programme: '',
            



        }
    },

    computed : {
       
    },

    methods : {
    // Je créé la méthode qui permet de réécrire la valeur de la donnée "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
        modePublic : function () {
            this.modeActive = 'public';
            },
        modeComp : function () {
            this.modeActive = 'comp';
            },
        modeProg : function () {
            this.modeActive = 'prog';
            },
        modeCertif : function () {
            this.modeActive = 'certif';
            },
        modeLieu : function () {
            this.modeActive = 'lieu';
            },
        searchMyFormation : function () {
            const code = this.$route.params.code;
            console.log(code);
            this.maFormation = this.$store.state.formations.find(training => training.attributes.code == code);
            this.categoryFormation = this.maFormation.attributes.category_formation.data.attributes.nom;
            this.titreFormation = this.maFormation.attributes.titre;
            this.codeFormation = this.maFormation.attributes.code;
            this.presentation_rapide = this.maFormation.attributes.presentation_rapide;
            this.duree_en_heures = this.maFormation.attributes.duree_en_heures;
            this.modalite_pedagogiques = this.maFormation.attributes.modalite_pedagogiques.data;
            this.prixFormation = this.maFormation.attributes.prix;
            this.certifications = this.maFormation.attributes.certifications.data;
            this.cpfFormation = this.maFormation.attributes.CPF;
            this.publicDescriptif= this.maFormation.attributes.public;
            this.competences = this.maFormation.attributes.competences;
        }

    },

    created: function () {
        this.$store.dispatch('getFormations'); // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 
    },

    mounted: function () {
        this.searchMyFormation();

    }
}

</script>


<style lang="scss" scoped>

.print {
    display: none;
    &__heading {
        display: none;
    }
    &__title {
        display: none;
    }
}

.program {
    background: radial-gradient(circle at top left, $third-color-clear 30%, $third-color);
}

.headerTraining {
    background: $text-color;
    & .cat {
        display: inline-block;
        background-color: $orange-color;
    }
    & .code {
        background-color: $third-color-dark;
    }
    & .price {
        background-color: $secondary-color-dark;
    }
    & .button {
        width: 160px;
        &-2 {
            background-color: $third-color-dark;
            &:hover {
                background-color: $third-color;
            }
        }
    }
    &__icon {
        height: 2rem;
    }
}

.contentTraining {
    background-color: $fourth-color;
    & .nav-item {
        &:hover {
            background-color: $secondary-color;
        }
    }
    & .nav-link {
        font-size: 1.2rem;
        color: $text-color;
        &:hover {
            color: $clear-color;
        }
    }
    & .backgroundContent {
        background: $third-color-clear;
    }
    & .iconMetier {
        height: 1.3rem;
    }
    & .iconeContenu {
        height: 1rem;
    }
    & .portfolioPicture {
        background: url('../assets/images/dazzle-line-portfolio.svg') no-repeat;
        background-position: center center;
        background-size: contain;
    }
}

// Stylage de la carte des sessions
.card {
    box-shadow: 5px 4px 3px rgba($text-color, 0.25);
    &__body {
        background: $third-color-clear;
        &__img {
            height: 30px;
        }
    }
    &-session {
        &:hover {
            background: $clear-color;
        }
    }
}

.promotion__card__header {
    background: $secondary-color;
}

.ico {
    height: 1rem;
    margin-top: 3px;
 }

 .sessionList-logo {
    height: 1rem;
    margin-top: 3px;
 }

.active {
  border-bottom: 4px solid $secondary-color;
}

// -------- MEDIA QUERIES -----------

    //------- max 991px ------

@media(max-width: 991px) {
    .contentTraining {
        & .nav-item {
            margin: 5px;
            background: $secondary-color;
            border-radius: 10px;
        }
       & .nav-link {
        color: $clear-color;
        }
        .active {
            border-bottom: none;
            background: $third-color;
        }
    }
}

// -------- PRINT -----------
@media print {
    .onScreen {
        display: none;
    }
    .program{
    print-color-adjust:exact !important;
    background: white !important;
    orphans: 2 !important;
    }
    h1, h2, h3{
        page-break-after: avoid !important;
    }
    .print {
        display: block;
        &__heading {
            display: flex;
        justify-content: space-between;
        }
        &__logo {
            height: 2.5rem;
            }
        &__title {
            display: block;
            background: $secondary-color-clear;
            margin: 15px 0;
        }
    }
    .navBar {
        display: none;
    }
    .headerTraining {
        border-radius: 10px;
        background: $third-color-clear !important;
        .template {
            color: black !important;
        }
        .modalites {
            display: flex;
        }
        .codePrix {
            display: block !important;
            margin-left: 25px;
            margin-top: 5px;
            .code {
                margin: 0 !important;
                padding: 0 !important;
                background: none !important;
            }
            .tarif {
                margin: 0 !important;
                padding: 0 !important;
                margin-top: 10px !important;
            }
            .price {
                margin: 0 !important;
                padding: 0 !important;   
                background: none !important;            
            }
            span {
                font-weight: 600;
            }
        }
        .inscription {
            display: none !important;
        }
    }

    .contentTraining {
        background: white !important;
        .navTraining {
            display: none; 
        }
    }
    .backgroundContent {
            background: white !important;
        }
}


</style>