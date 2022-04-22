import { getMethods, postMethods } from "@/axios/helpers";

const state = {
  offers: [],
  offerId: {
    id: "",
    status: "",
  },
  acceptOffer: "",
};

const getters = {
  offers: (state) => state.offers,
  offersLength: (state) => state.offers.length,
  offerId: (state) => state.offerId,
  acceptOffer: (state) => state.acceptOffer,
};

const mutations = {
  ADD_OFFER(state, offer) {
    return (state.offers = offer);
  },

  GET_OFFERS(state, offers) {
    return (state.offers = offers);
  },
  OFFER_ID(state) {
    return state.offerId.id && state.offerId.status;
  },
  ACCEPT_OFFER(state, offerToAccept) {
    return (state.acceptOffer = offerToAccept);
  },
};

const actions = {
  async addOffer({ commit }, offer) {
    await postMethods("offers", offer).then((res) => {
      commit("ADD_OFFER", res);
    });
  },

  getAllOffers({ commit, state }, projectId) {
    getMethods("offers", {
      columns: ["project_id"],
      operand: ["="],
      column_values: [`${projectId}`],
    }).then((response) => {
      commit("GET_OFFERS", response.data.data.data);

      const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            [item[key]]: item,
          };
        }, initialValue);
      };

      let convertedObj = convertArrayToObject(response.data.data.data, "id");

      console.log(convertedObj);

      let offerId = convertedObj[Object.keys(convertedObj)[0]].id;
      let projectStatus =
        convertedObj[Object.keys(convertedObj)[0]].project.status;
      console.log({ offerId, projectStatus });

      state.offerId.id = offerId;
      state.offerId.status = projectStatus;

      commit("OFFER_ID", { offerId, projectStatus });
    });
  },

  acceptOffer({ commit }, payload) {
    postMethods("offers/accept-offer", { payload }).then((res) => {
      commit("ACCEPT_OFFER", res);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
