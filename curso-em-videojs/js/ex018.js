function contar() {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var passo = document.querySelector('#txtp')
    var res = document.querySelector('.res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido!Considerando passo 1')
            p=1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`

            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }


    }
}