import { getMethods } from "@/axios/helpers";

const state = {
  notifications: [],
};

const getters = {
  notifications: (state) => state.notifications,
  notificationsLength: (state) => {
    return state.notifications.length;
  },
};

const mutations = {
  GET_NOTIFICATIONS(state, notifications) {
    return (state.notifications = notifications);
  },
};

const actions = {
  getAllNotifications({ commit }) {
    return getMethods("notifications", {
      columns: ["user_id"],
      operand: ["="],
      column_values: [JSON.parse(localStorage.getItem("user-info")).id],
    }).then((response) => {
      commit("GET_NOTIFICATIONS", response.data.data.data);
      console.log(JSON.parse(localStorage.getItem("user-info")).id);
      console.log(response.data.data.data);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
