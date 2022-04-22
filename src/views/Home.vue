<template>
  <div class="home">
    <MainSlider></MainSlider>
    <Products></Products>
    <WideSpread></WideSpread>
    <OurPlatforms></OurPlatforms>
    <RisingRate></RisingRate>
    <SuccessPartners></SuccessPartners>
  </div>  
</template>

<script>
import MainSlider from "@/components/Home/MainSlider.vue";
import Products from "../components/Home/Products.vue";
import WideSpread from "../components/Home/WideSpread.vue";
import OurPlatforms from "../components/Home/OurPlatforms.vue";
import RisingRate from "../components/Home/RisingRate.vue";
import SuccessPartners from "../components/Home/SuccessPartners.vue";
export default {
  name: "Home",
  components: {
    MainSlider,
    Products,
    WideSpread,
    OurPlatforms,
    RisingRate,
    SuccessPartners,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 100px;
}
</style>
