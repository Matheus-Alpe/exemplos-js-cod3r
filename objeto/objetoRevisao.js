// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{ //array de condutores
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 22
  }],
  calcularValorSeguro: function() {
    //...
  }
}
console.log('1 -', carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log('2 -', carro)


delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log('3 -', carro)

console.log('4 -', carro.condutores.length)
delete carro.condutores
console.log('5 -', carro.condutores) //undefined
// console.log('4 -', carro.condutores.length) //da erro por causa q é nullo/undefined