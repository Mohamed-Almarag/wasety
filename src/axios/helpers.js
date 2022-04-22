import Api from "./axios";
// import { axiosIns } from "./axios";
// Start Get Helper Mthods

export function getMethods(uri, params) {
  let defultParams = {
    limit: 10,
    offset: 0,
    field: "id",
    sort: "desc",
    resource: "all",
    deleted: "false",
    paginate: "true",
    columns: ["active"],
    operand: ["="],
    column_values: [1],
  };

  if (typeof defultParams !== undefined) {
    defultParams = {
      ...defultParams,
      ...params,
    };
  }

  return new Promise((resolve, reject) => {
    Api.get(`${uri}`, {
      params: {
        ...defultParams,
      },
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        //   .catch((error) => {
        //     if(error.response.status === 422){
        //         this.$router.push({name: "Settings"});
        //     }
        // })
        // let self = this;
        if (error.response) {
          // let self = this;
          // this.$router.push("Transactions");
          // this.$router.push({ name: "NotFound" });
          console.log("yyyyyyyyy");
          console.log(self);
          // if (error.response.status === 404) {
          //   self.$router.push("/404");
          // }
          // self.$router.push({ name: "NotFound" });
          // if (error.response.status === 401) {
          //   self.$router.push({ name: "NotFound" });
          // }
          // if (error.response.status === 404) {
          //   self.$router.push({ name: "NotFound" });
          //   console.log("status not fondd");
          // }
          // if (error.response.status === 500) {
          //   self.$router.push({ name: "NotFound" });
          // }
          // error.response.status == 400
          //   ? this.$route.push({ name: "NotFound" })
          //   : // ? console.log(error.response.data.message)
          //     "no";
          // error.response.status == 401 //
          //   ? this.$route.push({ name: "NotFound" })
          //   : // ? console.log(error.response.data.message)
          //     "no";
          // error.response.status == 404
          //   ? this.$route.push({ name: "NotFound" })
          //   : "no";
          // error.response.status == 500
          //   ? console.log(error.response.data.message)
          //   : "no";
        }
        reject(error);
      });
  });
}
// End Get Helper Mthods
// if (error.response.status === 422) {
//   this.$router.push({ name: "Settings" });
// }
// Start Post Helper Mthods
export function postMethods(uri, payload) {
  return new Promise((resolve, reject) => {
    Api.post(`${uri}`, payload, {
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}

export function putMethods(uri, payload) {
  return new Promise((resolve, reject) => {
    Api.put(`${uri}`, payload, {
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}
// End Post Helper Mthods

export function deleteMethods(uri, id) {
  return new Promise((resolve, reject) => {
    Api.delete(`${uri}`, {
      params: id,
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}
export function append_Object_Items_ToFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  console.log(FormData);
  return formData;
}
