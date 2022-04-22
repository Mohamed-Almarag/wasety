<template>
  <div class="project-details text-capitalize" v-if="singleProject">
    <div class="row">
      <div class="description col-md-7">
        <h6 class="titles">Project Details</h6>
        <p>{{ singleProject.description }}</p>
      </div>

      <div class="transactions-details col-md-5">
        <h6 class="titles">Details of the transaction</h6>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Project title</span>
          <span class="d-block two">{{ singleProject.title }}</span>
        </div>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Project state</span>
          <span class="d-block two">{{ singleProject.status }}</span>
        </div>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Date Of Publication</span>
          <span class="d-block two">Hour Ago</span>
        </div>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Currency Value</span>
          <span class="d-block two">{{ singleProject.amount }} we we </span>
        </div>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Average Offers</span>
          <span class="d-block two">{{ singleProject.amount }} we we </span>
        </div>

        <div class="details d-flex justify-content-between state">
          <span class="d-block one">Number Of Offers</span>
          <span class="d-block two">{{ singleProject.amount }} we we </span>
        </div>

        <div class="details person d-flex justify-content-between state">
          <img
            class="d-block photo"
            :src="singleProject.image"
            :alt="singleProject.title"
          />
          <span class="d-block name"
            >{{ singleProject.user.first_name }}
            {{ singleProject.user.last_name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionsDetails",
  data() {
    return {
      user: {},
    };
  },

  computed: {
    singleProject() {
      return this.$store.getters.singleProject;
    },
    // fullName() {
    //   return this.user.first_name + this.user.last_name;
    // },
  },
  mounted() {
    this.$store.dispatch("getSingleProject", this.$route.params.id).then(() => {
      console.log("done");
      // console.log(this.singleProject);
      // console.log(this.$store.getters.singleProject.status);
    });
  },
};
</script>

<style lang="scss" scoped>
.project-details {
  padding: 50px 0;
  .titles {
    color: $textcolor;
    margin-bottom: 30px;
  }
  .transactions-details {
    .details {
      margin-bottom: 20px;

      .one {
        color: $textcolor;
      }
      .two {
        color: $headcolor;
        font-weight: bold;
      }
      &.person {
        align-items: center;
        justify-content: normal !important;
        gap: 20px;
      }
      &.person {
        justify-content: normal !important;
        gap: 20px;
        align-items: center;
      }
      .photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: 0 3px 9px rgba($black, 0.2);
        border: 1px solid $bordercolor;
        padding: 2px;
      }
      .name {
        color: $headcolor;
        font-weight: bold;
      }
    }
  }
}
</style>
