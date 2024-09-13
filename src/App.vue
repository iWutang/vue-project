<template>
  <headerNavbar />
  <RouterView />
  <footers />
</template>

<script setup>
import headerNavbar from '@/components/headerNavbar.vue';
import footers from '@/components/footer.vue';

</script>

<style>
@import './assets/main.css';

</style>



