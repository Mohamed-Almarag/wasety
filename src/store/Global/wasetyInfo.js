import axios from "axios";

const state = {
  infos: {},
};

const getters = {
  infos: (state) => state.infos,
};

const mutations = {
  // GET_SLIDER_IMAGES(state, data) {
  //   return (state.images = data);
  // },
  // GET_CATEGORIES(state, data) {
  //   return (state.categories = data);
  // },
};

const actions = {
  getInfoContent() {
    return axios
      .get(this.$API_URL+"info")
      .then((response) => {
        state.infos = response.data.data;
        // console.log(response.data.data.data);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
