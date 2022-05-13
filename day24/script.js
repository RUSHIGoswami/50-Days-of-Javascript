const animated_bg = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

window.setTimeout(removeanimation, 300)

function removeanimation() {
    animated_bg.forEach((e) => {
        e.classList.remove('animated-bg')
    })
    animated_bg_text.forEach((e) => {
        e.classList.remove('animated-bg-text')
    })
}