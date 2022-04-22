<template>
  <div class="single-dealer">
    <div class="container">
      <div class="dealer-details">
        <div class="row">
          <div class="dealer-image col-md-4">
            <img
              v-if="singleDealer.image"
              :src="singleDealer.image"
              :alt="singleDealer.first_name"
            />
            <img v-else src="../assets/images/default.png" alt="dealer" />
          </div>
          <div class="col-md-8 dealer-contnet">
            <button
              @click="chooseProjectToHire"
              class="hire-me"
              v-if="$store.getters.userType == 'customer'"
            >
              Hire Me
            </button>
            <div class="parts">
              <h3 class="name text-capitalize">
                <span class="icons"><fa class="icon" icon="user" /></span>
                <span
                  >{{ singleDealer.first_name }}
                  {{ singleDealer.last_name }}</span
                >
              </h3>
            </div>

            <div class="parts">
              <span class="icons"><fa class="icon" icon="dollar-sign" /></span
              ><span>{{ singleDealer.coin_price }}</span>
            </div>

            <div class="parts">
              <span class="icons"><fa class="icon" icon="star" /></span
              ><span>{{ singleDealer.rate }}</span>
            </div>

            <div class="parts">
              <span class="icons"
                ><fa class="icon" icon="map-marker-alt"
              /></span>
              <span>{{ singleDealer.country }} {{ singleDealer.city }}</span>
            </div>
          </div>
        </div>
        <ChooseProject
          :show="showProjects"
          :projects="projects"
          @close="close"
        ></ChooseProject>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseProject from "@/components/Transactions/ChooseProject";
export default {
  name: "Dealers",
  data() {
    return {
      singleDealer: {},
      showProjects: false,
    };
  },
  mounted() {
    this.singleDealer = this.$route.query.user;
    // console.log(this.$route.query);
    // console.log(this.$route.params.item);
    console.log(this.$store.state.getDealerId);
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    projects() {
      return this.$store.getters.projects;
    },
  },
  methods: {
    close() {
      this.showProjects = !this.showProjects;
    },
    chooseProjectToHire() {
      this.$store.dispatch("getProjects").then(() => {
        this.showProjects = true;
      });
    },
  },
  components: {
    ChooseProject,
  },
};
</script>

<style lang="scss" scoped>
.single-dealer {
  padding: 120px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  .dealer-details {
    box-shadow: 0 3px 9px rgba($black, 0.2);
    position: relative;
    text-align: center;
    padding: 40px;
    border-radius: 20px;
    .hire-me {
      color: $white;
      position: absolute;
      right: 20px;
      padding: 10px 30px;
      background-color: $maincolor;
      border: none;
      border-radius: 10px;
      transition: 0.3s;
      &:hover,
      &:focus {
        box-shadow: inset -7em 0 0 0 $textcolor, inset 7em 0 0 0 $textcolor;
      }
    }
    .dealer-image {
      // border: 1px solid #ccc;
      img {
        box-shadow: 0 3px 9px rgba($black, 0.2);
        border-radius: 20px;
        width: 250px;
        height: 280px;
        padding: 4px;
      }
    }
    .dealer-contnet {
      .parts {
        margin-bottom: 30px;
        .name {
          color: $headcolor;
          font-weight: bold;
        }
        .icons {
          .icon {
            margin: 0 8px;
            color: $maincolor;
          }
        }
      }
    }
  }
}
</style>
