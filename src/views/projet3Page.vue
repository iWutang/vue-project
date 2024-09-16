<template>
    <section class="projet3" id="projet3">
        <h2 class="heading">Projet 3</h2>

        <div class="projet-container">
            <div class="img-box">
                <img src="../assets/Img/imageCommentaire1.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCommentaire2.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCommentaire3.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCommentaire1.png" alt="">
            </div>
        </div>
        <article>
            <div class="sneakpeak-box">
                <div class="projet3-info">
                    <h4>Description du projet</h4>
                    <p>Voici donc l'espace commentaire dynamique que j'ai crée, ci joint le lien du projet pour voir le code source : <a href="https://github.com/iWutang/Commentaires_Devoir1">Lien github</a></p>
                </div>
            </div>
        </article>
    </section>
</template>

<style>
.projet3{
    background: var(--bg-color);
    color: black;
}
.projet3 h2{
    margin-bottom: 5rem;
    color: white;
}
.projet-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 2.5rem;
}
.sneakpeak-box{
    background-color: var(--main-color);
    height: 300px;
    border-radius: 3rem;
    border: 5px solid transparent;
    cursor: pointer;
    transition: 0.4s ease-in-out;
}
.sneakpeak-box:hover{
    background: white;
    color: black;
    border: 5px solid var(--main-color);
    transform: scale(1.03);
}
.sneakpeak-box .service-info{
    display: flex;
    flex-direction: column;
    text-align: left;
    max-height: 200px;
    justify-content: left;
    align-items: baseline;
    padding: 5rem 5rem;
}
.projet3-info h4{
    font-size: 3rem;
    font-weight: 800;
    line-height: 2;
}
.projet3-info p{
    font-size: 1.6rem;
    font-weight: 600;
    max-height: 100px;
    line-height: 1.7;
    margin: auto;
}
article{
    margin-top: 5rem;
}
.sneakpeak-boX{
    background-color: var(--main-color);
    height: 300px;
    margin-top: 5rem;
    border-radius: 3rem;
    border: 5px solid transparent;
    cursor: pointer;
    transition: 0.4s ease-in-out;
}
.sneakpeak-boX:hover{
    background: white;
    color: black;
    border: 5px solid var(--main-color);
    transform: scale(1.03);
}

</style>