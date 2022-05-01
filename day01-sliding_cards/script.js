const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeactivclass();
        panel.classList.add('active');
    })
})

function removeactivclass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}