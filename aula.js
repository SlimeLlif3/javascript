// let idade = 5;
// console.log(idade);
// let altura = 180;
// console.log(altura);
// camelCase

//Tipagem dinamica e objetos
let nome = 'Yan';
let idade = 20;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome: 'Yan',
    idade:20,
    estaAprovado: true,
    sobrenome:'Lucas',
    altura:173,
    peso:70,
    nomeCompleto:'Yan Lucas da Mata Fernandes'
}

console.log(pessoa)

//Arrays

let familia = [26,45,50,17]

console.log(familia.length);
console.log(familia[1])

let nomeDoColega = ['Vinicius', 22, 'Lagoa Santa']
console.log(nomeDoColega[2])

//Verbo + Substantivo

let corSite = "azul";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
}

console.log(corSite);
resetaCor("Verde"," Claro");
console.log(corSite);

//Realizar uma tarefa, não devolve nada


