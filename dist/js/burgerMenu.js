// variables
const menuBtn = document.querySelector(".burger_menu-btn-opener"),
	burgerMenu = document.querySelector(".burger_menu"),
	closeBTN = document.querySelector(".burger_menu__close-btn"),
    body = document.getElementsByTagName("body")[0]

function openMenu() {
    burgerMenu.classList.toggle("active");
    body.classList.toggle('no-scroll')
}


menuBtn.addEventListener("click", openMenu);
closeBTN.addEventListener("click", openMenu);
