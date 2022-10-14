
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora > 0 && hora <= 5) {
    console.log('Boa Madrugada!')
}
else if (hora > 5 && hora <= 12) {
    console.log('Bom dia!')
}
else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}