const sliderContainer = document.querySelector(".slider-container");
const rightside = document.querySelector(".right-side");
const leftside = document.querySelector(".left-side");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sliderLength = rightside.querySelectorAll("div").length;

let activeslideIndex = 0;

leftside.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide('up'))
downButton.addEventListener("click", () => changeSlide('down'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeslideIndex++;
        if (activeslideIndex > sliderLength - 1) {
            activeslideIndex = 0;
        }
    } else if (direction === 'down') {
        activeslideIndex--;
        if (activeslideIndex < 0) {
            activeslideIndex = sliderLength - 1;
        }
    }
    rightside.style.transform = `translateY(-${activeslideIndex * sliderHeight}px)`
    leftside.style.transform = `translateY(${activeslideIndex * sliderHeight}px)`
}