function carregar() {
    var msg = document.querySelector('.msg')
    var img = document.querySelector('.ft')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora <= 12) {
        img.src = '../img/fotomanha.jpg'
        document.body.style.background = 'darkyellow'
    } else if (hora > 12 && hora <= 18) {
        img.src = '../img/fototarde.jpg'
        document.body.style.background = 'darkorange'
    }
    else {
        img.src = '../img/fotonoite.jpg'
        document.body.style.background = 'darkblue'
    }
}


