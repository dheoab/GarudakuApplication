<script>
export default {
    name: 'NewsMainCard',
    props: ['news'],
    data() {
        return {
            mainNews: this.news.featured_post
        }
    }, methods: {
        goToDetail() {
            console.log("goToDetail Hit");
            this.$router.push(`/detail?url=${this.mainNews.link}`,)
        }
    },

}
</script>

<template>
    <div style="padding: 0;">
        <div v-if="(Object.keys('mainNews').length != 0)">
            <div class="category-name">News</div>
            <div class="news-card-main" @click="goToDetail">
                <div class="news-card-main-text">
                    <div class="news-card-main-title-published">
                        {{ mainNews.pusblised_at }}
                    </div>
                    <div class="news-card-main-title-title">
                        {{ mainNews.title }}
                    </div>
                    <div class="news-card-main-title-headline">
                        {{ mainNews.headline }}
                    </div>
                </div>
                <div class="news-card-main-image">
                    <img :src="mainNews.image" :alt="mainNews.image_desc" />
                </div>
            </div>
        </div>
        <div v-else>
            Loading
        </div>
    </div>
</template>

<style>
.category-name {
    margin-top: 60px;
    font-size: 48px;
    font-weight: 600;
}

.news-card-main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    padding: 0 32px;
}

.news-card-main-text {
    margin-right: 64px;
    padding-right: 32px;
}


.news-card-main-title-published {
    font-size: 12px;
    padding: 0;
    margin-bottom: 16px;
    color: rgb(218, 76, 60);
}

.news-card-main-title-title {
    padding: 0;
    padding-right: 16px;
    font-size: 32px;
    font-weight: 600;
}

.news-card-main-title-headline {
    padding: 0;
    padding-left: 18px;
    margin-top: 24px;
    font-size: 16px;
    text-align: justify;
    text-justify: inter-word;
}

.news-card-main-image img {
    max-width: 500px;
    object-fit: cover;
    border-radius: 5%;

}
</style>