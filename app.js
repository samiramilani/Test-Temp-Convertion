
let input = document.querySelector('.converter')
let convertButton = document.querySelector('.convertButton')
let resetButton = document.querySelector('.resetButton')
let changeButton = document.querySelector('.changeButton')
let result = document.querySelector('.result')
let c = document.querySelector('.C')
let f = document.querySelector('.F')
let res = null


let converter = () => {
    if (!isNaN(input.value)) {
        if (input.placeholder === '°C') {
            res = (1.8 * input.value) + 32
            result.innerHTML = res + '°F'
        } else {
            res = (input.value - 32) / 1.8
            result.innerHTML = res + '°C'
        }
    } else {
        result.innerHTML = 'Enter Valid Number'
    }
}
let inputHandler = (event) => {
    if (event.keyCode === 13) {
        converter()
    }
}
let converHandler = () => {
    converter()
}
let resetHandler = () => {
    result.innerHTML = ''
    input.value = ''
}
let changeHandler = () => {
    result.innerHTML = ''
    if (input.placeholder === '°C') {
        input.placeholder = '°F'
        c.innerHTML = '°F'
        f.innerHTML = '°C'
    } else {
        input.placeholder = '°C'
        c.innerHTML = '°C'
        f.innerHTML = '°F'
    }
}

convertButton.addEventListener('click', converHandler)
resetButton.addEventListener('click', resetHandler)
changeButton.addEventListener('click', changeHandler)
input.addEventListener('keypress', inputHandler)