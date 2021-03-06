
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faUserShield, faHistory, faCommentAlt,faEllipsisV,
         faAddressCard, faCalendarAlt, faClock, faThumbsUp, faThumbsDown, faEdit, faCameraRetro, faPaperPlane, 
         faChevronDown, faChevronUp, faCheckCircle, faTimesCircle, faUserCircle, faImage, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

library.add( faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faUserShield, faHistory, faCommentAlt,faEllipsisV, 
             faCameraRetro, faAddressCard, faCalendarAlt, faClock, faThumbsUp, faThumbsDown, faEdit, faPaperPlane, 
             faChevronDown,faChevronUp, faCheckCircle, faTimesCircle, faUserCircle, faImage, faPlusCircle);

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    router,
    store,
    render: h=> h(App)
}).$mount("#app");