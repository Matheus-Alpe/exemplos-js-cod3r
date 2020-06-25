function soma() { //toda função tem esse array interno 'arguments'
  let soma = 0
  for (let i in arguments) {
    soma += arguments[i] //arguments é um array interno dentro de uma função
  }
  return soma
}
console.log(soma())
console.log(soma(2))
console.log(soma(2, 3))
console.log(soma(2, 3, 10, 15))
console.log(soma(2, 3, 'Teste'))
console.log(soma(2.1, 3.2, 'Teste'))//imprecisão
console.log(soma('a', 'b', 'c'))//output = 0abc