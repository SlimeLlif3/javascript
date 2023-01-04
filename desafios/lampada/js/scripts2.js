//Seleção de Elementos
const ligada = document.getElementById('turnOn')
const desligada = document.getElementById('turnOff')
const lampada = document.getElementById('lamp')





//Funções

function lampIsBroken(){
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn(){
    if ( !lampIsBroken() ){
    lamp.src = ('./img/ligada.jpg')
    }
}

function lampOff(){
    if ( !lampIsBroken() ){
    lamp.src = ('./img/desligada.jpg')
    }
}
function lampBroken(){
    lamp.src = ('./img/quebrada.jpg')
}



//Eventos


ligada.addEventListener('click', lampOn)
desligada.addEventListener('click', lampOff)
lampada.addEventListener('mouseover', lampOn)
lampada.addEventListener('mouseout', lampOff)
lampada.addEventListener('dblclick', lampBroken)
