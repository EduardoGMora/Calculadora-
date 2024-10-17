let resultado = document.querySelector('#resultado')
let value = 0

function addNumb(number) {
    if (value == '0') {
        value = number.toString()
    } else {
        value += number.toString()
    }
    boton = document.getElementById(number)
    boton.style.backgroundColor = 'white'
    boton.style.color = '#2C2C2C'

    setTimeout(function() {
        boton.style.backgroundColor = '#2C2C2C'
        boton.style.color = 'white'
    }, 100)
    updateDisplay()
}

function addOperator(operator) {
    if (value == '0') {
        return
    }
    value += operator.toString()
    updateDisplay()
}

function clearAll() {
    value = '0'
    updateDisplay()
}

function calculate(){
    try {
        value = eval(value)
        updateDisplay()
    } catch (e){
        console.log(e)
    }
}

function updateDisplay() {
    resultado.textContent = value
}
