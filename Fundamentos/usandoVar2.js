var numero = 1
console.log('Fora =', numero)


function teste(){
  var numero = 2
  console.log('Dentro =', numero)
}
teste()

{ //outro escopo de código
  var numero = 3
  console.log('Dentro =', numero)
}
console.log('Fora =', numero)