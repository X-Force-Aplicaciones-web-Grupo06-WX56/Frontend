<script setup>
import { ref } from 'vue';
import NavBar from "@/public/components/nav-bar.component.vue";
import FooterApp from "@/public/components/footer.component.vue";
import {RouterView,RouterLink} from "vue-router";
// import Notifications from "@/public/components/notifications.component.vue";
import HomePage from "@/public/pages/home.view.vue";
</script>

<template>
  <nav-bar></nav-bar>
  <footer-app></footer-app>
</template>

<style scoped>
</style>
