<template>
  <header class="headers">
        <RouterLink to="/" class="logo">Stéphane
            <span>R</span></RouterLink>

        <nav class="navbar">
            <RouterLink to="/home">Accueil</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/projects">Projets</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    <RouterView />
  </header>
  
  <MainPage />

  <footer class="footers">
    <div class="social">
      <a href="https://fr.linkedin.com"><i class='bx bxl-linkedin'></i></a>
      <a href="https://github.com/iWutang"><i class='bx bxl-github'></i></a>
      <a href="https://www.instagram.com"><i class='bx bxl-instagram-alt'></i></a>
      <a href="https://x.com/?lang=fr"><i class='bx bxl-twitter'></i></a>
    </div>
    <ul class="list">
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">A propos</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Projets</a>
      </li>
    </ul>
    <p class="copyright">
      © Stéphane R | Tous droits réservé
    </p>
  </footer>
</template>

<script setup>
import MainPage from './components/MainPage.vue';
import headers from '@/components/navbar.vue';
import home from '@/components/home.vue';
import services from '@/components/services.vue';
import projects from '@/components/projects.vue';
import contact from '@/components/contact.vue';
import footers from '@/components/footer.vue';
</script>

<style>
@import './assets/main.css';
</style>




