<template>
  <header class="header">
    <NavBar/>
    <div class="template">
      <!-- HERO SECTION -->
      <section class="hero-container mt-lg-4">
          <!-- HERO TEXT -->
          <div id="hero__text" class="row hero__text rounded-3 py-3 col-xl-10 mx-auto">
            <div class="pt-3 d-flex flex-column justify-content-center align-items-center text-center">
              <div class="d-flex justify-content-center flex-wrap">
                <svg class="hero__chart" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="chart-1">
                      <g id="rect">
                        <rect id="rect-blue" x="230" y="260" width="36" height="152" transform="rotate(-180 230 260)" fill="url(#paint0_linear_38_764)"/>
                        <rect id="rect-purple" x="173" y="260" width="36" height="179" transform="rotate(-180 173 260)" fill="url(#paint1_linear_38_764)"/>
                        <rect id="rect-pink" x="116" y="260" width="36" height="139" transform="rotate(-180 116 260)" fill="url(#paint2_linear_38_764)"/>
                        <rect id="rect-yellow" x="59" y="260" width="36" height="110" transform="rotate(-180 59 260)" fill="url(#paint3_linear_38_764)"/>
                      </g>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_38_764" x1="248" y1="473" x2="248" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#86C7ED"/>
                      <stop offset="1" stop-color="#86C7ED" stop-opacity="0.68"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_38_764" x1="191" y1="476.5" x2="191" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A066CB"/>
                      <stop offset="1" stop-color="#A066CB" stop-opacity="0.76"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_38_764" x1="134" y1="457.5" x2="134" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F62992"/>
                      <stop offset="1" stop-color="#F62992" stop-opacity="0.55"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_38_764" x1="77" y1="451" x2="77" y2="260" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFCA08"/>
                      <stop offset="1" stop-color="#FFCA08" stop-opacity="0.66"/>
                      </linearGradient>
                    </defs>
                </svg>
                <h1 class="hero__text--h1 fw-bold pb-0" >{{ $store.state.homepage.hero.title }}</h1>
              </div>
              <p class="hero__text--content-large fs-5 mt-3 col-lg-10"> {{ $store.state.homepage.hero.content }} </p>
              <p class="hero__text--content-small fs-5 mt-3 col-lg-10"> Mettez en place vos processus de conception, gestion et pilotage de vos formations.</p>

                <!-- HERO TECHNOLOGIES -->
              <div class="hero__technologies mt-3">
                <div class="hero__technologies__pictures d-flex flex-wrap justify-content-center">
                  <div v-for="(item, id) in $store.state.homepage.about.technologies.logos"  v-bind:key="id"><img :src=url+item.attributes.url :alt=item.attributes.caption class="hero__technologies__img rounded-1 me-2 mb-2"></div>
                </div>                   
              </div>
            </div>
          </div>
          <!-- PRODUCTS LIST -->
          <div class="products mt-5">
            <h2 class="products--title mb-5 mb-lg-4 col-xl-10 text-center text-lg-start">{{ $store.state.homepage.hero.title2}}</h2>
            <p class="hero__text--content fs-5 mt-3 col-lg-10"> {{ $store.state.homepage.hero.content2 }} </p>
            <div class="products--frame">
              <div class="products--cards col-lg-8 me-xl-5">
                <!-- Products 1 -->
                <div class="products--card d-lg-flex align-items-center my-4 py-2 bg-light rounded-3">
                  <div id="card__icon-1" class="card__icon  p-3"></div>
                  <div class="card__content px-3">
                    <h3 class="mt-3">{{ $store.state.homepage.hero.card.title}}</h3>
                    <p>{{ $store.state.homepage.hero.card.content}}</p>
                    <p class="products__keywords">{{ $store.state.homepage.hero.card.keywords}}</p>
                  </div>
                  
                </div>
                <!-- Products 2 -->
                <div class="products--card d-lg-flex align-items-center my-4 py-2 bg-light rounded-3">
                  <div id="card__icon-2" class="card__icon p-3"></div>
                  <div class="card__content px-3">
                    <h3 class="mt-3">{{ $store.state.homepage.hero.card2.title}}</h3>
                    <p>{{ $store.state.homepage.hero.card2.content}}</p>
                    <p class="products__keywords">{{ $store.state.homepage.hero.card2.keywords}}</p>
                  </div>
                </div>
                <!-- Products 3 -->
                <div class="products--card d-lg-flex align-items-center my-4 py-2 bg-light rounded-3">
                  <div id="card__icon-3" class="card__icon p-3"></div>
                  <div class="card__content px-3">
                    <h3 class="mt-3">{{ $store.state.homepage.hero.card3.title}}</h3>
                    <p>{{ $store.state.homepage.hero.card3.content}}</p>
                    <p class="products__keywords">{{ $store.state.homepage.hero.card3.keywords}}</p>
                  </div>
                </div>
              </div>
              <!-- Illustration-->
              <div class="products__illustration p-3 d-flex flex-column flex-lg-row justify-content-center align-items-center col-lg-4">
                <img class="products__illustration--pic" src="../../assets/images/dazzle-line-design-system.svg" alt="">
              </div>
            </div>
          </div>
      </section>
    </div>
  </header>
  
</template>

<script>
import NavBar from '../../components/NavBar.vue'

export default {
    name: 'HeaderSection',

    components: {
      NavBar,
  },

    data () {
        return {
            url: this.$store.state.urlUploads,
        }
    }
}
</script>

<style scoped lang="scss">

// -------- HEADER -----------------
.header{
  background: radial-gradient(circle at center 350px, $third-color-clear 20%, transparent 75%);
}
    // HERO -----------------------
  .hero {
  &__chart {
  height: 110px;
  width: auto;
  }
  &__text {
    color: $text-color;
    &--h1 {
      margin-top: auto;
      margin-bottom: 0;
    }
    &--content-small {
      display: none;
    }
  }
  &__technologies {
    &__img {
        height: 5vh;
        box-shadow: 5px 4px 3px rgba($text-color, 0.25);
    }
  }
}
    // PRODUCTS ---------------------
.products {

  &--card {
    box-shadow: 5px 4px 3px rgba($text-color, 0.25);
  }
  &__illustration {
    &--pic {
      height: 30vh;
    }
  }
  &__keywords {
    color: $third-color-dark;
    font-weight: 600;
  }

.card__icon {
  height: 90px;
}

#card__icon-1 {
  background: url('../../assets/images/icons8-web-96.svg') no-repeat center center;
  background-size: contain;
}

#card__icon-2 {
  background: url('../../assets/images/icons8-backend-development.svg') no-repeat center center;
  background-size: contain;
}

#card__icon-3 {
  background: url('../../assets/images/icons8-moodle.svg') no-repeat center center;
  background-size: contain;
  }
}

  // ------ CIRCLES --------

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


// --- MEDIA QUERIES ----

    // ----- max 992px = Tablettes normales------
  @media(max-width: 992px) {
.header{
  background: radial-gradient(circle at top center, $third-color-clear 10%, transparent 85%);
}
.products--card {
  text-align: center;
}
.card__icon {
  text-align: center;
}

.hero__text--content-large {
  display: none; 
}
.hero__text--content-small {
  display: initial; 
}


  }
    // ----- min 992px ------
    @media(min-width: 992px) {
  .products {
  &--frame {
    display: flex;
    }
  &__illustration {
    &--pic {
      height: 25vh;
    }
    }
  }
  .card__icon {
    width: 35%;
  }
}

    // ----- 1400px ------

@media(min-width: 1400px) {
  .products {
  &__illustration {
    &--pic {
      height: 30vh;
      }
    }
  }
}

    // ----- 2000px ------

    @media(min-width: 2000px) {
  .products {
  &__illustration {
    &--pic {
      height: 35vh;
      }
    }
  }
}


// --------- ANIMATIONS ------------

  //----- CHART -----------
#hero__text:hover #rect-yellow
 {
    animation: moveUpDown1 1000ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#hero__text:hover #rect-pink
 {
    animation: moveUpDown2 1000ms 150ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#hero__text:hover #rect-purple
 {
    animation: moveUpDown3 1000ms 300ms forwards ease-out;
    animation-iteration-count: infinite;
  }
#hero__text:hover #rect-blue
 {
    animation: moveUpDown4 1000ms 500ms forwards ease-out;
    animation-iteration-count: infinite;
  }

@keyframes moveUpDown1 {
    0% {
        height: 110px;
    }
    33% {
        height: 200px;
    }
    0% {
        height: 75px;
    }
     100% {
      height: 110px;
     }
}

@keyframes moveUpDown2 {
    0% {
        height: 139px;
    }
    33% {
        height: 50px;
    }
    0% {
        height: 90px;
    }
     100% {
      height: 139px;
     }
}

@keyframes moveUpDown3 {
    0% {
        height: 179px;
    }
    33% {
        height: 90px;
    }
    0% {
        height: 130px;
    }
     100% {
      height: 179px;
     }
}

@keyframes moveUpDown4 {
    0% {
        height: 152px;
    }
    33% {
        height: 30px;
    }
    0% {
        height: 110px;
    }
     100% {
      height: 152px;
     }
}

</style>