<template>
  <div
    class="
      confim-modal
      text-center
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="content">
      <div class="text">
        <slot name="message"></slot>
      </div>

      <div class="confimation-buttons">
        <slot name="sure"></slot>
        <slot name="cancel"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmModal",
  props: {
    showModal: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.confim-modal {
  position: fixed;
  z-index: 2000;
  inset: 0;
  background-color: rgba($black, 0.3);
  transition: 0.5s;
  clip-path: circle(100%);
  .content {
    background-color: $white;
    width: 40%;
    height: 200px;
    border-radius: 10px;
    .text {
      margin: 50px 0 20px;
    }
  }
}
</style>
