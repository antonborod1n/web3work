import "./scss/main.scss";

const formHelpBtn = document.querySelector('.form__help');
const formHelpAnsw = document.querySelector('.form__help-answ');
const formHelpArrow = document.querySelector('.form__help-arrow');

formHelpBtn.addEventListener('click', function() {
    formHelpAnsw.classList.toggle('active');
    formHelpArrow.classList.toggle('active');
})
