<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(img, index) in sliders"
        :key="img.id"
        :style="{ backgroundImage: `url(${img.image})` }"
      >
        <div class="carousel-caption d-none d-md-block">
          <h1 class="titles-wewe text-uppercase">{{ img.title }}</h1>
          <p class="description text-capitalize">{{ img.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <fa class="carousel-control-prev-icon" icon="chevron-left" />
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <fa class="carousel-control-next-icon" icon="chevron-right" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MainSlider",
  created() {
    this.getSliderContent();
  },
  computed: {
    ...mapGetters(["sliders"]),
  },
  methods: {
    ...mapActions(["getSliderContent"]),
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  .carousel-inner {
    .carousel-item {
      height: 80vh;
      position: relative;
      background-size: cover;
      background-attachment: fixed;
      background-position: center center;
      background-repeat: no-repeat;
      &::before {
        @extend %before;
      }
      .carousel-caption {
        color: $textcolor;
        position: absolute;
        z-index: 7;
        top: 30%;
        left: 0;
        width: 100%;
        right: 0;
        display: block !important;
        .titles-wewe {
          color: $maincolor;
          font-size: 4rem;
          font-weight: bold;
          @media (min-width: 320px) and (max-width: 420px) {
            font-size: 1.7rem;
          }
          @media (min-width: 420px) and (max-width: 991px) {
            font-size: 2.5rem;
          }
        }
        .description {
          color: $white;
          @extend %p;
          width: 70%;
          margin: auto;
          @media (min-width: 320px) and (max-width: 420px) {
            font-size: 0.8rem;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid $maincolor;
  color: $white;
  font-size: 18px;
  border-radius: 50%;
  background-color: none;
  transition: 0.5s;
  z-index: 89;
  &:hover {
    background-color: $maincolor;
    border-color: $maincolor;
    color: $white;
  }
}
.carousel-control-next {
  right: 30px;
  @media (min-width: 320px) and (max-width: 420px) {
    right: 9px;
  }
}
.carousel-control-prev {
  left: 30px;
  @media (min-width: 320px) and (max-width: 420px) {
    left: 9px;
  }
}
</style>
