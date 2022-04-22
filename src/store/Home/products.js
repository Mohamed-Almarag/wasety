import { getMethods } from "@/axios/helpers";

const state = {
  products: [],
};

const getters = {
  products: (state) => state.products,
};

const mutations = {
  GET_PRODUCTS(state, products) {
    return (state.products = products);
  },
};

const actions = {
  getProducts({ commit }) {
    getMethods("products", { limit: 12 }).then((response) => {
      commit("GET_PRODUCTS", response.data.data.data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
