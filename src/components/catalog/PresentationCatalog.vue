<template>
    <section class="presentationCatalog">
        <!---------- PRESENTATIONS  -->
        <div class="pt-5  container">
            <div class="row pt-lg-5">
                <div class="col-md-8 mx-auto">
                    <h1 class="text-center mb-5">Nos formations</h1>
                    <p class="lead fs-5">Retrouvez dans notre exemple de catalogue les informations essentielles permettant à vos clients de sélectionner la formation adaptée à leurs besoins : Recherche par mots clés dans le titre, par catégorie, par code, cpf ... Retrouvez, pour chaque formation, son programme détaillé avec les modalités pédagogiques, le tarif et le nombre de places restantes, la possibilité de s'inscrire en ligne, individuellement ou par entreprise. 
                    </p>
                </div>
                <div class="col-md-4">
                    <img class="presentation__img" src="../../assets/images/dazzle-line-signing-contract.svg" alt="icone de catalogue de formations ingdev">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PresentationCatalog',

}
</script>

<style lang="scss" scoped>
.presentation__img {
    height: 400px;
    margin-top: -80px;
}

</style>