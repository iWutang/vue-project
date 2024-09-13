<template>
    <section class="projects" id="projects">
        <div class="projects-box">
            <h2 class="heading">Projets</h2>

            <div class="wrapper">
                <RouterLink to="/projet1">
                    <div class="project-item">
                        <img src="/src/assets/Img/Luffy-gear-5 wlp.jpg" alt="">
                        <h2>Projet 1</h2>
                        <div class="rating">
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quisquam eum perferendis
                        Quisquam eum perferendis accusamus ipsam,  
                        illo debitis alias magnam. Quas, repellat 
                        pariatur!</p>
                    </div>
                </RouterLink>  
                <RouterLink to="/projet2">
                    <div class="project-item">
                        <img src="/src/assets/Img/Luffy-gear-5 wlp.jpg" alt="">
                        <h2>Projet 2</h2>
                        <div class="rating">
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quisquam eum perferendis
                        Quisquam eum perferendis accusamus ipsam,  
                        illo debitis alias magnam. Quas, repellat 
                        pariatur!</p>
                    </div>
                </RouterLink>
                <RouterLink to="/projet3">
                    <div class="project-item">
                        <img src="/src/assets/Img/Luffy-gear-5 wlp.jpg" alt="">
                        <h2>Projet 3</h2>
                        <div class="rating">
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                            <a href=""><i class='bx bxs-star' id="star"></i></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quisquam eum perferendis
                        Quisquam eum perferendis accusamus ipsam,  
                        illo debitis alias magnam. Quas, repellat 
                        pariatur!</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
   
    
</script>

<style>
.projects{
    background: var(--second-bg-color);
}
.projects-box{
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.projects .heading{
    margin-bottom: 5rem;
}
.projects-box img{
    width: 15rem;
    border-radius: 50%;
    border: 3px solid var(--main-color);
    box-shadow: 0 0 25px var(--main-color);
}
.wrapper{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 3rem;
}
.project-item{
    min-height: 550px;
    max-width: 450px;
    background: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(238, 238, 238, 0.3);
    border-radius: 2rem;
    margin: 0 2rem;
    padding: 30px 60px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;
    color: white;
    transition: 0.4s ease-in-out;
}
.project-item:hover{
    border: 3px solid var(--main-color);
    transform: translateY(-10px)scale(1.03);
    box-shadow: 0 0 50px var(--main-color);
}
.project-item h2{
    font-size: 2.8rem;
}
.project-item p{
    font-size: 1.3rem;
}
#star{
    color: gold;
    font-size: 2rem;
}
</style>