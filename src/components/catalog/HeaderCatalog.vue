<template>
  <section class="presentation template">
    <!---------- PRESENTATIONS  -->
    <div class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-md-10 mx-auto">
                <h1 class="mb-5">Nos formations</h1>
                <p class="lead fs-5">Retrouvez dans notre exemple de catalogue les informations essentielles permettant à vos clients de sélectionner la formation adaptée à leurs besoins : Recherche par catégorie ou par contenu, modalités de formation, programme de formation avec possibilité de téléchargement, tarifs et disponibilités des places.
                </p>
            </div>
        </div>
    </div>
    <!----------- FORMATIONS -->
    <div class="formations row">
        <!-- Promotions -->
        <div class="promotion col-md-4 p-2 rounded">
            <h2 class="fs-4 text-center">A ne pas manquer</h2>
        </div>
        <!-- Barre de recherche -->
        <div class="recherche col-md-8 p-2 rounded">
            <h2 class="fs-4 text-center">Recherche</h2>
            <form class="input-group row" role="search" v-on:submit.prevent>
                <div class="d-md-flex mb-3">
                    <input class="form-control rounded me-1" type="search" placeholder="Recherche par mots clés !" aria-label="Search" v-model="searchWords" @keyup.enter="setSearch()">
                    <select class="form-select rounded ms-1" aria-label="Domaines de formation">
                        <option selected>Recherche par domaines de formation</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="d-md-flex justify-content-between">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                </div>
            </form>
            <!-- Affichage des formations -->
            <div class="affichage">

            </div>
        </div>
    </div>
    
  </section>
</template>

<script>
export default {
    name: 'HeaderCatalog', 

}
</script>

<style lang="scss" scoped>

.promotion {
    border: 1px solid $third-color;
    background: $third-color-clear;
}

</style>