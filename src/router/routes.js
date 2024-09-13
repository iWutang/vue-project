import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"

import mainPage from "@/views/mainPage.vue"
import projet1Page from "@/views/projet1Page.vue"

const routes = [
    { path: '/', name: "Accueil", component: mainPage},
    { path: '/projet1', name: "Projet-1", component: projet1Page},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 