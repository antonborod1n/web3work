import "./scss/main.scss";

const formHelpBtn = document.querySelector('.form__help');
const formHelpAnsw = document.querySelector('.form__help-answ');
const formHelpArrow = document.querySelector('.form__help-arrow');

formHelpBtn.addEventListener('click', function() {
    formHelpAnsw.classList.toggle('active');
    formHelpArrow.classList.toggle('active');
})

const userAccountLink = document.querySelector('.user-account__link');
const userAccountMenu = document.querySelector('.user-account__menu');
const overlay = document.querySelector('.overlay');

userAccountLink.addEventListener('click', function() {
    userAccountMenu.classList.toggle('active');
    overlay.classList.toggle('active');

})
overlay.addEventListener('click', function() {
    userAccountMenu.classList.toggle('active');
    overlay.classList.toggle('active');
})
