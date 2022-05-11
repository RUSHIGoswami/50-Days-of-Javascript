const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const spansize = document.getElementById('size');
const clear = document.getElementById('clear');

let size = 5;


increase.addEventListener('click', () => {
    size += 5;
    spansize.innerText = size;
})

decrease.addEventListener('click', () => {
    size -= 5;
    spansize.innerText = size;
})

let isPressed = false;
let x, y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = document.getElementById('color').value;
    ctx.fill();
}


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveto(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = document.getElementById('color').value;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}