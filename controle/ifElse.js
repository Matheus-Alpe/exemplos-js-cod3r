const imprimirResultado = function (nota) {
  if(typeof nota === 'number'){ //uma forma de tratar o tipo de valor recebido
    if (nota >= 7) {
      console.log('Aprovado!')
    } else {
      console.log('Reprovado!')
    }
  } else {
    console.log('Insira um valor válido!')
  }
}

imprimirResultado(7)
imprimirResultado(6.9)
imprimirResultado('Epa!') //cuidado maior com linguagem fracamente tipada
imprimirResultado('7') //se não tratado, esse tipo funciona


// function isTrueOrFalse(valor) {
//   if (valor) {
//     console.log('is true...' + valor)
//   } else {
//     console.log('is false...' + valor)
//   }
// }

// isTrueOrFalse() //undefined - false
// isTrueOrFalse(null) //false
// isTrueOrFalse(undefined)//passando explicitamente - false 
// isTrueOrFalse(NaN) //Not a Number - false
// isTrueOrFalse('') //String vazia - false 
// isTrueOrFalse(0) //numero zero - false
// isTrueOrFalse(-1) //true
// isTrueOrFalse(' ') //espaço na string - true
// isTrueOrFalse('?') //true
// isTrueOrFalse([]) //array vazio - true
// isTrueOrFalse([1, 2]) //true
// isTrueOrFalse({}) //objeto vazio - true
// isTrueOrFalse({ nome: 'Matheus' }) //true