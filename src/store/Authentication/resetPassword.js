import { postMethods } from "@/axios/helpers";

const state = {
  resetCode: "",
  password: "",
  passwordConfirmation: "",
};

const getters = {};

const mutations = {
  RESET_PASSWORD(state) {
    return state.resetCode && state.password && state.passwordConfirmation;
  },
};

const actions = {
  async resetPassword({ commit }, payload) {
    await postMethods("auth/reset", payload).then((response) => {
      commit("RESET_PASSWORD", response);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
