import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import places from "./Places/places";
import slider from "./Home/slider";
import products from "./Home/products";
import wasetyInfo from "./Global/wasetyInfo";
import projects from "./Transactions/projects";
import midiators from "./Transactions/midiators";
import offers from "./Transactions/offers";
import notifications from "./Transactions/notifications";
import contact from "./Contact/contact";
import signIn from "./Authentication/signIn";
import signUp from "./Authentication/signUp";
import forgetPassword from "./Authentication/forgetPassword";
import checkcode from "./Authentication/checkcode";
import resetPassword from "./Authentication/resetPassword";
import profile from "./ProfilePage/profile";

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},
  modules: {
    places,
    slider,
    wasetyInfo,
    projects,
    midiators,
    offers,
    notifications,
    contact,
    signUp,
    signIn,
    forgetPassword,
    checkcode,
    resetPassword,
    products,
    profile,
  },
});
