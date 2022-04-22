import { getMethods, postMethods, deleteMethods } from "@/axios/helpers";

const state = {
  projects: [],
  singleProject: null,
  userType: JSON.parse(localStorage.getItem("user-info")),
};

const getters = {
  projects: (state) => state.projects,
  singleProject: (state) => state.singleProject,
  userType: (state) => {
    if (state.userType.type !== null) {
      return state.userType.type;
    } else {
      return "";
    }
  },
};

const mutations = {
  ADD_PROJECTS(state, project) {
    return (state.projects = project);
  },
  GET_PROJECTS(state, projects) {
    return (state.projects = projects);
  },

  GET_SINGLE_PROJECT(state, project) {
    return (state.singleProject = project);
  },
};

const actions = {
  async addProjects({ commit }, project) {
    await postMethods("projects", project).then((res) => {
      commit("ADD_PROJECTS", res);
    });
  },
  async getProjects({ commit }) {
    let columns =
      JSON.parse(localStorage.getItem("user-info")).type == "customer"
        ? ["user_id"]
        : ["status"];
    let column_values =
      JSON.parse(localStorage.getItem("user-info")).type == "customer"
        ? [JSON.parse(localStorage.getItem("user-info")).id]
        : ["recieve_offer"];
    await getMethods("projects", {
      columns: columns,
      operand: ["="],
      column_values: column_values,
    }).then((response) => {
      commit("GET_PROJECTS", response.data.data.data);
    });
  },

  async deleteSinglePrject({ state, commit }, projectId) {
    return await deleteMethods("projects/bulkDelete", {
      ids: [projectId],
    }).then(() => {
      commit(
        "GET_PROJECTS",
        state.projects.filter((item) => item.id != projectId)
      );
    });
  },

  getSingleProject({ commit }, singleProjectId) {
    getMethods(`projects/${singleProjectId}`).then((response) => {
      commit("GET_SINGLE_PROJECT", response.data.data.data);
    });
  },

  getProjectToEdit({ state }, projectId) {
    const project = state.projects.find((item) => item.id == projectId);
    return project
      ? Promise.resolve(project)
      : getMethods(`projects/${projectId}`);
  },
  async editProject({ commit, state }, payload) {
    await postMethods(`projects/${payload.id}`, payload.formData).then(() => {
      commit(
        "GET_PROJECTS",
        state.projects.map((project) =>
          project.id == payload.id ? payload : project
        )
      );
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
