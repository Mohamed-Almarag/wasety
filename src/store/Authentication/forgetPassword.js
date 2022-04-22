import { postMethods } from "@/axios/helpers";

const state = {
  email: "",
};

const getters = {};

const mutations = {
  USER_EMAIL(state) {
    return state.email;
  },
};

const actions = {
  async forgetPassword({ commit }, email) {
    await postMethods("auth/forgot", email).then((response) => {
      commit("USER_EMAIL", response);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
