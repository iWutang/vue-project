import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/routes'


createApp(App).use(router).mount('#app')

const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const motif = document.getElementById("motif");
const message = document.getElementById("message");



function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
    Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iwutang5@gmail.com",
        Password : "A1BCCE5E58D8A3E68F6B3D39D0A7B5AAA67F",
        To : 'iwutang5@gmail.com',
        From : "iwutang5@gmail.com",
        Subject : motif.value,
        Body : bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})



