<template>
    <section class="projet2" id="projet2">
        <h2 class="heading">Projet 2</h2>

        <div class="projet-container">
            <div class="img-box">
                <img src="../assets/Img/imageCDC1.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCDC2.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCDC3.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCDC4.png" alt="">
            </div>
            <div class="img-box">
                <img src="../assets/Img/imageCDC5.png" alt="">
            </div>
        </div>
        <article>
            <div class="sneakpeak-box">
                <div class="projet2-info">
                    <h4>Voici un apercus de cahier des charges que j'ai pu effectuer pour l'entreprise "La Socketterie"</h4>
                </div>
            </div>
        </article>
    </section>
</template>

<style>
.projet2{
    background: var(--bg-color);
    color: black;
}
.projet2 h2{
    margin-bottom: 5rem;
    color: white;
}
.projet-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 2.5rem;
}
.img-box img{
    height: 500px;
    width: 600px;
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
/* .sneakpeak-box .service-info{
    display: flex;
    flex-direction: column;
    text-align: left;
    max-height: 200px;
    justify-content: left;
    align-items: baseline;
    padding: 5rem 5rem;
} */
.projet2-info h4{
    font-size: 3rem;
    font-weight: 800;
    line-height: 2;
}
.projet2-info img{
    font-size: 2.5rem;
    font-weight: 800;
    max-height: 300px;
    line-height: 2;
    margin: auto;
}
article{
    margin-top: 5rem;
}
/* .sneakpeak-boX{
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
} */

</style>