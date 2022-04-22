import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuelidate from "vuelidate";
import "./filters";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
// import axios from "axios";
import golbalComponents from "@/components/Global/globalcomponents";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignOutAlt,
  faAddressBook,
  faUser,
  faGlobe,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faBars,
  faHome,
  faCrow,
  faCouch,
  faHandPointDown,
  faAngleRight,
  faBell,
  faDollarSign,
  faStar,
  faHandshake,
  faHandRock,
  faPlus,
  faHandHoldingUsd,
  faTrash,
  faEdit,
  faPen,
  faCheck,
  faPhoneAlt,
  faCreditCard,
  faCamera,
  faTimesCircle,
  faArrowUp,
  faEye,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faSignOutAlt,
  faLinkedin,
  faLinkedinIn,
  faAddressBook,
  faUser,
  faGlobe,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faBars,
  faHome,
  faCrow,
  faCouch,
  faHandPointDown,
  faAngleRight,
  faBell,
  faDollarSign,
  faStar,
  faHandshake,
  faHandRock,
  faPlus,
  faHandHoldingUsd,
  faTrash,
  faEdit,
  faPen,
  faCheck,
  faPhoneAlt,
  faCreditCard,
  faCamera,
  faTimesCircle,
  faArrowUp,
  faEye,
  faTimes
);
Vue.component("fa", FontAwesomeIcon);
// Vue.prototype.$API_URL = "http://wasety.softgatesdemo.com/api/";
Vue.prototype.$API_URL = "http://admin.wasety.net/api/";
golbalComponents.forEach((component) => {
  Vue.component(component.name, component);
});

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
