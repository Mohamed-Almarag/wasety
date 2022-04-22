<template>
  <div class="transactions">
    <div class="container">
      <TransactionDefination></TransactionDefination>
      <div class="tabs-button d-flex justify-content-between">
        <button
          :class="['every-tab', { active: activeComponent == 'MyProjects' }]"
          @click="activeComponent = 'MyProjects'"
        >
          <span class="icons"><fa icon="hand-rock" /></span>
          <span class="title">MyProjects</span>
        </button>
        <button
          :class="['every-tab', { active: activeComponent == 'Midiators' }]"
          @click="activeComponent = 'Midiators'"
        >
          <span class="icons"><fa icon="handshake" /></span>
          <span class="title">Midiators</span>
        </button>
      </div>
      <div class="show-active-component">
        <transition name="fadeIn">
          <component :is="activeComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionDefination from "@/components/Transactions/TransactionDefination.vue";
import MyProjects from "@/components/Transactions/MyProjects.vue";
import Midiators from "@/components/Transactions/Midiators.vue";
export default {
  name: "Transactions",
  data() {
    return {
      activeComponent: "MyProjects",
    };
  },
  components: {
    TransactionDefination,
    MyProjects,
    Midiators,
  },
};
</script>

<style lang="scss" scoped>
.transactions {
  margin-top: 120px;
  .tabs-button {
    width: 50%;
    margin: 30px 0;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }
    .every-tab {
      color: $textcolor;
      border: none;
      border-bottom: 2px solid transparent;
      background: none;
      transition: 0.3s;
      font-weight: bold;
      &.active,
      &:hover {
        color: $maincolor;
        border-bottom-color: $maincolor;
      }
      .title {
        margin: 0 1px;
      }
      .icons {
        padding: 4px 8px;
      }
    }
  }
}
.fadeIn-enter-active {
  animation: fadeIn 0.8s ease-in;
}
@keyframes fadeIn {
  0% {
    clip-path: circle(0);
  }

  100% {
    clip-path: circle(100%);
  }
}
</style>
