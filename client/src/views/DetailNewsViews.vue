<script>
import EditButtonComponent from '@/components/EditButtonComponent.vue';

export default {
    name: 'DetailNews',
    components: {
        EditButtonComponent
    }
}
</script>

<template>
    <div class="news-detail">

        <div class="news-detail-content-image">
            <img src="https://img.jakpost.net/c/2023/07/14/2023_07_14_140293_1689330226._large.jpg" alt="">
        </div>
        <div class="news-detail-content">
            <div class="news-detail-content-published">
                at, July 29, 2023
            </div>
            <div class="news-detail-content-title">
                Airlangga fights back amid Golkar turmoil
            </div>
            <div class="news-detail-content-article">


                Embattled Golkar Party chairman Airlangga Hartarto is scrambling to stymie a mounting challenge against his
                leadership, as he seeks to steer the party into next year’s presidential election.\n\nDiscontent has grown
                within Golkar over its “unclear” direction ahead of the election. Airlangga has been eyeing a chance to run
                in the presidential race, but recent opinion polls show that his popularity remains persistently
                low.\n\nReflecting on the situation, Airlangga has opened the possibility of backing the presidential bid of
                Central Java Governor Ganjar Pranowo, who is among the top-three most popular presumptive candidates in
                various polls.\n\nStarting from IDR 55,500/month\n\nOr let Google manage your subscription

            </div>
            <EditButtonComponent />
        </div>
    </div>
</template>

<style>
.news-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.news-detail-content-image img {
    object-fit: cover;
    border-radius: 3%;
}

.news-detail-content {
    max-width: 75%;
    margin-top: -250px;
    margin-bottom: 300px;
    background-color: #F6F4EF;
    padding: 48px;
    border-radius: 16px;

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
    text-align: justify;
    text-justify: inter-word;
}
</style>