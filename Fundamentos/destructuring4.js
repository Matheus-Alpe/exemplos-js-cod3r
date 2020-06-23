//destruturando dentro de parâmetro de uma função
//parâmetro recebendo um array, com valores padrão
function rand([min = 0, max = 1000]) {
  console.log([min, max])
  if (min > max) [min, max] = [max, min] //invertendo caso min seja maior que max
  console.log([min, max])
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 30]))
console.log(rand([350]))
console.log(rand([1350]))
console.log(rand([, 350]))
console.log(rand([])) //array vazio, valores padrões da função

const valores = [100, 500, 23, 43]
console.log(rand(valores))
console.log(rand([valores[2], valores[3]]))

const valoresVazio = []
console.log(rand(valoresVazio)) //array vazio, valores padrões da função