<template>
  <HeaderNav/>
  <router-view/>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'App',

  components: {
    HeaderNav
  }
}

</script>

<style lang="scss">
#app {

  // Variables
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>


