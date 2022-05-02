const textarea = document.querySelector('.textarea');
const choices = document.querySelector('.choices');

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    createtags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect()
    }
});

function createtags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    choices.innerHTML = '';

    tags.forEach(tag => {
        const choice = document.createElement('span');
        choice.classList.add('choice');
        choice.innerHTML = tag;
        choices.appendChild(choice);
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTags = pickRandomTag();
        highlightTag(randomTags);

        setTimeout(() => {
            unhighlightTag(randomTags);
        }, 100)
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTags = pickRandomTag();
            highlightTag(randomTags);
        })
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.choice');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('picked');
}
function unhighlightTag(tag) {
    tag.classList.remove('picked');
}