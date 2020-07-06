function calcularVenda(codigo, qtd = 0){
  switch(codigo){
    case 100:
      return `${qtd} uni. Cachorro Quente, total: R$${(3 * qtd).toFixed(2)}`
    case 200:
      return `${qtd} uni. Hambúrguer Simples, total: R$${(4 * qtd).toFixed(2)}`
    case 300:
      return `${qtd} uni. Cheeseburguer, total: R$${(5.5 * qtd).toFixed(2)}`
    case 400:
      return `${qtd} uni. Bauru, total: R$${(7.5 * qtd).toFixed(2)}`
    case 500:
      return `${qtd} uni. Refrigerante, total: R$${(3.5 * qtd).toFixed(2)}`
    case 600:
      return `${qtd} uni. Suco, total: R$${(2.8 * qtd).toFixed(2)}`
    default:
      return 'Produto não existente'
  }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 1))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))