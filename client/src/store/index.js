import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: {},
    detailNews: {},
    detailNewsString: "",
    editedNews: {
      detail_post: {},
    },
    editNewsLink: "",
    loading: false,
  },
  getters: {},
  mutations: {
    updateNews(state, data) {
      state.news = data;
    },

    updateDetailNews(state, data) {
      state.detailNews = data;
    },

    updateDetailNewsString(state, data) {
      state.detailNewsString = data;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    updateEditNews(state, data) {
      state.editedNews.detail_post = data;
    },
    updateEditNewsLink(state, data) {
      state.editNewsLink = data;
    },
  },
  actions: {
    async fetchNews(context, query) {
      try {
        context.commit("setLoading", true);
        console.log(query, "<< ini query dari fetchNews Home");

        const BASEURL = `https://jakpost.vercel.app/api/category`;

        let { data } = await axios.get(`${BASEURL}/${query}`);

        console.log(data, "mainStore Line 24");

        context.commit("updateNews", data);
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("setLoading", false);
      }
    },
    async fetchDetailNews(context, query) {
      try {
        let { data } = await axios.get(`${query}`);

        console.log(data, `response Fetch Detail News`);

        context.commit("updateDetailNews", data);

        let newsContentFormatted = data.detail_post.post_content.replace(
          /\n/g,
          "<br />"
        );

        let newsString =
          data.detail_post.image +
          "<br /><br /><br />" +
          data.detail_post.title +
          "<br /><br /><br />" +
          newsContentFormatted;

        context.commit("updateDetailNewsString", newsString);

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    editNews(context, editedNews) {
      // console.log(editedNews, "<<editedNews store");
      context.commit("updateEditNews", editedNews);
      // console.log(context.state.editedNews, "state EditedNews Store");
    },
    storeLink(context, link) {
      context.commit("updateEditNewsLink", link);
      console.log(context.state.editNewsLink, "ini link");
    },
  },
  modules: {},
});
