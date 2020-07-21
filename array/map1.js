//map serve para mapear, o tamanho do array permanece o mesmo
const nums =  [1, 2, 3, 4, 5]
console.log(nums, '-> Array original')

//map é um for com propósito
let resultado = nums.map(function (e){ //map tem que ter retorno
  return e * 2
})
console.log(resultado, '-> Dobro')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10)
console.log(resultado, '-> Soma 10')

resultado = nums.map(triplo)
console.log(resultado, '-> Triplo')

resultado = nums.map(paraDinheiro)
console.log(resultado, '-> Para Dinheiro')

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log('soma10, triplo e paraDinheiro ->', resultado)