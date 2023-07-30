import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: {},
    detailNews: {},
  },
  getters: {},
  mutations: {
    updateNews(state, data) {
      state.news = data;
    },

    updateDetailNews(state, data) {
      state.detailNews = data;
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
    async fetchDetailNews(context, query) {
      try {
        let { data } = await axios.get(`${query}`);

        console.log(data, `response Fetch Detail News`);

        context.commit("updateDetailNews", data);

        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
