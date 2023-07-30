import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: {},
  },
  getters: {},
  mutations: {
    updateNews(state, data) {
      state.news = data;
    },
  },
  actions: {
    async fetchNews(context, query) {
      try {
        const BASEURL = `https://jakpost.vercel.app/api/category`;

        let { data } = await axios.get(`${BASEURL}/${query}`);

        console.log(data, "mainStore Line 24");

        context.commit("updateNews", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   state: {
//     indonesiaNews: {},
//   },
//   mutations: {
//     updateIndonesiaNews(state, data) {
//       state.indonesiaNews = data;
//     },
//   },

//   actions: {
//     async fetchIndonesiaNews(context) {
//       try {
//         const BASEURL = `https://jakpost.vercel.app/api/category/indonesia`;

//         let { data } = await axios.get(`${BASEURL}`);

//         console.log(data);

//         context.commit("updateIndonesiaNews", data);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   },
// });
