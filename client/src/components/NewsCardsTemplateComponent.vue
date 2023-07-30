<script>
import NewsCardComponent from './NewsCardComponent.vue';

export default {
    name: 'NewsCardsTemplate',
    components: {
        NewsCardComponent
    },
    props: ['news'],
    data() {
        return {
            postsNews: this.news.posts
        }
    }
}
</script>

<template>
    <div class="news-cards-template">
        <div v-for="(news, index) in postsNews" :key="index">
            <NewsCardComponent :news="news" />
        </div>
    </div>
</template>

<style>
.news-cards-template {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: auto;
    grid-gap: 50px;
    margin-bottom: 100px;

}
</style>