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
    computed: {
        ...mapState(["news"])
    },

    methods: {

    },
    created() {
        console.log('created HomeView jalan');
        this.$store.dispatch('fetchNews', 'indonesia')
    }


}

</script>

<template>
    <div class="home-page">
        <div v-if="Object.keys(news).length != 0">
            <NewsMainCardComponent :news="news" />
            <NewsCardsTemplateComponent :news="news" />
        </div>
        <div v-else>
            loading
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


