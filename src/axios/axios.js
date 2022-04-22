import Vue from "vue";
import axios from "axios";
import https from "https";
// const domain = "http://wasety.softgatesdemo.com/api/";
const domain = "http://admin.wasety.net/api/";

const axiosIns = axios.create({
  baseURL: domain,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })


  // headers: {
  //   authorization: `Bearer ${token}`,
  // },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
