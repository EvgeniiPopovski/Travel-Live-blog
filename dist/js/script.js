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
	arrowLeft = document.querySelector(".slaider__button-left"),
	arrowRight = document.querySelector(".slaider__button-right"),
	smallSlides = document.querySelectorAll(".slide"),
	smallSlidesLoader = document.querySelectorAll('.loader');


const claerActiveClass = (NodeLIst) => {
	for (let k = 0; k < NodeLIst.length; k++) {
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
			claerActiveClass(smallSlidesLoader)
			smallSlidesLoader[i].classList.add('active')
		}
	}
}

for (let i = 0; i < smallSlides.length; i++) {
	smallSlides[i].addEventListener("click", changeSlide);
}

const onleftArrowClick = (arrayNode) => {
	for (let k = 0; k < arrayNode.length; k++) {
		if (arrayNode[0].classList.contains('active')){
			break
		}
		if (arrayNode[k].classList.contains("active")) {
			arrayNode[k].classList.remove('active');
			arrayNode[k-1].classList.add('active')
		}
	}
}

const onRightArrowClick = (arrayNode) => {
	for (let k = 0; k < arrayNode.length; k++) {
		if (arrayNode[bigSlides.length-1].classList.contains('active')){
			break
		}
		if (arrayNode[k].classList.contains("active")) {
			arrayNode[k].classList.remove('active');
			arrayNode[k+1].classList.add('active')
			break
		}
	}
}

const activeLeftSlide = () => {
	onleftArrowClick(bigSlides);
	onleftArrowClick(smallSlidesLoader)
};
const activeRighttSlide = () => {
	onRightArrowClick(bigSlides);
	onRightArrowClick(smallSlidesLoader)
};



arrowLeft.addEventListener('click' , activeLeftSlide)
arrowRight.addEventListener('click' , activeRighttSlide)


;
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
    let email = input.value;
    spanEmail.textContent = email;
    modaLlayer.classList.remove('hidden')
}

const closeModal = (e) => {
    if (e.target == closeBtn || e.target == modaLlayer) {
        modaLlayer.classList.add('hidden')
    }
}

btnFooter.addEventListener('click' , openModal)
closeBtn.addEventListener('click' , closeModal)
modaLlayer.addEventListener('click' , closeModal)