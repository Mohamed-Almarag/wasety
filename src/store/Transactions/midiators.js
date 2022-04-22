import { getMethods, postMethods } from "@/axios/helpers";

const state = {
  users: [],
  singleMidiator: {},
  hireMe: "",
  getDealerId: "",
};

const getters = {
  users: (state) => state.users,
  singleMidiator: (state) => state.singleMidiator,
  hireMe: (state) => state.hireMe,
  getDealerId: (state) => state.getDealerId,
};

const mutations = {
  GET_USERS(state, users) {
    return (state.users = users);
  },
  GET_SINGLE_MIDIATOR(state, singleMidiator) {
    return (state.singleMidiator = singleMidiator);
  },
  HIRE_ME(state, hireMe) {
    return (state.hireMe = hireMe);
  },
};

const actions = {
  getUsers({ commit }) {
    getMethods("users", {
      limit: 20,
      columns: ["type"],
      operand: ["="],
      column_values: ["dealer"],
    }).then((response) => {
      commit("GET_USERS", response.data.data.data);
    });
  },
  getSingleMidiator({ commit }, midiatorId) {
    getMethods(`user/${midiatorId}`).then((response) => {
      commit("GET_SINGLE_MIDIATOR", response.data.data.data);
    });
  },
  hireMe({ commit }, payload) {
    postMethods("offers/hire", payload).then((response) => {
      commit("HIRE_ME", response.data.data.data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
