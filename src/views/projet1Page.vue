<template>
    <section class="projet1" id="projet1">
        <h2 class="heading">Projet 1</h2>

        <div class="projet-container">
            <div class="sneakpeak-box">
                <div class="projet1-info">
                    <h4>Partie HTML</h4>
                    <p>image</p>
                </div>
            </div> 

            <div class="sneakpeak-box">
                <div class="projet1-info">
                    <h4>Partie CSS</h4>
                    <p>image</p>
                </div>
            </div>

            <div class="sneakpeak-box">
                <div class="projet1-info">
                    <h4>Partie JavaScript</h4>
                    <p>image</p>
                </div>
            </div>

            <div class="sneakpeak-box">
                <div class="projet1-info">
                    <h4>Rendu Final</h4>
                    <p>image</p>
                </div>
            </div>
        </div>
        <article>
            <div class="sneakpeak-box">
                <div class="projet1-info">
                    <h4>Description du projet</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt unde harum distinctio quasi,
                    facilis soluta officia ipsam ratione, rem blanditiis porro doloremque eaque, nihil molestiae nesciunt 
                    reiciendis dolores dignissimos.</p>
                </div>
            </div>
        </article>
    </section>
</template>

<style>
.projet1{
    background: var(--bg-color);
    color: black;
}
.projet1 h2{
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
.projet1-info h4{
    font-size: 3rem;
    font-weight: 800;
    line-height: 2;
}
.projet1-info p{
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