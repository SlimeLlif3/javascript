function gerar() {
    var num = document.querySelector('#txtnum')
    var res = document.querySelector('#itabuada')
    if (num.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            res.appendChild(item)
            c++
        }
    }
}