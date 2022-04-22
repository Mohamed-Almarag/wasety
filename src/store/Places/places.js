import { getMethods } from "@/axios/helpers";

const state = {
  countries: [],
  cities: [],
};

const getters = {
  countries: (state) => state.countries,
  cities: (state) => state.cities,
};

const mutations = {
  GET_COUNTRIES(state, country) {
    return (state.countries = country);
  },
  GET_CITIES(state, city) {
    return (state.cities = city);
  },
};

const actions = {
  getAllCountries({ commit }, country_id) {
    getMethods("country", {
      columns: ["active", "country_id"],
      operand: ["=", "="],
      column_values: [1, country_id],
    }).then((response) => {
      commit("GET_COUNTRIES", response.data.data.data);
    });
  },

  getAllCities({ commit }, city_id) {
    getMethods("cities", {
      columns: ["active", "city_id"],
      operand: ["=", "="],
      column_values: [1, city_id],
    }).then((response) => {
      commit("GET_CITIES", response.data.data.data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
