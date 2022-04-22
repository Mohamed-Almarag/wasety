import { postMethods } from "@/axios/helpers";

const state = {
  user: {},
  success: false,
  signUpErrors: [],
};

const getters = {
  user: (state) => state.user,
  success: (state) => state.success,
  signUpErrors: (state) => state.signUpErrors,
};

const mutations = {
  SET_USER_AUTHENTICATION(state, user) {
    return (state.user = user);
  },
  SUCCESS_AUTHENTICATED(state, success) {
    return (state.success = success);
  },
  SIGN_UP_ERRORS_MESSAGES(state, signUpErrors) {
    return (state.signUpErrors = signUpErrors);
  },
};

const actions = {
  async signUp({ commit }, payload) {
    await postMethods("auth/register", payload)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          commit("SET_USER_AUTHENTICATION", response.data.data.data);
          commit("SUCCESS_AUTHENTICATED", response.data.success);
        }
      })
      .catch((error) => {
        commit("SIGN_UP_ERRORS_MESSAGES", error.response);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
