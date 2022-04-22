<template>
  <div class="add-transfer">
    <Loading :loading="loading"></Loading>
    <div class="container">
      <div class="title topanimation" id="title1">
        <div class="container">
          <h3 class="main-title text-capitalize">Start building your Deal</h3>
          <p class="description">
            Start your project on Waseati platform quickly and easily
          </p>
        </div>
      </div>
      <!-- Start Tranfer Form  -->
      <div class="add-tranfer-in-form">
        <div class="row">
          <div class="form-tranfer col-md-7">
            <form>
              <div class="form-group">
                <label class="form-label">Project Title</label>
                <input
                  class="form-input"
                  type="text"
                  name="title"
                  v-model="projectForm.title"
                />
              </div>
              <div class="form-group">
                <label class="form-label">The amount to be transferred</label>
                <input
                  class="form-input"
                  type="number"
                  name="title"
                  v-model="projectForm.amount"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Details of the transaction</label>
                <textarea
                  class="form-input form-textarea"
                  v-model="projectForm.description"
                ></textarea>
              </div>

              <transition name="swip">
                <div class="preview-container" v-if="imagePreview">
                  <img
                    draggable="false"
                    class="preview d-block m-auto"
                    :src="imagePreview"
                    alt="preview"
                  />
                </div>
              </transition>
              <div class="form-group job-imag">
                <label class="form-label d-block text-capitalize"
                  >choose photo</label
                >
                <div class="choose-photo">
                  <label
                    class="
                      upload-photo
                      d-flex
                      justify-content-center
                      align-items-center
                      rounded-circle
                    "
                    for="job-photo"
                    ><fa class="icon" icon="camera"
                  /></label>
                  <input
                    @change="handleImageUpload($event)"
                    class="file-input"
                    type="file"
                    id="job-photo"
                  />
                </div>
              </div>

              <div class="form-group btn-containers text-capitalize d-flex">
                <a @click="addProjects()" class="btn d-block btn_submit"
                  >add deal</a
                >

                <router-link
                  :to="{ name: 'Transactions' }"
                  class="btn d-block btn_close"
                  >Cancel</router-link
                >
              </div>
            </form>
          </div>
          <div class="information col-md-5">
            <div class="content">
              <h4 class="title">Start building your project</h4>
              <p class="text">
                Through Waseati, you can build your project as you want, enter
                the project details and the expected budget, to have your
                project reviewed and published for free on Waseati. After that,
                the best registered brokers will present different offers for
                you to choose the right offer for you and start implementing
                your project.
              </p>
            </div>
            <div class="content">
              <h4 class="title">Start building your project</h4>
              <p class="text">
                Through Waseati, you can build your project as you want, enter
                the project details and the expected budget, to have your
                project reviewed and published for free on Waseati. After that,
                the best registered brokers will present different offers for
                you to choose the right offer for you and start implementing
                your project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End Tranfer Form  -->
      <transition name="fade">
        <ConfirmModal v-if="showConfirm" :showModal="showConfirm">
          <template #message>
            <h5>Congratulations</h5>
            <p>Your project has been successfully added..</p>
          </template>
          <template #sure>
            <button
              @click="showConfirmModal"
              class="congrat-btn text-capitalize"
            >
              show
            </button>
          </template>
        </ConfirmModal>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTransfer",
  data() {
    return {
      projectForm: {
        title: null,
        amount: null,
        description: null,
        img: null,
      },
      imagePreview: null,
      showConfirm: false,
      loading: false,
      reader: new FileReader(),
    };
  },
  created() {
    this.reader.onload = () => {
      this.imagePreview = this.reader.result;
    };
  },
  methods: {
    addProjects() {
      this.loading = true;
      let formDtat = new FormData();
      formDtat.append("title", this.projectForm.title);
      formDtat.append("amount", this.projectForm.amount);
      formDtat.append("description", this.projectForm.description);
      formDtat.append("photo", this.projectForm.img);
      this.$store
        .dispatch("addProjects", formDtat)
        .then(() => {
          this.showConfirm = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleImageUpload(event) {
      this.projectForm.img = event.target.files[0];
      this.reader.readAsDataURL(this.projectForm.img);
    },
    showConfirmModal() {
      this.showConfirm = !this.showConfirm;
      this.$router.push({ name: "Transactions" });
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.add-transfer {
  margin-top: 150px;
  .main-title {
    color: $headcolor;
  }
  .content {
    .title {
      color: $headcolor;
    }
    .text {
      color: $textcolor;
      line-height: 2;
    }
  }
  .description {
    color: $textcolor;
  }
  .form-group {
    margin-bottom: 30px;
    position: relative;
    .form-label {
      display: block;
      color: $textcolor;
    }
    .form-input {
      color: $textcolor;
      width: 100%;
      padding: 7px;
      border: 1px solid $bordercolor;
      outline: none;
      display: block;
      transition: 0.5s;
      &:focus {
        border-color: $maincolor;
        box-shadow: 0 1px 12px rgba($maincolor, 0.4);
      }

      &.file_upload_profile {
        border: none;
      }
    }
    .form-textarea {
      height: 200px;
      resize: none;
    }
    &.btn-containers {
      gap: 30px;
    }
  }
  .btn-containers {
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
  .congrat-btn {
    width: 170px;
    color: $white;
    padding: 8px 0;
    box-shadow: $box-shadow;
    transition: 0.5s;
    background-color: $maincolor;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: $headcolor;
    }
  }
  .information {
    .content {
      margin-bottom: 0px;
      .title {
        color: $headcolor;
        margin-bottom: 15px;
      }
      .text {
        color: $textcolor;
      }
    }
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
.job-imag {
  margin-top: 15px;
  .choose-photo {
    .file-input {
      display: none;
    }
    .upload-photo {
      width: 40px;
      height: 40px;
      background-color: #eee;
      color: $textcolor;
      box-shadow: $box-shadow;
      transition: 0.5s;
      &:hover {
        background-color: $maincolor;
        color: $white;
      }
      .icon {
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
}
.preview-container {
  padding: 30px;
  border-radius: 10px;
  background-color: #eee;
  transition: 0.5s;
  transform: rotateY(0);
  &.swip-enter,
  &.swip-leave-to {
    transform: rotateY(90deg);
  }
  &.swip-enter-active,
  &.swip-leave-active {
    transition: transform 0.8s ease-in-out;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 10px;
  }
  .preview {
    width: 80%;
    border-radius: 10px;
    height: 280px;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>
