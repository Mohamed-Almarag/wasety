<template>
  <div class="profile">
    <Loading :loading="loading"></Loading>
    <div class="container">
      <div class="row">
        <div class="user-photos-container col-md-4">
          <div class="user-photo">
            <div class="images w-100 h-100">
              <img
                v-if="imgPreviewUrl"
                class="img w-100 h-100 d-block"
                :src="imgPreviewUrl"
                alt="user-photo"
              />
              <img
                v-if="profileDetails.photo"
                class="img w-100 h-100 d-block"
                :src="profileDetails.photo"
                alt="user-photo"
              />
              <img
                v-if="profileDetails.photo == null"
                class="img w-100 h-100 d-block"
                src="../assets/images/default.png"
                alt="user-photo"
              />
            </div>
            <div
              class="
                change-photos
                w-100
                h-100
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <label class="upload-photo d-block" for="upload-photo"
                ><fa class="icon" icon="camera"
              /></label>
              <input
                @change="handelUploadFileImage($event)"
                class="file-input d-none"
                type="file"
                id="upload-photo"
              />
            </div>
          </div>
          <div class="save-images text-capitalize" v-if="imgPreviewUrl">
            <button @click="ChangeImage" class="save d-block rounded-pill">
              save
            </button>
            <button
              @click="cancelChangeImage"
              class="save cancel d-block rounded-pill"
            >
              cancel
            </button>
          </div>
        </div>

        <div class="all-user-details col-md-8">
          <!-- Start profile name -->
          <div class="profile-name">
            <div class="part-on">
              <div class="user-name">
                <h5 class="full-name text-capitalize">
                  <fa class="icons" icon="user" />{{ fullName }}
                </h5>
                <span @click="showNmaeInput = true" class="d-block edit"
                  ><fa class="icon" icon="pen"
                /></span>
              </div>
            </div>
          </div>
          <transition name="fade">
            <div class="part-two" v-if="showNmaeInput">
              <div class="change-container">
                <input class="d-block input" type="text" v-model="fullName" />
                <div class="buttons">
                  <button
                    class="save-btn d-block text-capitalize rounded-pill"
                    @click="changeProfileName"
                  >
                    save
                  </button>
                  <button
                    @click="showNmaeInput = false"
                    class="save-btn cancel d-block text-capitalize rounded-pill"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </transition>

          <!-- End profile name -->
          <div class="email">
            <span class="d-block"
              ><fa class="icons" icon="envelope" />{{
                profileDetails.email
              }}</span
            >
          </div>

          <div class="profile-name">
            <div class="part-on">
              <div class="user-name">
                <h5 class="full-name text-capitalize">
                  <fa class="icons" icon="phone-alt" />{{
                    profileDetails.phone
                  }}
                </h5>
                <span @click="showPhoneInput = true" class="d-block edit"
                  ><fa class="icon" icon="pen"
                /></span>
              </div>
            </div>
          </div>
          <transition name="fade">
            <div class="part-two" v-if="showPhoneInput">
              <div class="change-container">
                <input
                  class="d-block input"
                  type="text"
                  v-model="profileDetails.phone"
                />
                <div class="buttons">
                  <button
                    class="save-btn d-block text-capitalize rounded-pill"
                    @click="changePhoneNumber"
                  >
                    save
                  </button>
                  <button
                    @click="showPhoneInput = false"
                    class="save-btn cancel d-block text-capitalize rounded-pill"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </transition>

          <div class="email">
            <span class="d-block"
              ><fa class="icons" icon="star" />{{ profileDetails.rate }}</span
            >
          </div>

          <div class="profile-name" v-if="$store.getters.userType == 'dealer'">
            <div class="part-on">
              <div class="user-name">
                <h5 class="full-name text-capitalize">
                  <fa class="icons" icon="dollar-sign" />{{
                    profileDetails.coin_price
                  }}
                </h5>
                <span @click="showCoinPriceInput = true" class="d-block edit"
                  ><fa class="icon" icon="pen"
                /></span>
              </div>
            </div>
          </div>
          <transition name="fade">
            <div class="part-two" v-if="showCoinPriceInput">
              <div class="change-container">
                <input
                  class="d-block input"
                  type="text"
                  v-model="profileDetails.coin_price"
                />
                <div class="buttons">
                  <button
                    class="save-btn d-block text-capitalize rounded-pill"
                    @click="changeCoinPrice"
                  >
                    save
                  </button>
                  <button
                    @click="showCoinPriceInput = false"
                    class="save-btn cancel d-block text-capitalize rounded-pill"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </transition>

          <!-- country and city  -->
          <div class="profile-name">
            <div class="part-on">
              <div class="user-name">
                <h5 class="full-name text-capitalize">
                  <fa class="icons" icon="map-marker-alt" />{{
                    profileDetails.country
                  }}
                </h5>
                <span @click="showCountryInput = true" class="d-block edit"
                  ><fa class="icon" icon="pen"
                /></span>
              </div>
            </div>
          </div>
          <transition name="fade">
            <div class="part-two" v-if="showCountryInput">
              <div class="change-container">
                <div class="form-group">
                  <div class="countries">
                    <select
                      class="select-box"
                      name=""
                      @change="getCountryId($event)"
                    >
                      <option value="choose your country">
                        Choose Your Country
                      </option>
                      <option
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.id"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="buttons">
                  <button
                    class="save-btn d-block text-capitalize rounded-pill"
                    @click="changeCoutry"
                  >
                    save
                  </button>
                  <button
                    @click="showCountryInput = false"
                    class="save-btn cancel d-block text-capitalize rounded-pill"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </transition>
          <!-- country and city  -->
        </div>
        <!-- end  -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      profileDetails: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        bio: "",
        photo: null,
        rate: "",
        coin_price: "",
        country_id: null,
        // city_id: null,
      },
      image: null,
      imgPreviewUrl: null,
      loading: false,
      reader: new FileReader(),
      showNmaeInput: false,
      showCountryInput: false,
      showPhoneInput: false,
      showCoinPriceInput: false,
    };
  },
  created() {
    this.reader.onload = () => {
      this.imgPreviewUrl = this.reader.result;
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    this.profileDetails.photo = userInfo.image;
    this.profileDetails.firstName = userInfo.first_name;
    this.profileDetails.lastName = userInfo.last_name;
    this.profileDetails.email = userInfo.email;
    this.profileDetails.country = userInfo.country;
    this.profileDetails.phone = userInfo.phone;
    this.profileDetails.bio = userInfo.bio;
    this.profileDetails.rate = userInfo.rate;
    this.profileDetails.coin_price = +userInfo.coin_price;
    this.getAllCountries();
  },
  computed: {
    ...mapGetters(["countries", "cities"]),
    fullName: {
      get() {
        return `${this.profileDetails.firstName} ${this.profileDetails.lastName}`;
      },
      set(newValue) {
        const m = newValue.match(/(\S*)\s+(.*)/);

        this.profileDetails.firstName = m[1];
        this.profileDetails.lastName = m[2];
      },
    },
  },
  methods: {
    ...mapActions(["getAllCountries"]),
    handelUploadFileImage(event) {
      this.profileDetails.photo = event.target.files[0];
      this.reader.readAsDataURL(this.profileDetails.photo);
    },
    ChangeImage() {
      this.loading = true;
      let imageSrc = new FormData();
      imageSrc.append("photo", this.profileDetails.photo);
      this.$store
        .dispatch("changeProfileImage", imageSrc)
        .then(() => {
          this.imgPreviewUrl = null;
        })
        .finally(() => {
          window.location.reload();
          this.loading = false;
        });
    },
    cancelChangeImage() {
      this.imgPreviewUrl = null;
      let userInfo = JSON.parse(localStorage.getItem("user-info"));
      this.profileDetails.photo = userInfo.image;
    },
    changeProfileName() {
      this.loading = true;
      let userFullName = new FormData();
      userFullName.append("first_name", this.profileDetails.firstName);
      userFullName.append("last_name", this.profileDetails.lastName);
      this.$store
        .dispatch("changeProfileName", userFullName)
        .then(() => {
          window.location.reload();
        })
        .finally(() => {
          this.showNmaeInput = false;
          this.loading = false;
        });
    },
    changePhoneNumber() {
      this.loading = true;
      let phoneNumber = new FormData();
      phoneNumber.append("phone", this.profileDetails.phone);

      this.$store
        .dispatch("changePhoneNumber", phoneNumber)
        .then(() => {
          window.location.reload();
        })
        .finally(() => {
          this.showPhoneInput = false;
          this.loading = false;
        });
    },
    changeCoinPrice() {
      this.loading = true;
      let coinPrice = new FormData();
      coinPrice.append("coin_price", this.profileDetails.coin_price);
      this.$store
        .dispatch("changeCoinPrice", coinPrice)
        .then(() => {
          window.location.reload();
        })
        .finally(() => {
          this.showCoinPriceInput = false;
          this.loading = false;
        });
    },
    getCountryId(event) {
      this.$store.dispatch("getAllCountries", event.target.value);
      this.profileDetails.country_id = event.target.value;
      console.log(event.target.value);
    },
    changeCoutry() {
      this.loading = true;
      let country = new FormData();
      country.append("country_id", this.profileDetails.country_id);
      this.$store
        .dispatch("changeCoutry", country)
        .then(() => {
          window.location.reload();
          // console.log(this.profileDetails.country_id);
        })
        .finally(() => {
          this.showCountryInput = false;
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  padding: 200px 0 180px;
  .user-photos-container {
    // background-color: #eee;
    padding: 30px 0;
    .user-photo {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      margin: 0 auto 30px;
      &:hover {
        .change-photos {
          transform: scale(1);
        }
        .img {
          transform: scale(1.1);
          // object-fit: cover;
        }
      }
      .images {
        position: relative;
        z-index: 55;
        .img {
          transition: 0.5s;
          border-radius: 50%;
        }
      }
      .change-photos {
        background-color: rgba($black, 0.3);
        position: absolute;
        z-index: 60;
        inset: 0;
        transition: 0.3s;
        color: $white;
        border-radius: 50%;
        transform: scale(0);
        .upload-photo {
          .icon {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding: 8px;
            animation: flashing 1500ms infinite;
          }
          .file-input {
            display: none;
          }
        }
      }
    }
    .save-images {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .save {
        border: none;
        padding: 8px 10px;
        color: $white;
        background-color: $maincolor;
        width: 100px;
        &.cancel {
          background-color: #dc3545;
        }
      }
    }
  }
  @keyframes flashing {
    0% {
      background-color: $maincolor;
      box-shadow: 0 0 3px $maincolor;
    }
    50% {
      background-color: $maincolor;
      box-shadow: 0 0 40px $maincolor;
    }
    100% {
      background-color: $maincolor;
      box-shadow: 0 0 3px $maincolor;
    }
  }
  .all-user-details {
    padding: 20px 10px;
    background-color: #eee;
    border-radius: 10px;
    .part-on {
      .user-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        color: $textcolor;
        .full-name {
          margin: 0;
          color: $textcolor;
        }
        .edit {
          width: 35px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          box-shadow: $box-shadow;
          background-color: $headcolor;
          color: $maincolor;
          cursor: pointer;
          border-radius: 50%;
          transition: 0.5s;
          &:hover {
            background-color: $maincolor;
            color: $white;
          }
          .icon {
          }
        }
      }
    }
    .part-two {
      position: fixed;
      z-index: 9999;
      background-color: transparent;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: circle(100%);
      padding: 10px;
      &.fade-enter,
      &.fade-leave-to {
        clip-path: circle(0);
      }
      &.fade-enter-active,
      &.fade-leave-active {
        transition: clip-path 0.8s ease-in-out;
      }
      .change-container {
        position: relative;
        width: 500px;
        background-color: $white;
        padding: 50px 20px;
        border-radius: 10px;
        box-shadow: $box-shadow;
        .input {
          width: 100%;
          color: $textcolor;
          padding: 7px;
          outline: none;
          margin-bottom: 30px;
          border: 1px solid $bordercolor;
        }
        .buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          .save-btn {
            border: none;
            padding: 8px 10px;
            color: $white;
            background-color: $maincolor;
            width: 100px;
            &.cancel {
              background-color: #dc3545;
            }
          }
        }
      }
    }
  }
}
.icons {
  margin: 0 8px;
  color: $maincolor;
}
.email {
  padding: 10px;
}
.countries,
.citis {
  margin: 15px 0;
  .select-box {
    margin: 0 10px;
    padding: 7px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    &::after {
      display: none;
    }
  }
  option {
    color: $headcolor;
  }
  option:first-child {
    display: none;
  }
}
</style>
