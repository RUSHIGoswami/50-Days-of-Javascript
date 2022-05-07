const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

leftbtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody()
    setActiveSlide()
})
rightbtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide === slides.length) {
        activeSlide = 0;
    }

    setBgToBody()
    setActiveSlide()
})
let activeSlide = 0;
setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active');
}
