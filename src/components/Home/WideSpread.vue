<template>
  <section class="widespead">
    <div class="container">
      <div class="row">
        <div class="description col-md-8 col-sm-12">
          <h2 class="main-title">WideSpread</h2>
          <p class="text">
            A new currency in the global market, but it has achieved a wide
            spread. We have dozens of buyers on our platform. Weekly. You can
            exchange it for any other digital currency. Hundreds of sites
            through which you can exchange it or pay it for services.
          </p>
        </div>
        <div class="photo-container col-md-4 col-sm-12">
          <img src="../../assets/images/01.png" alt="widespread" class="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WideSpread",
};
</script>

<style lang="scss" scoped>
.widespead {
  background-color: #01dff6;
  padding: 50px 0;
  .description {
    margin-bottom: 20px;
    .main-title {
      @extend %heading;
      color: $white;
      @media (min-width: 320px) and (max-width: 768px) {
        text-align: center;
      }
    }
    .text {
      @extend %p;
      color: $white;
      @media (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 30px;
        text-align: center;
      }
    }
  }
  .photo-container {
    .img {
      height: 300px;
      width: 100%;
      margin: auto;
      display: block;
      @media (min-width: 320px) and (max-width: 768px) {
        width: 300px;
      }
    }
  }
}
</style>
