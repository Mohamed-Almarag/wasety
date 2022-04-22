<template>
  <div class="add-offer" v-if="$store.getters.userType == 'dealer'">
    <Loading :loading="loading"></Loading>
    <div class="container">
      <h5 class="main-title">Add Your Offer Now</h5>
      <div class="offer-form">
        <form action="">
          <div
            class="inputs-container d-flex flex-wrap justify-content-between"
          >
            <div class="form-group">
              <label class="d-block label-form" for="">Delivery Term</label>
              <input
                type="text"
                class="input-form"
                v-model="offerDetails.title"
              />
            </div>
            <div class="form-group">
              <label class="d-block label-form" for="">Offer Value</label>
              <div class="input-container">
                <input
                  type="number"
                  class="input-form"
                  v-model="offerDetails.value"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="d-block label-form" for="">Your Dues</label>
              <div class="input-container">
                <input
                  type="number"
                  class="input-form"
                  v-model="offerDetails.dues"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="d-block label-form" for=""
              >Details Of The Transaction</label
            >
            <div class="input-container w-100">
              <textarea
                class="input-form text-area d-block w-100"
                v-model="offerDetails.details"
              ></textarea>
            </div>
          </div>

          <div class="form-group btn-containers text-capitalize d-flex">
            <a @click="addOffer()" class="btn d-block btn_submit">add offer</a>

            <router-link
              :to="{ name: 'Transactions' }"
              class="btn d-block btn_close"
              >Cancel</router-link
            >
          </div>
        </form>
      </div>

      <transition name="fade">
        <ConfirmModal v-if="showConfirm" :showModal="showConfirm">
          <template #message>
            <h5>Congratulations</h5>
            <p>Your deal has been successfully added..</p>
          </template>
          <template #sure>
            <button @click="showConfirmModal" class="btn_submit">show</button>
          </template>
        </ConfirmModal>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOffer",
  data() {
    return {
      showConfirm: false,
      showAddOfferForm: false,
      loading: false,
      offerDetails: {
        title: null,
        value: null,
        dues: null,
        details: null,
        project_id: null,
      },
    };
  },
  methods: {
    addOffer() {
      this.loading = true;
      let formDtat = new FormData();
      formDtat.append("title", this.offerDetails.title);
      formDtat.append("value", this.offerDetails.value);
      formDtat.append("dues", this.offerDetails.dues);
      formDtat.append("details", this.offerDetails.details);
      formDtat.append("project_id", this.$route.params.id);

      this.$store
        .dispatch("addOffer", formDtat)
        .then(() => {
          this.showConfirm = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showConfirmModal() {
      this.showConfirm = !this.showConfirm;
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.add-offer {
  padding: 50px 0;
  .main-title {
    color: $headcolor;
  }
  .offer-form {
    .form-group {
      color: $textcolor;
      margin-bottom: 30px;
      .input-container {
        color: $textcolor;
      }
      .label-form {
        margin: 10px 0;
      }
      .input-form {
        color: $textcolor;
        outline: none;
        border: 1px solid $bordercolor;
        padding: 5px;
        border-radius: 5px;
        width: 100%;
        position: relative;
        transition: 0.5s;
        &:focus {
          border-color: $maincolor;
          box-shadow: 0 1px 12px rgba($maincolor, 0.4);
        }
        &.text-area {
          height: 220px;
          resize: none;
        }
      }
    }
  }
}
.inputs-container {
  gap: 20px;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block !important;
  }
}
.btn-containers {
  gap: 30px;
  .btn {
    width: 170px;
    color: $white;
    padding: 8px 0;
    box-shadow: $box-shadow;
    transition: 0.5s;
    border-radius: 5px;
    &.btn_submit {
      background-color: $maincolor;
      &:hover {
        background-color: $headcolor;
      }
    }
    &.btn_close {
      background-color: $headcolor;
      &:hover {
        background-color: $maincolor;
      }
    }
  }
}
.btn_submit {
  width: 170px;
  color: $white;
  padding: 8px 0;
  box-shadow: $box-shadow;
  transition: 0.5s;
  border-radius: 5px;
  background-color: $maincolor;
  border: none;
  &:hover {
    background-color: $headcolor;
  }
}
.fade-enter,
.fade-leave-to {
  clip-path: circle(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: clip-path 0.8s ease-in-out;
}
</style>
