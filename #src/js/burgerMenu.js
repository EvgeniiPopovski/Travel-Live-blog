// variables
const menuBtn = document.querySelector(".burger_menu-btn-opener"),
	burgerMenu = document.querySelector(".burger_menu"),
	closeBTN = document.querySelector(".burger_menu__close-btn"),
    body = document.getElementsByTagName("body")[0]
    // link = 

function openMenu() {
    burgerMenu.classList.toggle("active");
    body.classList.toggle('no-scroll')
}

// for (let i = 0; i < link)

menuBtn.addEventListener("click", openMenu);
closeBTN.addEventListener("click", openMenu);

