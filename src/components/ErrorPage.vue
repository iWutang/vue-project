<template>
    <div class="container">
        <h1>Erreur la page est inexistante</h1>
        <p>Le hash '#' est invalide</p>
    </div>
</template>
<script setup>

</script>

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
</style>