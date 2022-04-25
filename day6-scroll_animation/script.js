const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const trigger = window.innerHeight / 6 * 3;

    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;

        if (boxtop < trigger) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}