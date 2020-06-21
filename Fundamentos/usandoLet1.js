let numero = 1

{ //escopo do bloco
  let numero = 2
  console.log('Dentro =', numero)
}

console.log('Fora =', numero)