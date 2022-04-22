<template>
  <div class="all-offers" v-if="offersLength >= 1">
    <div class="container">
      <h5 class="title">Offers Made</h5>
      <div class="offer-box" v-for="offer in offers" :key="offer.id">
        <div class="person-etails d-flex align-items-center">
          <img
            class="d-block offer-img"
            src="../../assets/images/03.png"
            alt=""
          />
          <div class="name">
            <h6>{{ offer.user.first_name }} {{ offer.user.last_name }}</h6>

            <span>seo iqlife</span>
            <span class="d-block">
              <fa icon="star" />
              <span>{{ offer.user.rate }}</span>
            </span>
          </div>
        </div>
        <h6>{{ offer.title }}</h6>
        <p class="offer-text">
          {{ offer.details }}
        </p>
        <div
          class="buttons"
          v-if="
            (projectStatus = 'recieve_offer') &&
            $store.getters.userType == 'customer'
          "
        >
          <button
            @click="acceptOffer(offer.id)"
            class="button-for-offer accept"
          >
            accept
          </button>
          <button class="button-for-offer cancel">cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllOffers",
  data() {
    return {
      allOffers: [],
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    offers() {
      return this.$store.getters.offers;
    },
    offersLength() {
      return this.$store.getters.offersLength;
    },
  },
  mounted() {
    this.$store.dispatch("getAllOffers", this.$route.params.id).then(() => {
      console.log(this.$store.getters.offerId);
      console.log(this.$store.getters.offerId.id);
      console.log(this.$store.getters.offerId.status);
      // this.projectStatus = this.$store.getters.singleProject.status;
    });
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    this.firstName = userInfo.first_name;
    this.lastName = userInfo.last_name;
  },
  methods: {
    acceptOffer(offerId) {
      this.$store
        .dispatch("acceptOffer", { id: offerId, status: "accepted" })
        .then(() => {
          console.log(offerId);
          // console.log(projectStatus);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.all-offers {
  padding: 50px 0;
  .title {
    color: $headcolor;
  }
  .offer-box {
    border-bottom: 1px solid $bordercolor;
    padding-bottom: 30px;
    .person-etails {
      // margin-top: 30px;
      margin: 30px 0;
      gap: 20px;
      .offer-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid $bordercolor;
        transition: 0.3s;
        &:hover {
          transform: rotate(-10deg);
        }
      }
      .name {
        color: $textcolor;
      }
    }
  }
}
.button-for-offer {
  color: $white;
  // position: absolute;
  // right: 30px;
  padding: 10px 50px;
  background-color: $maincolor;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  &.accept {
    background-color: $maincolor;
    &:hover,
    &:focus {
      box-shadow: inset -7em 0 0 0 $textcolor, inset 7em 0 0 0 $textcolor;
      border-color: $textcolor;
    }
  }
  &.cancel {
    margin: 10px;
    background-color: $textcolor;
    &:hover,
    &:focus {
      box-shadow: inset -7em 0 0 0 $maincolor, inset 7em 0 0 0 $maincolor;
      border-color: $maincolor;
    }
  }
}
</style>
