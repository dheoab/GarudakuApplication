<script>
import NavbarComponent from './components/NavbarComponent.vue';
import HomeViews from './views/HomeViews.vue';

export default {
  name: "App",
  components: {
    HomeViews,
    NavbarComponent
  }
}

</script>

<template>
  <div>
    <HomeViews />
    <NavbarComponent />

  </div>
</template>

<style>
* {
  margin: 0;
  padding-right: 32px;
  padding-left: 32px;
  box-sizing: border-box;
  background-color: #F6F4EF;
}
</style>
