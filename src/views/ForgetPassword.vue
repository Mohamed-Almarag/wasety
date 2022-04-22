<template>
  <div class="registration">
    <Loading :loading="loading"></Loading>
    <h3 class="text-capitalize title text-center">forget Password</h3>

    <div class="container">
      <form
        action=""
        @submit.prevent="forgetPassword"
        class="form-container text-capitalize m-auto"
      >
        <div class="form-group">
          <label class="form-label d-block">email</label>
          <input type="text" class="form-input d-block" v-model="email" />
          <div class="validations-errors">
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-danger"
              >email is required!</span
            >
            <span v-if="!$v.email.email" class="text-danger"
              >write a valid email</span
            >
          </div>
        </div>
        <button class="submit-form text-capitalize d-block">
          <span class="d-block span-text">send</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "ForgetPassword",
  data() {
    return {
      loading: false,
      email: "",
    };
  },
  methods: {
    forgetPassword() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        this.loading = true;
        this.$store
          .dispatch("forgetPassword", { email: this.email })
          .then(() => {
            this.$router.push({ name: "CheckCode" });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    // forgetPassword() {
    //   this.$store.dispatch("forgetPassword", { email: this.email }).then(() => {
    //     this.$router.push({ name: "CheckCode" });
    //   });
    // },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  padding-top: 220px;
  padding-bottom: 135px;

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
