import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js';

createApp(navbar)
.use(router)
.mount('#navbar')

createApp(App)
.use(router)
.mount('#app')

