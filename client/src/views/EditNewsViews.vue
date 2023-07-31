<script>
import { mapState } from 'vuex';

export default {
    name: "EditNewsView",
    data() {
        return {
            editedNews: {
                image: "",
                title: "",
                post_content: "",
                pusblised_at: ""
            }
        }
    },
    computed: {
        ...mapState(['detailNews', 'detailNewsString', "editNewsLink"])
    },
    methods: {
        async submitEdit() {
            console.log(this.editedNews, "submitEdit methode");
            this.$router.push(`/detail?url=${this.editNewsLink}`)
            await this.$store.dispatch('editNews', this.editedNews)
        }
    },
    mounted() {

        let news = this.detailNews.detail_post
        this.editedNews.image = news.image
        this.editedNews.title = news.title
        this.editedNews.post_content = news.post_content
        this.editedNews.pusblised_at = news.pusblised_at
        console.log(this.editedNews, '<< ini detailNews');
    }
}
</script>

<template>
    <div class="edit-news">
        <h1 style="text-align: center;">Edit Article</h1>
        <form>
            <div>
                <div class="edit-news-image-label">
                    <label for="edit-news-image">Article Image</label>
                </div>
                <div class="edit-news-image-input">
                    <input type="text" placeholder="Image URL..." id="edit-news-image" v-model="editedNews.image">
                </div>
            </div>
            <div>
                <div class="edit-news-image-label">
                    <label for="edit-news-title">Article Title</label>
                </div>
                <div class="edit-news-title-input">
                    <input type="text" placeholder="Article Title..." id="edit-news-title" v-model="editedNews.title">
                </div>
            </div>
            <div>
                <div class="edit-news-content-label">
                    <label for="edit-news-content">Article Content</label>
                </div>
                <div>
                    <ckeditor v-model="editedNews.post_content" class="edit-news-ckeditor" id="edit-news-content">
                    </ckeditor>
                </div>
            </div>
            <div>
                <button class="edit-news-button" @click="submitEdit">Edit</button>
            </div>
        </form>
    </div>
</template>

<style>
.edit-news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin: 0;
    margin-top: 60px;
    padding: 0 180px;

}

.edit-news-image-label {
    font-size: 16px;
    margin: 10px 0;
    font-weight: 600;
}

.edit-news-title-label {
    font-size: 16px;
    margin: 10px 0;
    font-weight: 600;
}

.edit-news-content-label {
    font-size: 16px;
    margin: 10px 0;
    font-weight: 600;
}

.edit-news-image-input input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;

}

.edit-news-title-input input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 4px;


}

.edit-news-button {
    margin-top: 30px;
    background-color: rgb(110, 109, 109);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 12px;
}
</style>