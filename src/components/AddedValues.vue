<template>
    <section class="section-values row py-5 px-3">
        <div class="template">
            <div class="col-lg-8 mx-auto">
                <div class="text-center">
                    <h2 class="values__list__title feature__title mb-3 pb-3 fs-1 fw-bold ">{{ $store.state.homepage.about.title }}</h2>
                    <p class="values__list__content fs-5">{{ $store.state.homepage.about.content }}</p>
                </div>
            </div>
            <div class="container-grid values col-md-10 col-lg-8 mx-auto">
                <div class="values__list p-4">
                    <div class="values__list__features">
                        <!-- FEATURES-->
                        <div class="feature text-start pe-3 pb-3" v-for="(item, id) in $store.state.homepage.about.aboutContent"  v-bind:key="id">
                            <svg width="140" height="72" viewBox="0 0 378 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g class="svgCircles">
                                    <g class="groupPink">
                                        <circle class="circle-3" cx="167" cy="89" r="40"/>
                                        <circle class="circle-1" cx="61" cy="89" r="40"/>
                                    </g>
                                    <g class="groupLight">
                                        <circle class="circle-light" cx="61" cy="89" r="40"/>
                                    </g>
                                </g>
                            </svg>
                            <h3 class="feature__title pt-2">{{ item.title }}</h3>
                            <p class="feature__content pt-2">{{ item.content }}</p>
                        </div>
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
            url: this.$store.state.urlUploads,
        }
    }

}
</script>

<style scoped lang="scss">
.section-values {
    background: url('../assets/images/iphone-values.png');
    background-size: cover;
    background-position: center;
}
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
    }

}

.technologies{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    row-gap: 8px;
    column-gap: 12px;
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

.pink-color {
    color: $pink-color;
}

// ---------- ANIMATIONS --------------

.circle {

    &-light {
        fill: $secondary-color;
        fill-opacity: 0.54;
        transition: all 0.5s ease;
    }
    &-1 {
        fill: $pink-color;
        transform: translateX(-100%);
    }
    &-3 {
        fill: $pink-color;
        transition: all 0.5s ease;
    }
}

.feature:hover .circle-light {
    transform: translateX(13%); //quand le svg sera hoover, le cercle bleu se déplacera vers la droite 
}

.feature:hover .circle-1 {
    transform: translateX(0%); //quand le svg sera hoover, le cercle rose 3 se déplacera vers la droite et son opacité passera à 0. 
}

.feature:hover .circle-3 {
    animation: rightLeft 1000ms forwards; 
}

@keyframes rightLeft {
    0% {
        transform: translateX(30%);
    }
     100% {
        transform: translateX(-5%);
     }
}



// --- MEDIA QUERIES ----
@media(min-width: 768px) {
    .values {
        &__list {
            &__features {
                grid-template-columns: 1fr 1fr;
                row-gap: 20px;
            }
        }
    }

}

    // ----- 900px ------
 @media(min-width: 900px) {
    .section-values {
        background: url('../assets/images/values-svg.png');
        background-size: cover;
    }
}
</style>



