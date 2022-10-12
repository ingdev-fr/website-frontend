<template>
  <HeaderSection/>
  <router-view/>
  <FooterSection/>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'App',

  components: {
    HeaderSection,
    FooterSection
  }
}

</script>

<style lang="scss">
#app {

  // Variables
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>


