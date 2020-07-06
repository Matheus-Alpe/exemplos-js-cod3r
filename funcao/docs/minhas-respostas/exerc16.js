function calculadora(v1 = 0, operacao, v2 = 0) {
  switch(operacao){
    case '+':
      return `${v1} + ${v2} = ${v1 + v2}`
    case '-':
      return `${v1} - ${v2} = ${v1 - v2}`
    case '*':
      return `${v1} * ${v2} = ${v1 * v2}`
    case '/':
      return `${v1} / ${v2} = ${v1 / v2}`
    default:
      return 'Operação inválida'
  }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))