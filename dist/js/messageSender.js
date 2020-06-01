const btnFooter = document.querySelector('.footer__email_submit');
const form = document.querySelector('.footer__contacts_form');
const input = document.querySelector('.footer__email');
const spanEmail = document.querySelector('.modal__span');
const modaLlayer = document.querySelector('.modal__layer');
const closeBtn = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');

function stopSubmit (event) {
    event.preventDefault()
}
form.addEventListener("submit" , stopSubmit)

const openModal = () => {
    if (input.value) {
    spanEmail.textContent = input.value;
    modaLlayer.classList.remove('hidden')
    }
}

const closeModal = (e) => {
    if (e.target == closeBtn || e.target == modaLlayer) {
        modaLlayer.classList.add('hidden')
    }
}

btnFooter.addEventListener('click' , openModal)
closeBtn.addEventListener('click' , closeModal)
modaLlayer.addEventListener('click' , closeModal)