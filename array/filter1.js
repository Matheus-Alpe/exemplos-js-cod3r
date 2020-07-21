const notas = [{ nome: 'Matheus', nota: 7 }, { nome: 'Ana', nota: 9 }, { nome: 'Felipe', nota: 6 }, { nome: 'Ismael', nota: 3 }]

let resultado = notas.filter(function (e) {
  if (e.nota >= 7) {
    return e
  }
})

console.log(resultado)

//---------------------------------------------
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Prod', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
  return false //vai retornar um array vazio
}))

const isCaro = produto => produto.preco >= 500
const isFragil = produto => produto.fragil

console.log(produtos.filter(isCaro).filter(isFragil))