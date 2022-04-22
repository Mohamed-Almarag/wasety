<template>
  <div class="registration">
    <Loading :loading="loading"></Loading>
    <h3 class="text-capitalize title text-center">sign in</h3>
    <div class="container">
      <form
        action=""
        @submit.prevent="signIn"
        class="form-container text-capitalize m-auto"
      >
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

        <button class="submit-form text-capitalize d-block">
          <span class="d-block span-text">sign in</span>
        </button>
      </form>
      <div class="go-to-sign-in text-center">
        <span class="text">Did You Forgot Your Password !</span>
        <router-link class="link" :to="{ name: 'ForgetPassword' }"
          >ForgetPassword</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { append_Object_Items_ToFormData } from "@/axios/helpers";
export default {
  name: "SignIn",
  data() {
    return {
      loading: false,
      userData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    signIn() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        this.loading = true;
        let user = append_Object_Items_ToFormData(this.userData);
        this.$store
          .dispatch("signIn", user)
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .finally(() => {
            window.location.reload();
            this.loading = false;
          });
      }
    },
    showAndHidePassword() {
      let passwordInput = document.querySelector(".password-input");
      if (passwordInput.getAttribute("type") == "password") {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
    },
  },
  validations: {
    userData: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  padding-top: 130px;
  padding-bottom: 70px;
  .title {
    color: $headcolor;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .form-container {
    width: 100%;
    max-width: 800px;
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
</style>
