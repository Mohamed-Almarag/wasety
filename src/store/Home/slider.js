import { getMethods } from "@/axios/helpers";

const state = {
  sliders: [],
  partners: [],
};

const getters = {
  sliders: (state) => state.sliders,
  partners: (state) => state.partners,
};

const mutations = {};

const actions = {
  getSliderContent() {
    getMethods("slider").then((response) => {
      state.sliders = response.data.data.data;
    });
  },
  getPartners() {
    getMethods("partners").then((response) => {
      state.partners = response.data.data.data;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
