import { createRouter } from "vue-router"
import MainPage from "./components/MainPage.vue"
import ErrorPage from "./components/ErrorPage.vue"

const router = createRouter({
    history: true,
    routes: [
        { path: '/', components: MainPage},
        { path: '/error', components: ErrorPage}
        /*Autre Routes*/
    ],
})

export default router