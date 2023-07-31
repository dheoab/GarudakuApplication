<script>
import EditButtonComponent from '@/components/EditButtonComponent.vue';
import { mapState } from 'vuex';

export default {
    name: 'DetailNews',
    components: {
        EditButtonComponent
    },
    data() {
        return {
            news: {},
            newsString: ""
        }
    },

    computed: {
        ...mapState(['detailNews', 'detailNewsString', "editedNews", "editNewsLink"])
    },
    methods: {
        async fetchDetail() {
            await this.$store.dispatch('fetchDetailNews', this.$route.query.url)

            this.news = this.detailNews.detail_post
            this.newsString = this.detailNewsString

        },
    },
    mounted() {
        console.log(this.$route.query.url, "query URL");
        console.log(this.editNewsLink, "<< editNewsLink");
        this.$route.query.url;

        // if (this.editedNews.detail_post.image !== undefined && this.$route.query.url === this.editNewsLink) {
        //     this.news = this.editedNews.detail_post
        // } else if (this.editedNews.detail_post.image === undefined) {
        //     this.fetchDetail()
        // }

        if (this.editedNews.detail_post.image === undefined) {
            this.fetchDetail()
        } else if (this.$route.query.url !== this.editNewsLink) {
            this.fetchDetail()
        } else if (this.editedNews.detail_post.image !== undefined) {
            this.news = this.editedNews.detail_post
        }

        // if (this.$route.query.url === this.editNewsLink) {
        //     console.log(this.editNewsLink, '<<<');
        //     this.news = this.editedNews.detail_post
        //     console.log("MASUK IF");
        // } else if (this.editedNews.detail_post.image === undefined) {
        //     this.fetchDetail()
        // }
    },


}
</script>

<template>
    <div class="news-detail" v-if="news.title !== undefined">
        <div class="news-detail-content-image">
            <img :src="news.image">
        </div>
        <div class="news-detail-content">

            <div class="news-detail-content-published">
                {{ news.pusblised_at }}
            </div>
            <div class="news-detail-content-title">
                {{ news.title }}
            </div>
            <div class="news-detail-content-article" v-html="news.post_content">
            </div>
            <EditButtonComponent />
        </div>
    </div>
    <div class="news-detail" v-else>
        loading
    </div>
</template>

<style>
.news-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 60px;
    padding-right: 180px;
    padding-left: 180px;
}



.news-detail-content-image img {
    max-width: 960px;
    object-fit: cover;
    border-radius: 3%;
}

.news-detail-content {
    max-width: 60%;
    margin-top: -250px;
    margin-bottom: 300px;
    background-color: #F6F4EF;
    padding: 48px;
    border-radius: 16px;

}

.news-detail-string {
    white-space: pre-line;
}

.news-detail-content-published {
    font-size: 12px;
    padding: 0;
    margin-bottom: 16px;
    color: rgb(218, 76, 60);
}

.news-detail-content-title {
    padding: 0;
    padding-right: 16px;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 16px;
}

.news-detail-content-article {
    padding: 0;
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 16px;
    white-space: pre-line;
    text-align: justify;
}
</style>