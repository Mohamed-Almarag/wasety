<template>
  <div class="rising-rate text-center">
    <div class="container">
      <h2>RisingRate</h2>
      <p>
        A currency that continues to rise continuously in the currency market
      </p>
      <div class="years-rate text-center">
        <div class="every-year">
          <img src="@/assets/images/02.png" alt="" class="d-block w-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RisingRate",
};
</script>

<style lang="scss" scoped>
.rising-rate {
  padding: 50px 0;
  h2 {
    @extend %heading;
  }
  p {
    line-height: 1.7;
    font-size: 1rem;
    color: $textcolor;
  }
  .years-rate {
    margin-top: 30px;

    .every-year {
      overflow: hidden;
      .progress {
        color: $textcolor;
      }
    }
  }
}
</style>
