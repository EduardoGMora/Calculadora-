let resultado = document.querySelector('#resultado')
let value = 0

document.querySelectorAll('.botones__num').forEach (boton => {
    boton.addEventListener('click', (e) => {
        let number = e.target.innerText

        if (value == '0') {
            value = number.toString()
        } else {
            value += number.toString()
        }


        boton.style.backgroundColor = 'white'
        boton.style.color = '#2C2C2C'

        setTimeout(function() {
            boton.style.backgroundColor = '#2C2C2C'
            boton.style.color = 'white'
        }, 100)
        updateDisplay()
    })
})

document.getElementById('porcentaje').addEventListener('click', () => {
    value = value / 100
    updateDisplay()
})

document.getElementById('masmenos').addEventListener('click', () => {
    value = value * -1
    updateDisplay()
})

function addOperator(operator) {
    if (value == '0') {
        return
    }
    value += operator.toString()
    updateDisplay()
}

document.getElementById('clearAll').addEventListener('click', () => {
    value = '0'
    updateDisplay()
})


function calculate(){
    try {
        value = eval(value)
        updateDisplay()
    } catch (e){
        console.log(e)
        value = 'Sintax Error'
        updateDisplay()
    }
}

function updateDisplay() {
    resultado.innerText = value
}
