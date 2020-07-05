
console.log(soma(3, 4)) // funciona porque é do tipo 'function declaration'
/*
console.log(sub(3, 4)) // da erro, só pode chamar dps q declarada
console.log(mult(3, 4)) // da erro, só pode chamar dps q declarada
*/

// function declaration
function soma(x, y) {  // esse tipo de função é carregado primeiro no codigo JS
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}

// named function expression 
const mult = function mult(x, y) { //essa forma é pouca usada
  return x * y
}