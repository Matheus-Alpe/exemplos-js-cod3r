console.log('a =', a)
var a = 2
console.log('a =', a)



const teste = () => {//outra forma de função
  console.log('b =', b)
  var b = 2
  console.log('b =', b)
}
teste()

/*
  hoisting só funciona com Var
*/

//console.log('c =', c) //da erro
let c = 5
console.log('c =', c)