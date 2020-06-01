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


