<template>
  <div class="single-project">
    <div class="container">
      <h2 class="title">We We Currency Exchange Deal</h2>
      <h4 class="stsus-title">Transaction Status</h4>
      <div class="transactions-status d-flex flex-wrap">
        <div
          class="status"
          v-for="(state, index) in projectStatus"
          :key="index"
        >
          <span class="icons"><fa icon="check" /></span>
          <span class="state">{{ state }}</span>
        </div>
      </div>
      <TransactionsDetails></TransactionsDetails>
      <AddOffer></AddOffer>
      <AllOffers></AllOffers>
    </div>
  </div>
</template>

<script>
import TransactionsDetails from "@/components/Transactions/TransactionsDetails.vue";
import AddOffer from "@/components/Transactions/AddOffer.vue";
import AllOffers from "@/components/Transactions/AllOffers.vue";

export default {
  name: "SingleProject",
  data() {
    return {
      projectStatus: [
        "pending",
        "recieve_offer",
        "implementation",
        "delivery",
        "completed",
        "canceld",
        "rejected",
      ],
    };
  },
  components: { TransactionsDetails, AddOffer, AllOffers },
};
</script>

<style lang="scss" scoped>
.single-project {
  margin-top: 120px;
  .title {
    color: $headcolor;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 30px;
  }
  .stsus-title {
    color: $headcolor;
    margin-bottom: 20px;
  }
  .transactions-status {
    gap: 30px;
    color: $textcolor;
    @media (min-width: 320px) and (max-width: 420px) {
      gap: 20px;
    }
    .status {
      .icons {
        border: 1px solid $bordercolor;
        background-color: $bordercolor;
        color: $white;
        width: 30px;
        height: 30px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        line-height: 2;
      }
      .state {
        margin: 2px 7px;
      }
    }
  }
}
</style>
