<template>
    <section class="services" id="services">
        <h2 class="heading">Services</h2>

        <div class="services-container">
            <div class="service-box">
                <div class="service-info">
                    <h4>UI Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Soluta fuga tempora, ratione
                    perferendis ducimus quae id culpa 
                    voluptatibus atque nostrum!</p>
                </div>
            </div> 

            <div class="service-box">
                <div class="service-info">
                    <h4>Frontend Developer</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Soluta fuga tempora, ratione
                    perferendis ducimus quae id culpa 
                    voluptatibus atque nostrum!</p>
                </div>
            </div>

            <div class="service-box">
                <div class="service-info">
                    <h4>Backend Developer</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Soluta fuga tempora, ratione
                    perferendis ducimus quae id culpa 
                    voluptatibus atque nostrum!</p>
                </div>
            </div>

            <div class="service-box">
                <div class="service-info">
                    <h4>Testing</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Soluta fuga tempora, ratione
                    perferendis ducimus quae id culpa 
                    voluptatibus atque nostrum!</p>
                </div>
            </div> 
        </div>
    </section>
</template>

<style>
.services{
    background: var(--bg-color);
    color: black;
}
.services h2{
    margin-bottom: 5rem;
    color: white;
}
.services-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 2.5rem;
}
.service-box{
    background-color: var(--main-color);
    height: 300px;
    border-radius: 3rem;
    border: 5px solid transparent;
    cursor: pointer;
    transition: 0.4s ease-in-out;
}
.service-box:hover{
    background: white;
    color: black;
    border: 5px solid var(--main-color);
    transform: scale(1.03);
}
.service-box .service-info{
    display: flex;
    flex-direction: column;
    text-align: left;
    max-height: 200px;
    justify-content: left;
    align-items: baseline;
    padding: 5rem 5rem;
}
.service-info h4{
    font-size: 3rem;
    font-weight: 800;
    line-height: 2;
}
.service-info p{
    font-size: 1.6rem;
    font-weight: 600;
    max-height: 100px;
    line-height: 1.7;
    margin: auto;
}
</style>