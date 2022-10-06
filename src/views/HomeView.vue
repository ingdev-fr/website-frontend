<template>
  <div class="home">
    <NavigationSite/>
    <HeroSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationSite from '@/components/NavigationSite.vue'
import HeroSection from '@/components/HeroSection.vue'


export default {
  name: 'HomeView',

  components: {
    NavigationSite,
    HeroSection
  }
}
</script>
