<template>
    <section class="notFound">
        <div class="notF-box">
            <h1 class="MainTitle">ERROR 404: PAGE NOT FOUND</h1>
            <div class="position">
                <div class="notF-item">
                    <p>
                    The page that you search isn't exist or isn't founded
                    go back to <RouterLink to="/">HOME</RouterLink>
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
   
</script>

<style>
.notFound {
    background: var(--second-bg-color);
}
.notF-box{
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.notFound .MainTitle{
    margin-bottom: 5rem;
    margin-top: 5rem;
}
.position{
    display: grid;
    max-width: 100%;
}
.notF-item{
    min-height: 550px;
    max-width: 1000px;
    /* background: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(238, 238, 238, 0.3);
    border-radius: 2rem; */
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
.notF-item p{
    font-size: 1.8rem;
}
</style>