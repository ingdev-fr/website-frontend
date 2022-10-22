<template>
    <section class="section-values p-4" :style="{'background-image': `url(${this.$store.state.homepage.about.image})`}">
        <div class="container-grid values d-flex col-lg-8 mx-auto">

            <div class="values__list p-4">
                <h2 class="values__list__title feature__title mb-3 pb-3 text-center">{{ $store.state.homepage.about.title }}</h2>
                <div class="values__list__features">
                    <!-- FEATURES-->
                    <div class="feature text-start pe-3 pb-3" v-for="(item, id) in $store.state.homepage.about.aboutContent"  v-bind:key="id">
                         <div class="feature-icon  feature-icon--1">
                            <font-awesome-icon icon="fa-solid fa-computer" class="fa-solid"/>
                        </div>
                        <h3 class="feature__title pt-2">{{ item.title }}</h3>
                        <p class="feature__content pt-2">{{ item.content }}</p>
                    </div>
                </div>
                <!-- TECHNOLOGIES -->
                <div class="values__list__technologies">
                    <div class="feature-icon feature-icon--5">
                        <font-awesome-icon icon="fa-solid fa-microchip" class="fa-solid"/>
                    </div>
                    <h3 class="feature__title pb-3 pt-2">{{ $store.state.homepage.about.technologies.title }}</h3>
                    <div class="technologies">
                        <div v-for="(item, id) in $store.state.homepage.about.technologies.logos"  v-bind:key="id"><img :src=url+item.attributes.url :alt=item.attributes.caption class="technologies__img rounded-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>

export default {
    name: 'AddedValues',

    data () {
        return {
            show: false,
            url: this.$store.state.urlUploads
        }
    }

}
</script>

<style scoped lang="scss">

.values {
    &__list {
        background: $primary-color-transp;
        border-radius: 7px;
        &__features {
            display: grid;
            grid-template-columns: 1fr;
        }
        &__technologies{
            padding-top: 20px;
        }
        &__title {
            border-bottom: 1px solid $clear-color
        
        }
    }

}

.technologies{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    row-gap: 8px;
    column-gap: 8px;
    &__img {
        height: 55px;
        object-fit: cover;
    }
}

.feature {
    &__title {
        color: $clear-color;
    }
    &__content {
        color: $clear-color;
    }
}
.fa-solid {
    width: 20px;
    height: 20px;
}

.feature-icon {
    height: 36px;
    width: 36px;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 7px;
    color: $clear-color;
    &--1 {
        background-color: $pink-color;
    }
    &--2 {
        background-color: $yellow-color;
    }
    &--3 {
        background-color: $secondary-color;
    }
    &--4 {
        background-color: $clear-color;
        color: $secondary-color;
    }
    &--5 {
        background-color: $pink-color;       
    }
}

.pink-color {
    color: $pink-color;
}



// --- MEDIA QUERIES ----
@media(max-width: 899px) {

}

@media(min-width: 900px) {

    .values {
        &__img {
            height: auto;
        }
        &__list {
            &__features {
                grid-template-columns: 1fr 1fr;
                row-gap: 20px;
            }
        }
    }
    .technologies {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>



