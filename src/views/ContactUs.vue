<template>
  <div class="registration">
    <Loading :loading="loading"></Loading>
    <h3 class="text-capitalize title text-center">Contact Us</h3>
    <div class="container">
      <form
        action=""
        @submit.prevent="sendContactMessage"
        class="form-container text-capitalize m-auto"
      >
        <div class="form-group">
          <label class="form-label d-block">name</label>
          <input
            type="text"
            class="form-input d-block"
            v-model="contactMessage.name"
          />
          <div class="validations-errors">
            <span
              v-if="
                !$v.contactMessage.name.required &&
                $v.contactMessage.name.$dirty
              "
              class="text-danger"
              >name is required!</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">email</label>
          <input
            type="text"
            class="form-input d-block"
            v-model="contactMessage.email"
          />
          <div class="validations-errors">
            <span
              v-if="
                !$v.contactMessage.email.required &&
                $v.contactMessage.email.$dirty
              "
              class="text-danger"
              >email is required!</span
            >
            <span v-if="!$v.contactMessage.email.email" class="text-danger"
              >write a valid email</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">Subject</label>
          <input
            type="text"
            class="form-input d-block"
            v-model="contactMessage.subject"
          />
          <div class="validations-errors">
            <span
              v-if="
                !$v.contactMessage.subject.required &&
                $v.contactMessage.subject.$dirty
              "
              class="text-danger"
              >subject is required!</span
            >
          </div>
        </div>

        <div class="form-group">
          <label class="form-label d-block">message</label>
          <textarea
            class="form-input text-area d-block"
            v-model="contactMessage.message"
          ></textarea>
          <div class="validations-errors">
            <span
              v-if="
                !$v.contactMessage.message.required &&
                $v.contactMessage.message.$dirty
              "
              class="text-danger"
              >message is required!</span
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
import { append_Object_Items_ToFormData } from "@/axios/helpers";
export default {
  name: "ContactUs",
  data() {
    return {
      loading: false,
      contactMessage: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendContactMessage() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        this.loading = true;
        let userMessage = append_Object_Items_ToFormData(this.contactMessage);
        this.$store
          .dispatch("sendContactMessage", userMessage)
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .finally(() => {
            window.location.reload();
            this.loading = false;
          });
      }
    },
  },
  validations: {
    contactMessage: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      message: {
        required,
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
        &.text-area {
          height: 250px;
          resize: none;
        }
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
