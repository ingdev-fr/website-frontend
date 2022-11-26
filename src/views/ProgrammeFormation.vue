<template>
    <section class="program">
        <NavBar/>
        <div class="headerTraining mt-3 p-4">
            <div class="template d-md-flex text-light">
                <div class="col-lg-8 ps-md-2 ps-lg-4 mb-3 mb-md-0">
                    <!-- Titre et descriptif -->
                    <div class="cat p-2 mb-3 text-dark rounded">Pédagogie digitale</div>
                    <h1 class="formationTitle fs-1">Réaliser une formation dans Moodle</h1>
                    <h2 class="pitch formationTitle fs-5">Apprenez à concevoir, animer et évaluer un cours dans Moodle. Inscrivez vos étudiants et communiquez avec eux !</h2>
                    <!-- Modalités -->
                    <div class="modalites d-md-flex flex-wrap my-3">
                        <div class="duree d-flex align-items-center me-3 me-md-5">
                            <img class="headerTraining__icon" src="../assets/images/icons8-objet-avec-durée.svg" alt="icone de durée">
                            <div class="ms-2">3 jours</div>
                        </div>
                        <div class="duree d-flex align-items-center me-3 me-md-5">
                            <img class="headerTraining__icon" src="../assets/images/icons8-salle-de-classe.svg" alt="icone de modalité pédagogique">
                            <div class="ms-2">E-learning</div>
                        </div>
                        <div class="duree d-flex align-items-center me-3 me-md-5">
                            <img class="headerTraining__icon" src="../assets/images/icons8-certification.svg" alt="icone de certification">
                            <div class="ms-2">Certificat de réussite</div>
                        </div>
                    </div>
                    <!-- Code et prix -->
                    <div class="d-flex align-items-center pt-3">
                        <p>Code : <span class="code ms-2 p-2 rounded">FORM-3-06</span></p>
                        <p class="ms-3">Tarifs : <span class="price ms-2 p-2 rounded">1590€ HT</span></p>
                    </div>
                </div>
                <!-- Sessions et inscriptions-->
                <div class="inscription col-md-4 d-flex align-items-end justify-content-lg-center mb-2">
                    <button class="btn button btn-primary me-3 py-2 fs-md-5">Sessions</button>
                    <button class="btn button button-2 btn-primary  py-2 me-3 fs-md-5">Inscription</button>
                </div>
            </div>
        </div>
        <div class="template">
            <div class="ContentTraining">

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
    }

}
</script>


<style lang="scss" scoped>

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

</style>