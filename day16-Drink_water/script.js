const smallcups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

updateBigcup();

smallcups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCupd(idx))
})

function highlightCupd(idx) {
    if (smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    smallcups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigcup()
}

function updateBigcup() {
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalcup = smallcups.length

    if (fullcups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullcups / totalcup * 330}px`;
        percentage.innerText = `${fullcups / totalcup * 100}%`;
    }
    if (fullcups === totalcup) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullcups / 1000)}L`;
    }
}