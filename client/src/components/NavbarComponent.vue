<script>
export default {
    name: "NavbarComponent",
    methods: {
        goToHome(query) {
            console.log(query);
            this.$router.push({ name: 'home', query: { url: `${query}` } }).catch(() => { });
        }
    },

}

</script>

<template>
    <div class="navbar">
        <ul class="navbar-list">
            <li @click="goToHome('indonesia')">News</li>
            <li @click="goToHome('business/tech')">Tech</li>
            <li @click="goToHome('life/health')">Health</li>
            <li @click="goToHome('life/entertainment')">Entertaiment</li>
            <li @click="goToHome('life/style')">Lifestyle</li>
            <li @click="goToHome('business')">Bussiness</li>
            <li @click="goToHome('world')">World</li>
        </ul>
    </div>
</template>

<style>
.navbar {
    margin: 0;
    padding-right: 180px;
    padding-left: 180px;
}

.navbar-list {
    display: flex;
    justify-content: center;
    margin-top: 48px;
    padding-bottom: 18px;
    border-bottom: solid #D0D1DB;
}

.navbar-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar-list li {
    padding: 0 32px;
    display: inline;
    margin-right: 10px;
    font-size: 16px;
}
</style>