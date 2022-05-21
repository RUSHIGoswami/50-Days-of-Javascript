const resultEL = document.getElementById('result');
const lengthEl = document.getElementById('length');
const clipboard = document.getElementById('clipboard');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('numbers');
const symbolEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


generateEL.addEventListener('click', () => {
    const length = lengthEl.value;
    const haslower = lowercaseEL.checked
    const hasupper = uppercaseEl.checked
    const hasnumber = numberEL.checked
    const hassymbol = symbolEL.checked

    resultEL.innerText = generatePassword(haslower, hasupper, hasnumber, hassymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typeCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typeCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typeCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPass = generatedPassword.slice(0, length)
    return finalPass
}

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEL.innerText

    if (!password) { return }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}