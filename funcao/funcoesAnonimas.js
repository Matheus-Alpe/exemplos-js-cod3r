const soma = function (x, y){
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //função soma é o default da operação
  console.log(operacao(a, b))
}

imprimirResultado(3, 4) 
imprimirResultado(3, 4, soma) 
imprimirResultado(3, 4, function (x, y) { //criando uma função anônima como parâmetro para operação
  return x - y
}) 
imprimirResultado(3, 4, (x, y) => x * y) //arrow function como parâmetro para operação

const pessoa = { //há duas formas de passar
  falar: function () { //1ª - passando como atributo de objeto -- esse representa 'função anônima'
    console.log('Opa')
  },
  cantar(){//2ª - nova forma 
    console.log('Cantaaaando!')
  }
}

pessoa.falar()
pessoa.cantar()