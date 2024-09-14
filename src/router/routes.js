import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"

import mainPage from "@/views/mainPage.vue";
import projet1Page from "@/views/projet1Page.vue";
import projet2Page from "@/views/projet2Page.vue";
import projet3Page from "@/views/projet3Page.vue";
import NotFoundedPage from "@/views/notFoundedPage.vue";




const routes = [
    { path: '/', name: "Accueil", component: mainPage},
    { path: '/projet1', name: "Projet-1", component: projet1Page},
    { path: '/projet2', name: "Projet-2", component: projet2Page},
    { path: '/projet3', name: "Projet-3", component: projet3Page},
    { path: '/:pathMatch(.*)*', component: NotFoundedPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router