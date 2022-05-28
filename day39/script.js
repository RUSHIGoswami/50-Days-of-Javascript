const pass = document.getElementById('password')
const bg = document.getElementById('background')

pass.addEventListener('input', (e) => {
    const input = e.target.value
    const len = input.length
    const blurVal = 20 - len * 2
    bg.style.filter = `blur(${blurVal}px)`
})
