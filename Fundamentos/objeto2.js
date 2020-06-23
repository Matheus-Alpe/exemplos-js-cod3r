console.log(typeof Object)
console.log(typeof new Object)//posso omitir
console.log(typeof new Object())//ou não os parênteses

const Cliente = function() {}

console.log(typeof Cliente) //função
console.log(typeof new Cliente) //objeto

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //função
console.log(typeof new Produto) //objeto