<template>
    <main class="mainSection">
        <!-- SECTION HEADER -->
            <NavBar/>
            <HeaderCatalog/>
            <ContentCatalog/>
        <!-- CATALOGUE -->
        <section class="catalog_stuff">


        </section>
    </main>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeaderCatalog from '@/components/catalog/HeaderCatalog.vue'
import ContentCatalog from '@/components/catalog/ContentCatalog.vue'

export default {
    name: 'CataloguePage',

    components: {
        NavBar,
        HeaderCatalog,
        ContentCatalog
  },
    

}
</script>

<style scoped lang="scss">

.mainSection {
    background-image: radial-gradient(100rem 80rem at top left, $third-color-clear 10%, #ffffff 90%);
}


</style>