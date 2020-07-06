function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

console.log(getPreco())

const produto = {
  nome: 'notebook',
  preco: 4589,
  desc: 0.15,
  getPreco //vai associar a função criada
}

console.log(produto.getPreco())


global.preco = 20
global.desc = 0.1

console.log(getPreco())

//call apply
const carro = { preco: 49990, desc: 0.20 }//novo objeto
console.log(getPreco.call(carro))//<- utilizando call
console.log(getPreco.apply(carro))//<- utilizando apply

//nos parâmetros do call, primeiro o contexto: obj Carro, depois parâmetros da função chamada getPreco(imposto, moeda)
console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(global, [0.17, '$']))
//nos parâmetros do apply, primeiro o contexto: global, depois array com os parâmetros da função