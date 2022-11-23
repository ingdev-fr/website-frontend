<template>
  <section class="promotion p-2 rounded bg-white" id="promotion">
    <!-- Promotions -->
    <h2 class="promotion__title fs-4 text-center p-3 rounded">Exclusivités</h2>
    <div class="promotion__list" >
        <CardVerticalCollapse/>
    </div>
  </section>
</template>

<script>
import CardVerticalCollapse from '../cards/CardVerticalCollapse.vue';

export default {
    name: 'TrainingsPromotion',

    components: {
        CardVerticalCollapse,
    },

    data() {
        return {

        }

    },

    methods: {
    
    }
}
</script>

<style lang="scss" scoped>
.promotion {
    border: 1px solid $third-color;
}

.domaine-span {
    font-weight: 600; 
}


 // ------------------- MEDIA QUERIES -------------------

@media(max-width: 767px) {
}


</style>