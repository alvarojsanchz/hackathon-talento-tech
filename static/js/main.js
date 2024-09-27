const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// Event listener
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open')
})

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3,
        },
    }
})

// chatbot
const heroBtn = document.querySelector('#hero_btn');
const phoneBtn = document.querySelector('#telefono_bnt');
const closeChat = document.querySelector('#close_chatbot')
const chatbotBtn = document.querySelector('#chatbot_btn');
        const chatbotWindow = document.querySelector('#chatbot-window');

        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden')
        });

        heroBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden')
        });

        phoneBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden')
        });

        closeChat.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden')
        });