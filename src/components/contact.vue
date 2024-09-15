<template>
    <section class="contact" id="contact">
        <h2 class="heading">Contactez <span>Moi</span></h2>

        <form action="">
            <div class="input-group">
                <div class="input-box">
                    <input type="text" placeholder="Nom complet" id="fullName">
                    <input type="email" placeholder="Email" id="email">
                </div>
                <div class="input-box">
                    <input type="number" placeholder="N° de téléphone" id="phone">
                    <input type="text" placeholder="Motif" id="motif">
                </div>
            </div>

            <div class="input-group-2">
                <textarea name="" id="message" cols="30" rows="10" placeholder="Votre Message"></textarea>
                <input type="submit" value="Envoyez" class="btn">
            </div>
        </form>
    </section>
</template>

<script setup>

</script>





<style>
.contact{
    background-color: var(--bg-color);
}
.contact h2{
    margin-bottom: 3rem;
    color: white;
}
.contact form{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 5rem auto;
    text-align: center;
}
.contact form .input-box{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.contact form .input-box input,
.contact form textarea{
    width: 100%;
    padding: 2.5rem;
    font-size: 1.8rem;
    color: var(--text-color);
    background: var(--second-bg-color);
    border-radius: 2rem;
    border: 2px solid var(--main-color);
    margin: 1.5rem 0;
    resize: none;
}
.contact form .btn{
    margin-top: 2rem;
}
</style>