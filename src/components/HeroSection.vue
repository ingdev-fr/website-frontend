<template>
  <div class="hello">
    <h1>{{ $store.state.homepage.titre }}</h1> <!-- j'affiche la valeur de la data 'titre'stockée dans le store-->
  </div>
</template>

<script>
export default {
  name: 'HeroSection',

  created: function() {
    this.$store.dispatch('changeTitle');
    }, // on exécute la fonction à la création de la page : connexion à l'API puis réécriture de la data du store 'titre' en fonction de la valeur de la donnée récupérée de l'API du backend. 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
