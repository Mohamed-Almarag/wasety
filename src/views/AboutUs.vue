<template>
  <div class="about-us">
    <div class="description-photo"></div>
    <div class="container">
      <div class="about-text">
        <h2 class="title">About Waseety</h2>
        <p class="text" v-html="websiteBio">{{ websiteBio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      websiteBio: "",
    };
  },
  mounted() {
    let websiteInfo = JSON.parse(localStorage.getItem("website-Info"));
    this.websiteBio = websiteInfo.about_us_en;
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  margin-top: 80px;
  .description-photo {
    background-image: url("../assets/images/background.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    height: 90vh;
    position: relative;
    &::before {
      @extend %before;
      background-color: rgba($black, 0.4);
    }
  }
  .about-text {
    padding: 50px 0;
    .title {
      color: $headcolor;
      margin-bottom: 30px;
      font-size: 2rem;
      font-weight: bold;
    }
    .text {
      color: $textcolor;
      line-height: 2;
      font-size: 1rem;
    }
  }
}
</style>
