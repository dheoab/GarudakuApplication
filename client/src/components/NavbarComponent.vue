<script>
export default {
    name: "NavbarComponent",
}

</script>

<template>
    <div class="navbar">
        <ul class="navbar-list">
            <li>News</li>
            <li>Tech</li>
            <li>Sports</li>
            <li>Entertaiment</li>
            <li>Lifestyle</li>
            <li>Bussiness</li>
            <li>World</li>
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