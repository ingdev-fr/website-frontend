<template>
  <!--  Carte 1 de formation -->
  <div class="card promotion__card mb-3">
    <img class="card-img-top card__img" src="../../assets/images/restaurant-1.jpeg"  alt="">
    <div class="card-header header-training promotion__card__header">
        <h2 class="d-inline-flex formationTitle fs-5 fw-bold mb-0 text-light">Réaliser une formation dans Moodle<span class="cat-color ms-2" style="background: orange;"></span></h2>
        <p class="mb-2 text-light">Domaine : <span style="color: orange;">Pédagogie digitale</span>
        </p>
    </div>
    <div class="card-body">
        <div class="">
            <div><span class="fw-bold">Durée :</span> 3 jours</div>
            <div><span class="fw-bold">Modalité : </span>Blended learning</div>
            <div><span class="fw-bold">Certifications : </span>Certificat de réussite</div>
        </div>
    </div>
    <!-- CARD BODY PRESENTATION COLLAPSE-->
    <div class="affichage__card__body-2">
        <div class="card-header d-flex">
            <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
            <div class="" data-bs-toggle="collapse" href="#collapsePresentationPromotion" role="button" aria-expanded="false" aria-controls="collapsePresentationPromotion">Présentation</div>
        </div>
        <div id="collapsePresentationPromotion" class="collapse ">
            <p class="card-text card-body mb-0">Apprenez à concevoir, animer et évaluer un cours dans Moodle. Inscrivez vos étudiants et communiquez avec eux !</p>
            <!-- Modal Programme de formation -->
            <button href="#" type="button" class="btn btn-program mt-1 ms-3 mb-3" data-bs-toggle="modal" data-bs-target="#programFormation">Programme</button>
            <!-- Modal -->
            <div class="modal fade" id="programFormation" tabindex="-1" aria-labelledby="Programme de formation" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- header-->
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <!-- body-->
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <p>Test</p>
                                </div>
                            </div>
                        </div>
                        <!-- footer-->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>                           
    </div>
    <!-- CARD BODY SESSIONS COLLAPSE-->
    <div class="affichage__card__body-2">
        <div class="card-header d-flex justify-content-between">
            <div class="d-flex">
                <img class="ico me-2" src="../../assets/images/icons8-plus-orange.svg" alt="icone plus">
                <div class=""  data-bs-toggle="collapse" href="#collapseSessionsPromotion" role="button" aria-expanded="false" aria-controls="collapseSessionsPromotion">Sessions</div>
            </div>
        </div>
        <div id="collapseSessionsPromotion" class="collapse">
            <div class="card-text card-body">Nos sessions sont organisées par dates et par ville.</div>
                <div class="session card-text ms-3 d-flex pe-4">
                    <img class="sessionList-logo me-2" src="../../assets/images/logo-v.svg" alt="item de liste">
                    <div class="card-session px-2 mb-1"> Du 14/12/2022 au 16/12/2022 - Paris - 1895.00 € HT - Places disponibles<a class="nav-link text-primary" href="">S'inscrire</a></div>
                </div>
                <div class="session card-text ms-3 d-flex pe-4">
                    <img class="sessionList-logo me-2" src="../../assets/images/logo-v.svg" alt="item de liste">
                    <div class="card-session px-2 mb-1"> Du 21/12/2022 au 24/12/2022 - Metz - 1895.00 € HT - Places disponibles<a class="nav-link text-primary" href="">S'inscrire</a></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardVerticalCollapse',

}
</script>

<style lang="scss" scoped>
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
    &-session {
        &:hover {
            background: $clear-color;
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

 .sessionList-logo {
    height: 1rem;
    margin-top: 3px;
 }




</style>