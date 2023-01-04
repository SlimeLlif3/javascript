// Seleção de Elementos
const ligar = document.getElementById('turnOn')
const desligar = document.getElementById('turnOff')
const lampada = document.getElementById('lamp')






// Funções

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if ( !isLampBroken () ){
        lamp.src = './img/ligada.jpg'
    }
    
}
function lampOff (){
    if ( !isLampBroken () ){
        lamp.src = './img/desligada.jpg'
    }
    
}
function brokenLamp(){
    lamp.src= './img/quebrada.jpg'
}





//Eventos

ligar.addEventListener('click',lampOn)
desligar.addEventListener('click',lampOff)
lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseout',lampOff)
lampada.addEventListener('dblclick',brokenLamp )