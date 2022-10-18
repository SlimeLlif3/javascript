function verificar() {
    var img = document.createElement('img');
    img.setAttribute('id', 'foto')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('.res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../img/ex015/meninocriança.png')
            } else if (idade < 21) {
                img.setAttribute( 'src','../img/ex015/homemjovem.png')

            } else if (idade < 50) {
                img.setAttribute( 'src','../img/ex015/homemadulto.png')

            } else {
                img.setAttribute( 'src','../img/ex015/homemidoso.png')
            } 

            }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute( 'src','../img/ex015/meninacriança.png')
            } else if (idade < 21) {
                img.setAttribute( 'src','../img/ex015/mulherjovem.png')

            } else if (idade < 50) {
                img.setAttribute( 'src','../img/ex015/mulheradulta.png')
            }
            else {
                img.setAttribute( 'src','../img/ex015/mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}