const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]
// DESAFIO - Retornar um array apenas com os preços

//-------------------------------------------------------------
//resolução do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
//-------------------------------------------------------------
//minha resolução
const retornaPreco = e => {
  let arrayObjetos = e.map(function (item) {
    return JSON.parse(item)
  })

  arrayObjetos = arrayObjetos.map(function (obj) {
    return obj.preco
  })

  return arrayObjetos
}
console.log(retornaPreco(carrinho))