// Object.preventExtensions - não permite adicionar novos atributos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolhar branca' //não vai adicionar ao objeto
delete produto.tag
console.log(produto)

// Object.seal - não permite adicionar ou remover atributos, mas permite alterar os valores dos atributos
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.nome = 'Carla'
pessoa.cabelo = 'Escuro'
delete pessoa.idade
console.log(pessoa)

// Object.freeze - seleado + valores constantes (não consegue adicionar, remover e alterar valores dos atributos)
