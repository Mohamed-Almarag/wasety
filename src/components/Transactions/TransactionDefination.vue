<template>
  <div class="defination">
    <div class="titles d-flex justify-content-between flex-wrap">
      <h2>Currency Exchange</h2>
      <div class="add-trans">
        <router-link
          v-if="$store.getters.userType == 'customer'"
          class="add-button d-flex align-items-center"
          :to="{ name: 'AddTransfer' }"
        >
          <span class="span-text">Add A Transfer</span></router-link
        >
      </div>
    </div>
    <p>
      <span
        >Exchange Your Currency Faster With Hundreds Of Thousands Interested In
        The Same Thing</span
      >
      <span class="icon"><fa icon="dollar-sign" /></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TransactionDefination",
};
</script>

<style lang="scss" scoped>
.defination {
  color: $textcolor;
  .titles {
    margin-bottom: 30px;
  }
  h2 {
    font-size: 2.4rem;
    color: $headcolor;
    font-weight: bold;
    line-height: 1.5;
    @media (min-width: 320px) and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  p {
    color: $textcolor;
    line-height: 1.7;
    font-size: 1rem;
  }
  .add-trans {
    .add-button {
      transition: 0.5s;
      position: relative;
      text-decoration: none;
      background-color: $maincolor;
      color: $white;

      border-radius: 5px;
      .span-text {
        width: 100%;
        background-color: transparent;
        color: $white;
        border-radius: 25px;
        padding: 7px 10px;
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
    }
  }
  // .add-button {
  //   background-color: $maincolor;
  //   color: $white;
  //   text-decoration: none;
  //   padding: 5px;
  //   border-radius: 5px;
  //   transition: 0.3s;
  //   @media (min-width: 320px) and (max-width: 768px) {
  //     padding: 10px;
  //   }
  //   &:hover,
  //   &:focus {
  //     box-shadow: inset -7em 0 0 0 $textcolor, inset 7em 0 0 0 $textcolor;
  //     border-color: $textcolor;
  //   }
  //   // box-shadow: inset -7em 0 0 0 $textcolor, inset 7em 0 0 0 $textcolor;
  //   .added {
  //     padding: 2px;
  //     border-radius: 50%;
  //     border: 1px solid $white;
  //     line-height: 1;
  //     text-align: center;
  //     font-size: 10px;
  //     margin: 5px;
  //   }
  // }
  .icon {
    color: $ratecolor;
    margin: 5px;
  }
}
</style>
