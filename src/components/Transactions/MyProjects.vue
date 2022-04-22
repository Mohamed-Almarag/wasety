<template>
  <div class="all-projects">
    <Loading :loading="loading"></Loading>
    <div class="content" v-for="project in projects" :key="project.id">
      <div class="row">
        <div class="project-photo col-md-4">
          <img :src="project.image" alt="" class="img w-100" />
        </div>
        <div class="details text-capitalize col-md-8">
          <div class="title-and-delete d-flex justify-content-between">
            <h4 class="title">
              <router-link
                class="add-offer"
                :to="`/transactions/${project.id}`"
                >{{ project.title }}</router-link
              >
            </h4>

            <div class="editing-project">
              <span
                class="edit-delete delete"
                @click="showConfirmModal"
                v-if="$store.getters.userType == 'customer'"
                ><fa icon="trash"
              /></span>

              <router-link
                v-if="$store.getters.userType == 'customer'"
                class="add-offer"
                :to="`/transactions/${project.id}/edit-transfer`"
              >
                <fa icon="edit" />
              </router-link>
              <transition name="fade">
                <ConfirmModal v-if="showConfirm" :showModal="showConfirm">
                  <template #message
                    ><p>are you sure you want delete it?</p></template
                  >
                  <template #sure>
                    <button @click="deleteProjectss(project.id)" class="okay">
                      delete
                    </button>
                  </template>
                  <template #cancel>
                    <button @click="showConfirmModal" class="cancel">
                      cancel
                    </button>
                  </template>
                </ConfirmModal>
              </transition>
            </div>
          </div>
          <div class="person d-flex flex-wrap">
            <h6 v-if="project.user">
              <fa icon="user" /><span class="texts"
                >{{ project.user.first_name }}
                {{ project.user.last_name }}</span
              >
            </h6>
            <p><fa icon="clock" /><span class="texts">Hour Ago</span></p>
          </div>
          <div class="description-text">
            <router-link
              v-if="$store.getters.userType == 'dealer'"
              class="add-offer offer"
              :to="`/transactions/${project.id}`"
              ><fa icon="hand-holding-usd" /><span class="texts"
                >offer</span
              ></router-link
            >

            <p class="text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";
export default {
  name: "MyProjects",
  data() {
    return {
      showConfirm: false,
      loading: false,
    };
  },
  created() {
    this.getProjects();
  },
  computed: {
    ...mapGetters(["projects"]),
  },
  methods: {
    ...mapActions(["getProjects"]),

    deleteProjectss(id) {
      this.loading = true;
      this.$store
        .dispatch("deleteSinglePrject", id)
        .then(() => {
          window.location.reload();
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showConfirmModal() {
      this.showConfirm = !this.showConfirm;
    },
  },
};
</script>

<style lang="scss" scoped>
.all-projects {
  padding: 50px 0;
  .content {
    margin-bottom: 40px;
    .project-photo {
      .img {
        box-shadow: 0 3px 9px rgba($black, 0.2);
        height: 250px;
        border-radius: 10px;
      }
      @media (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    .details {
      .editing-project {
        .okay,
        .cancel {
          background: none;
          border: 1px solid;
          width: 120px;
          padding: 8px;
          border-radius: 5px;
          transition: 0.3s;
          margin: 10px;
          text-transform: capitalize;
          &:hover {
            opacity: 0.7;
          }
        }
        .okay {
          background-color: #dc3545;
          color: $white;
          border-color: #dc3545;
        }
        .cancel {
          background-color: $maincolor;
          color: $white;
          border-color: $maincolor;
        }
      }
      .title-and-delete {
        .title {
          color: $headcolor;
        }
        .edit-delete {
          margin: 5px;
          cursor: pointer;
          color: $textcolor;
          transition: 0.3s;
          &.delete {
            &:hover {
              color: #f00;
            }
          }
          &.edit {
            &:hover {
              color: $maincolor;
            }
          }
        }
      }
      .person {
        margin: 20px 0;
        gap: 30px;
        color: $textcolor;
        h6,
        p {
          margin: 0;
        }
      }
      .texts {
        margin: 8px;
      }
      .add-offer {
        color: $textcolor;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
          color: $maincolor;
        }
        &.offer {
          background-color: rgba(#cee5e7, 0.5);
          padding: 8px 15px;
          color: $maincolor;
          border-radius: 5px;
          &:hover {
            background-color: $maincolor;
            color: $white;
          }
        }
      }
      .description-text {
        color: $textcolor;
        .text {
          margin-top: 15px;
          color: $headcolor;
        }
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
</style>
