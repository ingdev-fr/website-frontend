<template>
  <main>
    <HeroSection/>
    <AddedValues/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'
import AddedValues from '@/components/AddedValues.vue'

export default {
  name: 'HomeView',

  components: {
    HeroSection,
    AddedValues,
  }
}
</script>

<style lang="scss" scoped>
.separator {
  height: 10px;

}


</style>