<template>
  <div class="edit-transfer">
    <Loading :loading="loading"></Loading>
    <div class="container">
      <div class="add-tranfer-in-form">
        <div class="form-tranfer">
          <form>
            <div class="form-group">
              <label class="form-label">Project Title</label>
              <input
                class="form-input"
                type="text"
                name="title"
                placeholder="Project Title"
                v-model="projectForm.title"
              />
            </div>
            <div class="form-group">
              <label class="form-label">The amount to be transferred</label>
              <input
                class="form-input"
                type="number"
                name="title"
                placeholder="The amount to be transferred"
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
              <a @click="editProjects()" class="btn d-block btn_submit">Edit</a>
              <router-link
                :to="{ name: 'Transactions' }"
                class="btn d-block btn_close"
                >Cancel</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTransfer",
  data() {
    return {
      projectForm: {
        title: "",
        amount: "",
        description: "",
        _method: "PUT",
        photo: "",
      },
      loading: false,
      imagePreview: null,
      reader: new FileReader(),
    };
  },
  created() {
    this.reader.onload = () => {
      this.imagePreview = this.reader.result;
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.$store.dispatch("getProjectToEdit", this.projectId).then((project) => {
      this.projectForm.title = project.title;
      this.projectForm.amount = +project.amount;
      this.projectForm.description = project.description;
      this.projectForm.photo = project.image;
    });
  },
  methods: {
    editProjects() {
      this.loading = true;
      let formData = new FormData();
      formData.append("title", this.projectForm.title);
      formData.append("amount", +this.projectForm.amount);
      formData.append("description", this.projectForm.description);
      formData.append("_method", this.projectForm._method);
      formData.append("photo", this.projectForm.photo);
      const payload = { formData: formData, id: this.projectId };

      this.$store
        .dispatch("editProject", payload)
        .then(() => {
          this.$router.push({ name: "Transactions" });
        })
        .finally(() => {
          window.location.reload();
          this.loading = false;
        });
    },
    handleImageUpload(event) {
      this.projectForm.photo = event.target.files[0];
      this.reader.readAsDataURL(this.projectForm.photo);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-transfer {
  padding: 120px 0 50px;
  .main-title {
    color: $headcolor;
  }
  .description {
    color: $textcolor;
  }
  .form-group {
    margin-bottom: 30px;
    position: relative;
    .form-label {
      display: block;
    }
    .form-input {
      color: $textcolor;
      width: 70%;
      padding: 7px;
      border: 1px solid $bordercolor;
      outline: none;
      display: block;
      transition: 0.5s;
      &:focus {
        border-color: $maincolor;
        box-shadow: 0 1px 12px rgba($maincolor, 0.4);
      }
      @media (min-width: 320px) and (max-width: 767px) {
        width: 100%;
      }
    }
    .form-textarea {
      height: 200px;
      resize: none;
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
    width: 70%;
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
      width: 100%;
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
}
</style>
