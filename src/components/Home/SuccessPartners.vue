<template>
  <div class="success-partners text-center">
    <div class="container">
      <h2 class="text-capitalize main-title">Success Partners</h2>
      <p class="text">
        Some of the opinions of our partners in success about their satisfaction
        with the currency
      </p>
      <div class="testimonials">
        <VueSlickCarousel v-if="partners.length" v-bind="settings">
          <div class="persons" v-for="partner in partners" :key="partner.id">
            <div class="every-part">
              <img
                class="person-img shadow-sm d-block m-auto rounded-circle"
                draggable="false"
                :src="partner.image"
                :alt="partner.name"
              />
              <h6 class="name text-capitalize">{{ partner.name }}</h6>
              <p class="opinion">
                {{ text | justSpecificWords }}
              </p>
              <div class="rating">
                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                <span><i class="fa fa-star" aria-hidden="true"></i></span>
                <span><i class="fa fa-star" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "SuccessPartners",
  data() {
    return {
      text: "I was afraid to buy it until they bought it and I never regretted it Really it's a great coin",
      settings: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.getPartners();
  },
  computed: {
    ...mapGetters(["partners"]),
  },
  methods: {
    ...mapActions(["getPartners"]),
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style lang="scss">
.success-partners {
  padding: 60px 0;
  .main-title {
    font-size: 2rem;
    color: $headcolor;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .text {
    line-height: 1.7;
    line-height: 1.7;
    font-size: 1rem;
  }
  .testimonials {
    margin-top: 50px;
    .persons {
      text-align: center;
      width: 98% !important;
      margin: auto;

      .every-part {
        padding: 10px;
        background-color: #eee;
        border-radius: 10px;
        cursor: grab;
        transition: 0.5s;
        &:hover {
          background-color: $headcolor;
          .opinion {
            color: $white !important;
          }
        }
      }

      .name {
        font-size: 1.1rem;
        color: $maincolor;
        margin-top: 10px;
      }
      .opinion {
        line-height: 2;
        color: $textcolor;
        padding: 5px;
      }
      .person-img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        padding: 2px;
        background-color: #fff;
      }
    }
    .rating {
      margin: 10px 0;
      span {
        margin: 2px;
        color: #ffc850;
      }
    }
  }
  .slick-track {
    height: auto !important;
  }
  .slick-dots {
    bottom: -40px !important;
  }
  .slick-dots li {
    &.slick-active {
      background-color: $maincolor !important;
      border-radius: 50%;
    }
  }
  .slick-dots li button {
    border-radius: 50%;
    background: none;
    border: 1px solid $maincolor;
    transition: 0.3s;
    &:hover {
      transform: rotate(350deg);
      background-color: $maincolor !important;
    }
  }
  .slick-dots li button:before {
    color: $maincolor;
    display: none;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
}
</style>
