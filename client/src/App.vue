<script>
import HeadersComponent from './components/HeadersComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: "App",
  components: {
    HeadersComponent,
    NavbarComponent
  }
}

</script>

<template>
  <div id="app">
    <HeadersComponent />
    <NavbarComponent />
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  background-color: #F6F4EF;
}
</style>
