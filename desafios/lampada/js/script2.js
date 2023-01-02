const lamp = document.querySelector('lamp')
const turnOn = document.querySelector('turnOn')
const turnOff = document.querySelector('turnOff')


function isBrokenLamp(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    lamp.src = 'img/ligada.jpg'
}
function lampOff(){

}




function brokenLamp(){
    lamp.src = 'img/quebrada.jpg'
}



turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover',turnOn)
lamp.addEventListener('mouseout',turnOff)
lamp.addEventListener('dblclick', brokenLamp)