<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row">
        <div class="logo col-lg-2 col-md-6 col-sm-12 d-flex align-items-center">
          <img
            class="img-logo"
            v-if="wasetyInfo.logo_en"
            :src="wasetyInfo.logo_en"
            alt="logo"
          />
        </div>
        <!-- Social Media And Payments -->
        <div class="social-media col-sm-12 col-md-6 col-lg-4">
          <h6 class="title">FOLLOW US</h6>
          <ul class="list-unstyled icons-list d-flex">
            <li class="items">
              <a class="link" :href="wasetyInfo.fb_link"
                ><fa class="icon" :icon="['fab', 'facebook']"
              /></a>
            </li>
            <li class="items">
              <a class="link" :href="wasetyInfo.twitter_link"
                ><fa class="icon" :icon="['fab', 'twitter']"
              /></a>
            </li>
            <li class="items">
              <a class="link" :href="wasetyInfo.linked_link"
                ><fa class="icon" :icon="['fab', 'linkedin-in']"
              /></a>
            </li>
            <li class="items">
              <a class="link" :href="wasetyInfo.instagram_link"
                ><fa class="icon" :icon="['fab', 'instagram']"
              /></a>
            </li>
            <li class="items">
              <a class="link" :href="'telwasetyInfo.phone'"
                ><fa class="icon" icon="phone-alt"
              /></a>
            </li>
          </ul>
          <div class="payments">
            <h6 class="title">Payment Methods Available</h6>
            <ul class="list-unstyled payment-list d-flex">
              <li class="every-pay">
                <a class="links" href=""
                  ><fa class="icon" icon="credit-card"
                /></a>
              </li>
              <li class="every-pay">
                <a class="links" href=""
                  ><fa class="icon" icon="credit-card"
                /></a>
              </li>
              <li class="every-pay">
                <a class="links" href=""
                  ><fa class="icon" icon="credit-card"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Social Media And Payments -->
        <div class="privacy col-sm-12 col-md-6">
          <h6 class="title">links</h6>
          <ul
            class="
              privacy-links
              list-unstyled
              d-flex
              flex-wrap
              justify-content-between
            "
          >
            <li>
              <a class="help-link" href="">Help Center</a>
            </li>
            <li>
              <a class="help-link" href="">Terms of use</a>
            </li>
            <li>
              <a class="help-link" href="">Privacy Statement</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      wasetyInfo: "{}",
      website_name_en: "",
      website_name_ar: "",
      secodary_color: "",
      logo_en: "",
      logo_ar: "",
      email: "",
      phone: "",
      address: "",
      fb_link: "",
      twitter_link: "",
      linked_link: "",
      instagram_link: "",
      bio_en: "",
      bio_ar: "",
      about_us_en: "",
      about_us_ar: "",
    };
  },
  mounted() {
    let websiteInfo = JSON.parse(localStorage.getItem("website-Info"));
    this.wasetyInfo = { ...websiteInfo };
  },
};
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: $maincolor;
  color: $headcolor;
  padding: 50px 0;

  .logo {
    padding: 10px 0;
    .img-logo {
      display: block;
      width: 100px;
      height: 100px;
      background-color: $white;
      border-radius: 10px;
      padding: 10px;
      @media (min-width: 320px) and(max-width:767px) {
        // display: block !important;
        margin: auto;
      }
    }
  }
  .title {
    color: $headcolor;
    margin-bottom: 15px;
  }
  .icon {
    color: $maincolor;
    background-color: $headcolor;
    border-radius: 50%;
    padding: 7px;
    width: 30px;
    height: 30px;
    transition: 0.5s;
    &:hover {
      transform: rotate(-45deg);
      background-color: $white;
    }
  }
  .social-media {
    padding: 10px 0;
    @media (min-width: 320px) and(max-width:767px) {
      text-align: center;
    }
    .icons-list {
      gap: 30px;
      margin-bottom: 40px;
      @media (min-width: 320px) and(max-width:767px) {
        justify-content: center;
      }
    }
  }
  .payments {
    @media (min-width: 320px) and(max-width:767px) {
      text-align: center;
    }
    .payment-list {
      gap: 30px;
      @media (min-width: 320px) and(max-width:767px) {
        justify-content: center;
      }
    }
  }
  .privacy {
    @media (min-width: 320px) and(max-width:767px) {
      text-align: center;
    }
    .privacy-links {
      .help-link {
        text-decoration: none;
        color: $white;
        padding: 5px 0;
      }
    }
  }
}
</style>
