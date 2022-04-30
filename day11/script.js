const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class="key">
            ${e.key === ' ' ? 'space' : e.key}
            <small>evet.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>evet.code</small>
        </div>`
})