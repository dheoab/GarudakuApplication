<script>

import NewsMainCardComponent from "@/components/NewsMainCardComponent.vue";
import NewsCardsTemplateComponent from "@/components/NewsCardsTemplateComponent.vue";
// import DetailNewsViews from "./DetailNewsViews.vue";
import { mapState } from "vuex";

export default {
    name: 'HomeViews',
    components: {
        NewsMainCardComponent,
        NewsCardsTemplateComponent,
        // DetailNewsViews

    },
    data() {
        return {
            localNews: {}
        }
    },
    computed: {
        ...mapState(["news", "loading"])
    },

    methods: {
        async fetchNews(query = "indonesia") {

            await this.$store.dispatch('fetchNews', query)



            this.localNews = await this.news
            console.log(this.news, '<<< ini news');
        }
    },
    created() {
        console.log('created HomeView jalan');
        this.fetchNews(this.$route.query.url || 'indonesia');

    }, watch: {
        '$route'(to, from) {
            if (to.query.url !== from.query.url) {
                this.fetchNews(to.query.url || 'indonesia');
            }
        }
    },

}

</script>

<template>
    <div class="home-page">
        <div v-if="!loading && Object.keys(news).length !== 0">
            <NewsMainCardComponent :news="news" />
            <NewsCardsTemplateComponent :news="news" />
        </div>
        <div v-else-if="loading">
            Loading....
        </div>
        <div v-else>
            No data available.
        </div>
    </div>
</template>

<style>
.home-page {
    margin: 0;
    padding-right: 180px;
    padding-left: 180px;
}
</style>


