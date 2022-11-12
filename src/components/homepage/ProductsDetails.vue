<template>
    <div class="details mt-lg-5">
        <div class="template text-center py-lg-5">
            <!-- TITRE -->
            <h2 class="details__title col-lg-8 mx-auto mb-5">Travaillons ensemble à chaque étape de la construction de votre solution!</h2>
            <!-- LISTE DES PHASES -->
            <div class="details__phases col-lg-10 pt-2 mx-auto">
                <div class="d-flex mx-auto  flex-wrap">
                    <!-- Etape 1-->
                    <div id="phase1" class="phase text-center mb-3 mx-3 col-lg-5">
                        <img src="../../assets/images/icons8-analyze.svg" alt="" class="phase__icon">
                        <h3 class="phase__title">Analyse</h3>
                        <p class="phase__content">Traduisons vos besoins en solution et fonctionnalités vous permettant d'optimiser et de piloter vos formations</p>
                    </div>
                    <!-- Etape 2-->
                    <div id="phase2" class="phase text-center mb-3 mx-3 col-lg-5">
                        <img src="../../assets/images/icons8-web-design.svg" alt="" class="phase__icon">
                        <h3 class="phase__title">Conception</h3>
                        <p class="phase__content">Construisons une maquette design, fonctionnelle, pensée pour l'utilisateur et vos collaborateurs </p>
                    </div>
                </div>
                <div class="d-flex mx-auto flex-wrap">
                    <!-- Etape 3-->
                    <div id="phase3" class="phase text-center mb-3 mx-3 col-lg-5">
                        <img src="../../assets/images/icons8-process.svg" alt="" class="phase__icon">
                        <h3 class="phase__title">Intégration</h3>
                        <p class="phase__content">Codons, testons et mettons en production votre solution, optimisée pour le SEO et la rapidité des services</p>
                    </div>
                    <!-- Etape 4-->
                    <div id="phase4" class="phase text-center mb-3 mx-3 col-lg-5">
                        <img src="../../assets/images/icons8-time.svg" alt="" class="phase__icon">
                        <h3 class="phase__title">Maintenance</h3>
                        <p class="phase__content">Hebergeons votre solution et gardons la maintenable et éditable, pour la sécurité et le confort de chacun</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name : 'ProductsDetails',



}
</script>


<style lang="scss" scoped>

// --- MEDIA QUERIES ----

    // ----- min 992px ------
@media(min-width: 992px) {

}
</style>