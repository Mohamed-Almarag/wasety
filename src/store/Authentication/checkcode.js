import { postMethods } from "@/axios/helpers";

const state = {
  email: "",
  code: "",
};

const getters = {};

const mutations = {
  CHECK_CODE(state) {
    return state.email && state.code;
  },
};

const actions = {
  async checkCode({ commit }, payload) {
    await postMethods("auth/checkcode", payload).then((response) => {
      commit("CHECK_CODE", response);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
