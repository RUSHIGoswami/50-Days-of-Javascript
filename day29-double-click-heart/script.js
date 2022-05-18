const loveme = document.querySelector('.loveme')
const times = document.querySelector('#times')
let clickTIme = 0
let timesClicked = 0

loveme.addEventListener('click', (e) => {
    if (clickTIme === 0) {
        clickTIme = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTIme) < 800) {
            createHeart(e)
            clickTIme = 0
        } else {
            clickTIme = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const offsetX = e.target.offsetLeft
    const offsetY = e.target.offsetTop

    const Xinside = x - offsetX
    const Yinside = y - offsetY

    heart.style.top = `${Yinside}px`
    heart.style.left = `${Xinside}px`
    loveme.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() =>
        heart.remove(), 5000)
}