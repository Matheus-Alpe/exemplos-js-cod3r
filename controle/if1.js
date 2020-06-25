function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com', nota)
  }
}

soBoaNoticia(7)
soBoaNoticia(6.9)

function isTrueOrFalse(valor) {
  if (valor) {
    console.log('É verdade...' + valor)
  }
}

isTrueOrFalse() //undefined - false
isTrueOrFalse(null) //false
isTrueOrFalse(undefined)//passando explicitamente - false 
isTrueOrFalse(NaN) //Not a Number - false
isTrueOrFalse('') //String vazia - false 
isTrueOrFalse(0) //numero zero - false
isTrueOrFalse(-1) //true
isTrueOrFalse(' ') //espaço na string - true
isTrueOrFalse('?') //true
isTrueOrFalse([]) //array vazio - true
isTrueOrFalse([1, 2]) //true
isTrueOrFalse({}) //objeto vazio - true
isTrueOrFalse({nome: 'Matheus'}) //true

