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
;
const bigSlides = document.querySelectorAll(".slaider__big-slide"),
	arrowLefr = document.querySelector(".slaider__button-left"),
	arrowRight = document.querySelector(".slaider__button-left"),
	smallSlides = document.querySelectorAll(".slide");

let activeElement;

const claerActiveClass = (NodeLIst) => {
	for (let k = 0; k < bigSlides.length; k++) {
		if (NodeLIst[k].classList.contains("active")) {
			NodeLIst[k].classList.remove("active");
		}
	}
};

function changeSlide(e) {
	for (let i = 0; i < smallSlides.length; i++) {
		if (e.target == smallSlides[i]) {
            claerActiveClass(bigSlides)
            bigSlides[i].classList.add("active");
		}
	}
}

for (let i = 0; i < smallSlides.length; i++) {
	smallSlides[i].addEventListener("click", changeSlide);
}
;
