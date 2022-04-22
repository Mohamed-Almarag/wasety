import { postMethods } from "@/axios/helpers";

const state = {
  user: {},
  userInfo: localStorage.getItem("user-info"),
  token: localStorage.getItem("token"),
};

const getters = {
  token: (state) => state.token,
  userInfo: (state) => state.userInfo,
};

const mutations = {
  SIGNIN_USER(state, user) {
    return (state.user = user);
  },
  LOG_OUT(state) {
    return state.token == null && state.userInfo == {};
  },
};

const actions = {
  async signIn({ commit }, user) {
    return await postMethods("auth/login", user).then((response) => {
      console.log(response);
      let userInfo = response.data.user;
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user-info", JSON.stringify(userInfo));
      console.log(userInfo);
      commit("SIGNIN_USER", response);
    });
  },

  logout({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
    commit("LOG_OUT");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
