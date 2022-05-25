const container = document.getElementById('container');
const colors = ['#b33b3b', '#d7ea12', '#fddb32', '#48ff00', '#0fb360', '#44c5d6', '#1c77ff', '#1e00fe', '#8b159f', '#f10867'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px rgb(0,0,0)'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}