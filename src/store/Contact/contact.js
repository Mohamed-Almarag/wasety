import { postMethods } from "@/axios/helpers";

const state = {
  messages: [],
};

const getters = {
  messages: (state) => state.messages,
};

const mutations = {
  ADD_MESSAGE(state, message) {
    return (state.messages = message);
  },
};

const actions = {
  async sendContactMessage({ commit }, payload) {
    await postMethods("contacts", payload).then((res) => {
      commit("ADD_MESSAGE", res);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
