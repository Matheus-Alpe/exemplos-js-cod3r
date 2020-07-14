// pessoa -> (aponta) 123 -> {...} (endereço de memória)
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- (atriuindo novamente)-> 456 -> {...}
// pessoa = { nome: 'Ana' } //da erro

Object.freeze(pessoa) //não consegue mais mexer no objeto

pessoa.nome = 'Maria' //não vai definir novo nome por causa do método 'freeze'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'}) //ja criou objeto para não ser mudado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)