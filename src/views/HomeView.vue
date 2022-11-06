<template>
  <main class="mainSection">
    <HeaderSection/>
    <ProductsDetails/>
    <AddedValues/>
    <FooterSection/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/homepage/HeaderSection.vue'
import ProductsDetails from '@/components/homepage/ProductsDetails.vue'
import AddedValues from '@/components/homepage/AddedValues.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'HomeView',

  data() {
    return {
    }
  },

  components: {
    HeaderSection,
    ProductsDetails,
    AddedValues,
    FooterSection
  },

  created: function() {
    this.$store.dispatch('getHeader');
    this.$store.dispatch('getHomepageHero');
    this.$store.dispatch('getHomepageAbout');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture des datas du store en fonction de la valeur des données récupérées de l'API du backend. 

}
</script>

<style lang="scss" scoped>
.mainSection {
  background-image: radial-gradient( at center center, $clear-color 20%, $third-color-clear 60%, $third-color);
}
</style>