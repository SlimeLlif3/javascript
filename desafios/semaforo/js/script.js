const img = document.querySelector('.img')
const buttons = document.getElementById('buttons')
var colorIndex = 0
var intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()

}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0
    }

}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}
const stopAutomatic = () => {
    clearInterval(intervalId)

}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 500)
}


buttons.addEventListener('click', trafficLight)