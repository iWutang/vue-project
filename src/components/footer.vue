<template>
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


<style>
footer{
    position: relative;
    bottom: 0;
    width: 100%;
    padding: 40px 0;
    background-color: var(--second-bg-color);
}
.footers .social{
    text-align: center;
    padding-bottom: 25px;
    color: var(--main-color);
}
.footers .social a{
    font-size: 25px;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    width: 42px;
    height: 42px;
    line-height: 42px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 10px;
    transition: 0.3s ease-in-out;
}
.footers .social a:hover{
    transform: scale(1.2)translateY(10px);
    background-color: var(--main-color);
    color: black;
    box-shadow: 0 0 25px var(--main-color);
}
.footers ul{
    margin-top: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
}
.footers ul li a{
    color:white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
}
.footers ul li a:hover{
    border-bottom: 3px solid var(--main-color);
}
.footers ul li{
    display: inline-block;
    padding: 0 15px;
}
.footers .copyright{
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    color: white;
}
</style>