<template>
  <header>
    <headers />
  </header>
  <home />
  <services />
  <projects />
  <contact />
  <RouterView />
  <footer>
    <footers />
  </footer>
  
</template>

<script setup>
import headers from './navbar.vue';
import home from './home.vue';
import services from './services.vue';
import projects from './projects.vue';
import contact from './contact.vue';
import footers from './footer.vue';
</script>

<style>
@import '/src/assets/main.css';

</style>