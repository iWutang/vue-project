<template>
    <header class="headers">
        <RouterLink: to="/" class="logo">Stéphane
            <span>R</span></RouterLink:>

        <nav class="navbar">
            <RouterLink: to="/home">Accueil</RouterLink:>
            <a href="#services">Services</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
        
        </nav>
        <RouterView />
    </header>
    
</template>


<script setup>
    checkHash(['#home', '#education', '#services',]);

    function checkHash(hashList) {
  const currentHash = window.location.hash;
  if (!hashList.includes(currentHash)) {
    `<div class="container">
        <h1>Erreur la page est inexistante</h1>
        <p>Le hash '#' est invalide</p>
    </div>
    <style>
        .container {
            max-width: 100%;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        h1,
        p {
            color: white;
            border: 3px solid red;
            font-size: 30px;
        }
    </style>`
        };
    }
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