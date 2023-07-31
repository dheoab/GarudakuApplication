<script>
export default {
    name: "NewsCard",
    props: ['news'],
    methods: {
        goToDetail() {
            console.log("goToDetail Hit");
            this.$router.push(`/detail?url=${this.news.link}`,)

        }
    },

}
</script>

<template>
    <div class="news-card" @click="goToDetail">
        <div class="news-card-image">
            <img :src="news.image">
        </div>
        <div class="news-card-content">
            <div class="news-card-published">
                {{ news.pusblised_at }}
            </div>

            <div class="news-card-title">
                {{ news.title }}
                <!-- Police arrest 119 suspected street robbers in North Sumatra -->
            </div>
            <div class="news-card-headline">
                {{ news.headline }}
                <!-- North Sumatra Police have arrested 119 people who were allegedly involved in a series of violent thefts. -->
            </div>
        </div>
    </div>
</template>
  
<style>
.news-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.news-card-image {
    width: 100%;
    max-width: 500px;
    text-align: center;
}

.news-card-image img {
    width: 100%;
    max-width: 100%;
    border-radius: 2%;
}

.news-card-content {
    margin-top: 10px;
    width: 100%;

}

.news-card-title {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
}

.news-card-headline {
    font-size: 14px;
    text-align: justify;
    text-justify: inter-word;
}
</style>
  