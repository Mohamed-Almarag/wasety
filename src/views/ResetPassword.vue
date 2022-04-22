<template>
  <div class="registration">
    <Loading :loading="loading"></Loading>
    <h3 class="text-capitalize title text-center">reset Password</h3>

    <div class="container">
      <form
        action=""
        @submit.prevent="resetPassword"
        class="form-container text-capitalize m-auto"
      >
        <div class="form-group">
          <label class="form-label d-block">code</label>
          <input type="text" class="form-input d-block" v-model="reset_code" />
          <div class="validations-errors">
            <span
              v-if="!$v.reset_code.required && $v.reset_code.$dirty"
              class="text-danger"
              >reset code is required!</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">password</label>
          <input
            type="password"
            class="form-input password-input d-block"
            v-model="password"
          />
          <fa class="show-password" @click="showAndHidePassword" icon="eye" />
          <div class="validations-errors">
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-danger"
              >password is required!</span
            >
            <span v-if="!$v.password.minLength" class="text-danger"
              >Password must be at least
              {{ $v.password.$params.minLength.min }} characters</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">confirm password</label>
          <input
            type="password"
            class="form-input password-input d-block"
            v-model="password_confirmation"
          />
          <fa class="show-password" @click="showAndHidePassword" icon="eye" />
          <div class="validations-errors">
            <span
              v-if="
                !$v.password_confirmation.required &&
                $v.password_confirmation.$dirty
              "
              class="text-danger"
              >confirmation password is required!</span
            >
            <span
              v-if="!$v.password_confirmation.sameAsPassword"
              class="text-danger"
              >confirmation password must be the same password</span
            >
          </div>
        </div>

        <button class="submit-form text-capitalize d-block">
          <span class="d-block span-text">change</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "ResetPassword",
  data() {
    return {
      loading: false,
      reset_code: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    resetPassword() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        this.loading = true;
        let payload = {
          reset_code: this.reset_code,
          password: this.password,
          password_confirmation: this.password_confirmation,
        };
        this.$store
          .dispatch("resetPassword", payload)
          .then(() => {
            this.$router.push({ name: "SignIn" });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    // resetPassword() {
    //   this.$store
    //     .dispatch("resetPassword", {
    //       reset_code: this.reset_code,
    //       password: this.password,
    //       password_confirmation: this.password_confirmation,
    //     })
    //     .then(() => {
    //       this.$router.push({ name: "SignIn" });
    //     });
    // },
    showAndHidePassword() {
      let passwordInputs = document.querySelectorAll(".password-input");
      passwordInputs.forEach((input) => {
        input.getAttribute("type") == "password"
          ? input.setAttribute("type", "text")
          : input.setAttribute("type", "password");
      });
    },
  },
  validations: {
    reset_code: {
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
}
</style>
