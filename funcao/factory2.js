// Factory simples com parâmetro
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
} 

console.log(criarProduto('Mouse', 55.25))
console.log(criarProduto('Teclado', 225.50))
console.log(criarProduto('Notebook', 2225.50))