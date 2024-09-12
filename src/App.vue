<template>
  <headerNavbar />
  <MainPage />
  <RouterView />
</template>

<script setup>
import headerNavbar from '@/components/headerNavbar.vue';
import MainPage from './views/mainPage.vue';

</script>

<style>
@import './assets/main.css';

</style>



