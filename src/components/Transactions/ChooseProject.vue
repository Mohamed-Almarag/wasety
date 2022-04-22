<template>
  <div class="singledealer" v-if="show">
    <div class="select-container">
      <select
        class="select-project text-capitalize"
        @change="onChangeMethod($event)"
      >
        <option
          class="options"
          v-for="project in projects"
          :key="project.id"
          :value="project.id"
        >
          <h3>{{ project.title }}</h3>
        </option>
      </select>
      <button class="send text-capitalize" @click="sendHireMe">send</button>
    </div>

    <button class="close text-capitalize" @click="close">
      <fa icon="times-circle" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ChooseProject",
  data() {
    return {
      projectId: 1,
      user_id: "",
    };
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
    show: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onChangeMethod(event) {
      let idofproject = event.target.value;
      this.projectId = idofproject;
      this.user_id = this.$route.query.user.id;
    },
    sendHireMe() {
      this.$store
        .dispatch("hireMe", { id: this.projectId, user_id: this.user_id })
        .then(() => {
          close();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.singledealer {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: $white;
  border: 1px solid $maincolor;
  z-index: 9999999;
  width: 50%;
  height: 50%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  .select-container {
    width: 100%;
  }

  .select-project {
    position: relative;
    padding: 10px;
    width: 50%;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    border: 1px solid $bordercolor;
    // appearance: none;
    // background-color: $white;
    // color: $textcolor;
    // font-weight: bold;
    // padding: 1em;
    // width: 70%;
    // font-family: inherit;
    // font-size: inherit;
    // cursor: inherit;
    // line-height: inherit;
    // text-align: center;
    // border-radius: 5px;
    &::after {
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: $textcolor;
    }
    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
    .options {
      color: $textcolor;
      h3 {
        color: $textcolor;
      }
    }
  }
  .send {
    padding: 10px;
    color: $white;
    background-color: $maincolor;
    border: none;
    border-radius: 10px;
    display: block;
    margin-top: 20px;
    width: 150px;
    margin: 30px auto;
    transition: 0.3s;
    &:hover {
      box-shadow: inset -9em 0 0 0 $textcolor, inset 9em 0 0 0 $textcolor;
    }
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    border: none;
    background-color: $maincolor;
    color: $white;
    border-radius: 5px;
    transition: 0.5s;
    &:hover {
      background-color: red;
    }
  }
}
</style>
