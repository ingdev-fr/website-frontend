<template>
  <form class="recherche__form row p-4 mb-3 rounded" name="recherche__form" role="search" v-on:submit.prevent>
                    <p class="fw-bold">Recherche :</p>
                    <div class="search-bar d-md-flex mb-3">
                        <input class="form-control rounded me-1" type="search" placeholder="Recherche par titre, contenu ou code !" aria-label="Search" v-model="searchWords" >
                    </div>
                    <!-- Filtres Modalités -->
                    <div class="search-filters">
                        <p class="fw-bold">Filtres :</p>
                        <div class="check  mb-4">
                            <div class="d-md-flex flex-wrap justify-content-start">
                                <div class="form-check form-switch me-5 mb-3">
                                    <input class="form-check-input form-check-input-general" type="checkbox" id="form-check-cpf">
                                    <label class="form-check-label" for="form-check-cpf">Eligible CPF
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox" id="form-check-qualif" >
                                    <label class="form-check-label" for="form-check-qualif">Formation qualifiante
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox"  id="form-check-distance">
                                    <label class="form-check-label" for="form-check-distance">100% distance
                                    </label>
                                </div>
                                <div class="form-check form-switch me-5">
                                    <input class="form-check-input form-check-input-general" type="checkbox"  id="form-check-courte">
                                    <label class="form-check-label" for="form-check-courte">Courte (5 jours max)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="select d-flex flex-wrap my-4">
                            <div class="me-5 selectCategorie">
                                <select id="selectCatégories" name="categorie" class="form-select" aria-label="catégorie" v-model="selectedCategory">
                                    <option value="Catégories" selected>Catégories</option>
                                    <option :value="item.attributes.nom" v-for="(item, idx) in $store.state.categories" v-bind:key="idx">{{item.attributes.nom}}</option>
                                </select>
                            </div>
                            <div class="me-5">
                                <select id="selectVilles" name="ville" class="form-select" aria-label="Ville" v-model="selectedVilles">
                                    <option value="Villes" selected>Villes</option>
                                    <option :value="item.attributes.nom" v-for="(item, idx) in $store.state.villes" v-bind:key="idx">{{item.attributes.nom}}</option>
                                </select>
                            </div>
                        </div>         
                    </div>
                    <!-- Bouton de recherche -->
                    <div class="mt-2 d-flex justify-content-between">
                        <button class="button btn btn-recherche" @click.stop="setSearch()">Lancer la recherche</button>
                        <button class="button btn btn-recherche btn-recherche__reinit" @click="reinitSearch()">Réinitialiser</button>
                    </div>
                </form>
</template>

<script>
export default {
    name: "SearchForm",


    
}
</script>

<style lang="scss" scoped>



</style>