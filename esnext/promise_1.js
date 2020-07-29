
const primeiroElemento = arrayOuString => arrayOuString[0]




new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letra => letra.toLowerCase())
  .then(console.log) 
//then() recebe apenas um único parâmetro