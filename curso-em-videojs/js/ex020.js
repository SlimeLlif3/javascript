/*
var num = [5, 2, 9, 7]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var valores = [5, 10, 29, 16, 74]

for (var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} é igual a ${valores[pos]}`)
}
*/

var valores = [10, 14 , 29 , 16, 74]

valores.sort()
for(var pos in valores){
    console.log(`A posição ${pos} é igual a ${valores[pos]}`)

}