<template>
  <main class="mainSection">
    <div class="header">
      <NavBar />
      <HeaderSection/>
    </div>
    <ProductsDetails/>
    <AddedValues/>
  </main>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import ProductsDetails from '@/components/ProductsDetails.vue'
import AddedValues from '@/components/AddedValues.vue'

export default {
  name: 'HomeView',

  data() {
    return {
    }
  },

  components: {
    NavBar,
    HeaderSection,
    ProductsDetails,
    AddedValues,
  },

  created: function() {
    this.$store.dispatch('getHeader');
    this.$store.dispatch('getHomepageHero');
    this.$store.dispatch('getHomepageAbout');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 

}
</script>

<style lang="scss" scoped>

.header{
  background-image: radial-gradient(circle farthest-side at 20% 0%, $secondary-color-clear 10%, #ffffff 90%);


}

</style>