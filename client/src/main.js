import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import CKEditor from "ckeditor4-vue";

Vue.use(CKEditor);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
