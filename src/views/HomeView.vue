<template>
  <section class="home">
    <HeroSection/>
  </section>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'


export default {
  name: 'HomeView',

  components: {
    HeroSection,
  }
}
</script>
