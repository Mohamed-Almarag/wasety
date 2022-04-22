import { postMethods } from "@/axios/helpers";

const state = {
  image: "",
  userName: "",
  phone: "",
  coinPrice: "",
  country: "",
};

const getters = {
  image: (state) => state.image,
  userName: (state) => state.userName,
  phone: (state) => state.phone,
  coinPrice: (state) => state.coinPrice,
  country: (state) => state.country,
};

const mutations = {
  CHANGE_PROFILE_IMAGE(state, image) {
    return (state.image = image);
  },
  CHANGE_USER_NAME(state, userName) {
    return (state.userName = userName);
  },
  CHANGE_PHONE_NUMBER(state, phone) {
    return (state.phone = phone);
  },
  CHANGE_COIN_PRICE(state, phone) {
    return (state.phone = phone);
  },
  CHANGE_COUNTRY(state, country) {
    return (state.country = country);
  },
};

const actions = {
  async changeProfileImage({ commit }, image) {
    let userId = JSON.parse(localStorage.getItem("user-info")).id;

    return await postMethods(`profileImage/${userId}`, image).then(
      (response) => {
        let userInfo = JSON.parse(localStorage.getItem("user-info"));
        let newUserInfoDetails = Object.assign({}, userInfo, {
          image: response.data.data.image,
        });

        localStorage.setItem("user-info", JSON.stringify(newUserInfoDetails));

        commit("CHANGE_PROFILE_IMAGE", response.data.data.image);
      }
    );
  },

  async changeProfileName({ commit }, userName) {
    return await postMethods("profile", userName).then((response) => {
      console.log(response.data.data.last_name);
      let userInfo = JSON.parse(localStorage.getItem("user-info"));
      let newUserInfoDetails = Object.assign({}, userInfo, {
        last_name: response.data.data.last_name,
        first_name: response.data.data.first_name,
      });

      localStorage.setItem("user-info", JSON.stringify(newUserInfoDetails));

      commit("CHANGE_USER_NAME", response.data.data);
    });
  },
  changePhoneNumber({ commit }, phone) {
    return postMethods("profile", phone).then((response) => {
      let userInfo = JSON.parse(localStorage.getItem("user-info"));
      let newUserInfoDetails = Object.assign({}, userInfo, {
        phone: response.data.data.phone,
      });

      localStorage.setItem("user-info", JSON.stringify(newUserInfoDetails));

      commit("CHANGE_PHONE_NUMBER", response.data.data);
    });
  },
  changeCoinPrice({ commit }, coinPrice) {
    return postMethods("profile", coinPrice).then((response) => {
      let userInfo = JSON.parse(localStorage.getItem("user-info"));
      let newUserInfoDetails = Object.assign({}, userInfo, {
        coin_price: response.data.data.coin_price,
      });

      localStorage.setItem("user-info", JSON.stringify(newUserInfoDetails));

      commit("CHANGE_COIN_PRICE", response.data.data);
    });
  },
  changeCoutry({ commit }, country) {
    return postMethods("profile", country).then((response) => {
      let userInfo = JSON.parse(localStorage.getItem("user-info"));
      let newUserInfoDetails = Object.assign({}, userInfo, {
        country: response.data.data.country,
      });

      localStorage.setItem("user-info", JSON.stringify(newUserInfoDetails));

      commit("CHANGE_COUNTRY", response.data.data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
