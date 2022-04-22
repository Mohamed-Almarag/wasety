<template>
  <div class="registration">
    <Loading :loading="loading"></Loading>
    <h3 class="text-capitalize title text-center">sign up</h3>
    <div class="container">
      <form
        action=""
        class="form-container text-capitalize m-auto"
        @submit.prevent="signUp"
      >
        <div class="full-name">
          <div class="form-group">
            <label class="form-label d-block">first name</label>
            <input
              type="text"
              class="form-input d-block"
              v-model="userData.first_name"
            />
            <div class="validations-errors">
              <span
                v-if="
                  !$v.userData.first_name.required &&
                  $v.userData.first_name.$dirty
                "
                class="text-danger"
                >first name is required!</span
              >
            </div>
          </div>
          <div class="form-group">
            <label class="form-label d-block">last name</label>
            <input
              type="text"
              class="form-input d-block"
              v-model="userData.last_name"
            />
            <div class="validations-errors">
              <span
                v-if="
                  !$v.userData.last_name.required &&
                  $v.userData.last_name.$dirty
                "
                class="text-danger"
                >last name is required!</span
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">email</label>
          <input
            type="text"
            class="form-input d-block"
            v-model="userData.email"
          />
          <div class="validations-errors">
            <span
              v-if="!$v.userData.email.required && $v.userData.email.$dirty"
              class="text-danger"
              >email is required!</span
            >
            <span v-if="!$v.userData.email.email" class="text-danger"
              >write a valid email</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">phone</label>
          <input
            type="text"
            class="form-input d-block"
            v-model="userData.phone"
          />
          <div class="validations-errors">
            <span
              v-if="!$v.userData.phone.required && $v.userData.phone.$dirty"
              class="text-danger"
              >phone is required!</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">password</label>
          <input
            type="password"
            class="form-input password-input d-block"
            v-model="userData.password"
          />
          <fa class="show-password" @click="showAndHidePassword" icon="eye" />
          <div class="validations-errors">
            <span
              v-if="
                !$v.userData.password.required && $v.userData.password.$dirty
              "
              class="text-danger"
              >password is required!</span
            >
            <span v-if="!$v.userData.password.minLength" class="text-danger"
              >Password must be at least
              {{ $v.userData.password.$params.minLength.min }} characters</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">confirm password</label>
          <input
            type="password"
            class="form-input password-input d-block"
            v-model="userData.password_confirmation"
          />
          <fa class="show-password" @click="showAndHidePassword" icon="eye" />
          <div class="validations-errors">
            <span
              v-if="
                !$v.userData.password_confirmation.required &&
                $v.userData.password_confirmation.$dirty
              "
              class="text-danger"
              >confirmation password is required!</span
            >
            <span
              v-if="!$v.userData.password_confirmation.sameAsPassword"
              class="text-danger"
              >confirmation password must be the same password</span
            >
          </div>
        </div>

        <!-- Start User Type Person Or Company -->
        <div class="form-group">
          <label for="" class="form-label">type</label>
          <div class="container-user-type">
            <div class="user-type text-capitalize">
              <input
                @click="showDealerOptions = false"
                type="radio"
                name="usertype"
                class="form-input-radio"
                value="customer"
                v-model="userData.type"
              />
              <label class="user-label" for="customer">customer</label>
            </div>
            <div class="user-type text-capitalize">
              <input
                @click="showDealerOptions = true"
                type="radio"
                name="usertype"
                class="form-input-radio"
                value="dealer"
                v-model="userData.type"
              />
              <label class="user-label" for="dealer ">dealer</label>
            </div>
          </div>
          <div class="validation-errors">
            <span
              v-if="!$v.userData.type.required && $v.userData.type.$dirty"
              class="text-danger"
              >type is required!</span
            >
          </div>
        </div>
        <!-- End User Type Person Or Company -->
        <transition name="moveUp">
          <div class="for-dealer" v-if="showDealerOptions">
            <!-- Start Country And City -->
            <div class="form-group">
              <div class="countries">
                <label for="" class="form-label">Country</label>
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
              <div class="citis">
                <label for="" class="form-label">Citis</label>
                <select class="select-box" name="" @change="getCityId($event)">
                  >
                  <option value="choose your city">Choose Your City</option>
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
                    {{ city.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- End Country And City -->

            <div class="form-group">
              <label class="form-label d-block">coin price</label>
              <input
                type="number"
                class="form-input password-input d-block"
                v-model="userData.coin_price"
              />
            </div>
          </div>
        </transition>

        <button class="submit-form text-capitalize d-block">
          <span class="d-block span-text">sign up</span>
        </button>
      </form>
      <div class="go-to-sign-in text-center">
        <span class="text">Do You Already Have An Account !</span>
        <router-link class="link" :to="{ name: 'SignIn' }">Sign in</router-link>
        <!-- <router-link class="link" :to="{ name: 'SignIn' }">Sign in</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { append_Object_Items_ToFormData } from "@/axios/helpers";
export default {
  name: "SignUp",
  data() {
    return {
      showDealerOptions: false,
      loading: false,
      userData: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
        phone: null,
        type: null,
        country_id: null,
        city_id: null,
        coin_price: null,
      },
    };
  },
  mounted() {
    this.getAllCountries();
    this.getAllCities();
  },
  computed: {
    ...mapGetters(["countries", "cities"]),
  },
  methods: {
    ...mapActions(["getAllCountries", "getAllCities"]),
    signUp() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        this.loading = true;
        if (this.userData.type == "customer") {
          let customerData = new FormData();
          customerData.append("first_name", this.userData.first_name);
          customerData.append("last_name", this.userData.last_name);
          customerData.append("email", this.userData.email);
          customerData.append("password", this.userData.password);
          customerData.append(
            "password_confirmation",
            this.userData.password_confirmation
          );
          customerData.append("phone", this.userData.phone);
          customerData.append("type", this.userData.type);

          this.$store
            .dispatch("signUp", customerData)
            .then(() => {
              this.$router.push({ name: "SignIn" });
            })
            .finally(() => {
              this.loading = true;
            });
        } else {
          let user = append_Object_Items_ToFormData(this.userData);
          this.$store
            .dispatch("signUp", user)
            .then(() => {
              this.$router.push({ name: "SignIn" });
            })
            .finally(() => {
              this.loading = true;
            });
        }
      }
    },
    showAndHidePassword() {
      let passwordInputs = document.querySelectorAll(".password-input");
      passwordInputs.forEach((input) => {
        input.getAttribute("type") == "password"
          ? input.setAttribute("type", "text")
          : input.setAttribute("type", "password");
      });
    },
    getCountryId(event) {
      this.$store.dispatch("getAllCountries", event.target.value);
      this.userData.country_id = event.target.value;
    },
    getCityId(event) {
      this.$store.dispatch("getAllCities", event.target.value);
      this.userData.city_id = event.target.value;
    },
  },
  validations: {
    userData: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
      type: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  padding-top: 120px;
  padding-bottom: 50px;
  .title {
    color: $headcolor;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .form-container {
    width: 100%;
    max-width: 800px;
    .full-name {
      display: flex;
      flex-wrap: wrap;
      gap: 2%;
      .form-group {
        width: calc(98% / 2);
        @media (min-width: 320px) and (max-width: 768px) {
          width: 100%;
        }
      }
    }
    .form-group {
      margin-bottom: 20px;
      position: relative;
      .form-label {
        margin-bottom: 15px;
        color: $textcolor;
      }
      .form-input {
        width: 100%;
        border: 1px solid $bordercolor;
        outline: none;
        padding: 7px;
        color: $textcolor;
        background: transparent;
        transition: 0.3s;
        &:focus {
          border-color: $maincolor;
          box-shadow: 0 1px 12px rgba($maincolor, 0.4);
        }
        // &.password-input {
        // }
      }
      .show-password {
        position: absolute;
        top: 50%;
        right: 10px;
        color: $textcolor;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: $maincolor;
          box-shadow: 0 3px 9px rgba($maincolor, 0.3);
        }
      }
      .validations-errors {
        padding: 10px 0;
      }
    }
    .container-user-type {
      display: flex;
      gap: 30px;
    }
    .user-type {
      color: $textcolor;
      .form-input-radio {
        appearance: none;
        margin: 0;
        background-color: $white;
        cursor: pointer;
        width: 0.9em;
        height: 0.9em;
        border: 2px solid $bordercolor;
        border-radius: 50%;
        transition: 0.5s;
        &:hover,
        &:checked {
          background-color: $maincolor;
          box-shadow: 0 3px 9px rgba($maincolor, 0.3);
          border-color: $maincolor;
        }
      }
      .user-label {
        margin: 0 8px;
      }
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
    .submit-form {
      width: 35vw;
      margin: 40px auto 20px;
      border: none;
      transition: 0.5s;
      position: relative;
      background-color: $maincolor;
      border-radius: 25px;
      padding: 0;
      overflow: hidden;
      .span-text {
        width: 100%;
        background-color: transparent;
        color: $white;
        border-radius: 25px;
        padding: 10px 5px;
        position: relative;
        z-index: 33;
      }
      &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        height: 100%;
        transition: 0.4s;
        background-color: $headcolor;
        width: 100%;
        clip-path: circle(0);
        z-index: 2;
      }
      &:hover {
        &::before {
          clip-path: circle(100%);
        }
      }
      @media (min-width: 320px) and (max-width: 768px) {
        width: 70vw;
      }
    }
  }
  .go-to-sign-in {
    margin-top: 30px;
    .text {
      color: $textcolor;
      line-height: 2;
      font-size: 1rem;
    }
    .link {
      margin: 0 10px;
      text-decoration: none;
      color: $maincolor;
    }
  }
}
.for-dealer {
  overflow: hidden;
}
.moveUp-enter-active {
  animation: moveUp 0.8s ease-in;
}
.moveUp-leave-active {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  0% {
    // opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    // opacity: 0;
  }
}
@keyframes moveUp {
  0% {
    // opacity: 0;
    transform: scale(0);
  }

  100% {
    // opacity: 1;
    transform: scale(1);
  }
}
</style>
