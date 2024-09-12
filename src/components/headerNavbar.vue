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
    </header>
    <RouterView />
</template>


<script setup>

</script>

<style>
.headers{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 4rem 12% 4rem;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
}
.logo{
    font-size: 3rem;
    color: var(--text-color);
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s ease;
}
.logo:hover{
    transform: scale(1.1);
}
.logo span{
    text-shadow: 0 0 25px var(--main-color);
}
.navbar a{
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent;
}
.navbar a:hover,
.navbar a.active{
    color: var(--main-color);
    border-bottom: 3px solid var(--main-color);
}
</style>