<template>
    <section class="program" >
        <NavBar class="navBar"/>
        <div class="template print__heading mb-4">
            <img class="print__logo" src="../assets/images/logo.svg" alt="logo">
            <p>Programme de formation</p>
        </div>
        <!-- ENTETE DE LA FORMATION-->
        <div class="headerTraining mt-3 py-4">
            <div class="template d-lg-flex text-light">
                <div class="col-lg-8 ps-md-2 mb-2">
                    <!-- Titre et descriptif -->
                    <div class="cat p-2 mb-3 text-dark rounded">{{categoryFormation}}</div>
                    <h1 class="formationTitle fs-1">{{titreFormation}}</h1>
                    <h2 class="pitch formationTitle fs-5">{{presentationRapide}}</h2>
                    <!-- Modalités -->
                    <div class="modalites">
                        <div class="d-md-flex flex-wrap my-3">
                            <div class="duree d-flex align-items-center me-3 me-md-5">
                                <img class="headerTraining__icon" src="../assets/images/icons8-objet-avec-durée.svg" alt="icone de durée">
                                <div class="ms-2">{{dureeEnHeures}} heures</div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5 flex-wrap">
                                <img class="headerTraining__icon" src="../assets/images/icons8-salle-de-classe.svg" alt="icone de modalité pédagogique">
                                <div class="ms-2" v-for="(modalite, idx) in modalitePedagogiques" :key="idx">{{modalite.attributes.nom}}<span v-if="(idx + 1) !== modalitePedagogiques.length"> /</span></div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5 flex-wrap">
                                <img class="headerTraining__icon" src="../assets/images/icons8-certification.svg" alt="icone de certification">
                                <div class="ms-2" v-for="(certif,idx) in certifications" :key="idx" >{{certif.attributes.nom}} <span v-if="(idx + 1) !== certifications.length"> /</span></div>
                            </div>
                            <div class="duree d-flex align-items-center me-3 me-md-5" v-if="cpfFormation == true">
                                <img class="headerTraining__icon" src="../assets/images/icons8-cpf.svg" alt="icone de certification">
                                <div class="ms-2">CPF</div>
                            </div>
                        </div>
                        <!-- Code et prix -->
                        <div class="codePrix d-flex align-items-center pt-3 flex-wrap">
                            <div>Code : <span class="code ms-2 p-2 rounded">{{codeFormation}}</span></div>
                            <div class="tarif ms-3">Tarifs : <span class="price ms-2 p-2 rounded">{{prixFormation}}€ HT</span></div>
                        </div>
                    </div>
                </div>
                <!-- Boutons Sessions et inscriptions-->
                <div class="inscription col-lg-4 d-flex align-items-end justify-content-lg-end mt-4 mt-lg-0">
                    <button class="btn button btn-primary px-4 fs-5" data-bs-toggle="modal" data-bs-target="#sessionModal">Sessions - Inscription</button>
                </div>
                  <!-- MODAL -->
                  <div class="modal fade" id="sessionModal" tabindex="-1" aria-labelledby="sessionModalLabel" aria-hidden="true" data-bs-backdrop="static" >
                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                    <div class="modal-content">
                      <!-- MODAL HEADER -->
                      <div class="modal-header" id="modal-header">
                        <h5 class="modal-title text-light" id="sessionModalLabel">Sessions</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <!-- MODAL BODY -->
                      <div class="modal-body">
                        <div class="card-text card-body text-dark mb-3">Nos sessions sont organisées par dates et par ville: </div>
                      <div class="session card-text d-flex flex-wrap align-items-center p-2" v-for="(session, idx) in maFormation.attributes.sessions.data" :key="idx">
                            <div class="card-session px-2 mb-1 rounded col-8 col-sd-9 col-lg-10 text-dark" ><span class="session-span">Du {{session.attributes.date_debut}} au {{session.attributes.date_fin}}</span>  - {{session.attributes.ville.data.attributes.nom}} - {{this.maFormation.attributes.prix}} € HT - {{session.attributes.nombre_places}} places disponibles</div>
                            <button class="inscription-button col-4 col-sd-3 col-lg-2 btn btn-primary mb-2" data-bs-dismiss="modal" @click="showInscription(this.maFormation.attributes.code)">S'inscrire</button>
                        </div>
                      </div>
                      <!-- MODAL FOOTER BUTTONS-->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="send-button" data-bs-dismiss="modal">Fermer</button>
                        </div>
                        
                    </div>
                    </div>
                       
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
            <!-- !!!!!!!!!!!!!!!!! CONTENU FORMATION POUR SCREEN !!!!!!!!!!!!!!!!!!!!!!!-->
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
                <!-- Modules -->
                <h2 class="print__title fs-3 p-2">Modules</h2>
                <div class="template">
                    <div class="programme" v-if="modeActive == 'prog'">
                        <!--  Module 1 de formation -->
                        <div class="card promotion__card mb-3" v-for="(mod, idx) in modulesFormation" :key="idx">
                            <div class="card-header promotion__card__header">
                                <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">Module {{mod.numeroModule}}: {{mod.titre}}</h2>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div class="d-flex">
                                        <span class="fw-bold">Objectif(s) :</span>
                                        <div class="ms-1" v-for="(obj, idx) in mod.objectifs" :key="idx">{{obj.nom}}</div>
                                    </div>
                                    <div><span class="fw-bold">Durée : </span>{{mod.dureeModuleHeures}} heures</div>
                                    <div class="d-flex">
                                        <span class="fw-bold">Modalités pédagogiques : </span>
                                        <div class="ms-1" v-for="(modal, idx) in mod.modalitePedagogiques.data" :key="idx">{{modal.attributes.nom}}<span v-if="(idx + 1) !== mod.modalitePedagogiques.data.length"> /</span></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Collapse Contenus-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex">
                                    <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                    <div class="" data-bs-toggle="collapse" :href="'#collapseContenus'+mod.id" role="button" aria-expanded="false" :aria-controls="'#collapseContenus'+mod.id">Contenus théoriques et méthodologiques</div>
                                </div>
                                <div :id="'collapseContenus'+mod.id" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div class="ms-" v-for="(content, idx) in mod.savoirs" :key="idx">           <img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">{{ content.nom}}</div>
                                    </div>
                                </div>                           
                            </div>
                            <!-- Collapse Activités d'apprentissage-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" :href="'#collapseApprentissage'+mod.id" role="button" aria-expanded="false" :aria-controls="'#collapseApprentissage'+mod.id">Activités d'apprentissage</div>
                                    </div>
                                </div>
                                <div :id="'collapseApprentissage'+mod.id" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div class="ms-" v-for="(actiapp, idx) in mod.activitesApprentissage" :key="idx"><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">{{ actiapp.nom}}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Collapse Activités d'évaluation-->
                            <div class="affichage__card__body-2">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex">
                                        <img class="ico me-2" src="../assets/images/icons8-plus.svg" alt="icone plus">
                                        <div class=""  data-bs-toggle="collapse" :href="'#collapseEvaluation'+mod.id" role="button" aria-expanded="false" :aria-controls="'#collapseEvaluation'+mod.id">Activités d'évaluation</div>
                                    </div>
                                </div>
                                <div :id="'collapseEvaluation'+mod.id" class="collapse.show">
                                    <div class="px-5 py-3">
                                        <div class="ms-" v-for="(actieval, idx) in mod.activitesEvaluation" :key="idx"><img class="iconeContenu me-2" src="../assets/images/icons8-coche.svg" alt="icone de coche">{{ actieval.nom}}</div>
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
            <!-- !!!!!!!!!!!!!!  CONTENU FORMATION POUR PRINT (sans les V-if) !!!!!!!!!!!!!!!!!-->
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
                        <div class="card promotion__card mb-3" v-for="(mod, idx) in programme" :key="idx">
                            <div class="card-header promotion__card__header" >
                                <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light" >Module 4: test</h2>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <div><span class="fw-bold">Objectif(s) :</span> {{mod.objectifs}}</div>
                                    <div><span class="fw-bold">Durée : </span>{{mod.dureeModuleHeures}}</div>
                                    <div><span class="fw-bold">Modalités pédagogiques : </span>{{mod.modalitePedagogiques}}</div>
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
        }
    },

    computed : {
        // je récupère la formation pour laquelle je vais afficher les informations en récupérant le paramètre d'url qui est son code. 
       maFormation () {
        const code = this.$route.params.code;
        console.log(code);
        return this.$store.state.formations.find(training => training.attributes.code == code);
       },
       // J'attribue les différentes valeurs aux données que je vais afficher dans le html
       categoryFormation () {
        return this.maFormation.attributes.categoryFormation.data.attributes.nom;
       },
       titreFormation () {
        return this.maFormation.attributes.titre;
       },
       presentationRapide () {
        return this.maFormation.attributes.presentationRapide;
       },
       dureeEnHeures () {
        return this.maFormation.attributes.dureeEnHeures;
       },
       modalitePedagogiques () {
        return this.maFormation.attributes.modalitePedagogiques.data;
       },
       certifications () {
        return this.maFormation.attributes.certifications.data;
       },
       cpfFormation () {
        return this.maFormation.attributes.CPF;
       },
       codeFormation () {
        return this.maFormation.attributes.code;
       },
       prixFormation () {
        return this.maFormation.attributes.prix;
       },
       publicDescriptif () {
        return this.maFormation.attributes.public;
       },
       competences () {
        return this.maFormation.attributes.competences;
       },
       modulesFormation () {
        return this.maFormation.attributes.modules;
       },


    },

    methods : { 
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
        // Je créé la méthode qui permet de réécrire la valeur de la donnée "activeClass" du store pour afficher dynamiquement la classe "active" dans la navigation de cette page. 
        changeActiveClass : function () {
            this.$store.commit('CHANGE_ACTIVECLASS');
            this.$store.state.activeClass = "showroom";
            },
        showInscription: function(param) {
            this.$router.push({name: 'inscription', params: {code: `${param}`}}); // En 1er paramètre, je renvoie vers la route définie dans l'index.js de Vrouter qui a pour name : programme (et qui représente mon composant spécifique à l'affichage de ma fiche formation). En 2ème paramètre, j'attribue une valeur à ma propriété "name" définie comme paramètre de ma route dans index.js et je lui attribue une valeur qui est le paramètre de ma fonction. 
        },

    },

    created: function () {
        this.$store.dispatch('getFormations'); // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 
    },

    mounted: function () {
    this.changeActiveClass(); //j'appelle la méthode qui me permet d'attribuer la classe "active" à la page
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
        background-color: $third-color-dark;
        &:hover {
                background-color: $third-color;
            }
    }
    &__icon {
        height: 2rem;
    }
}

#modal-header {
  background: $third-color-transp;
}

.session {
    border: 1px solid $third-color-clear;
    &:hover {
        background: $third-color-clear;
    }
    &-span {
        font-weight: 600;
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
    print-color-adjust: exact !important;
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