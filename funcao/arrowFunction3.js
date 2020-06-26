let comparaComThis = function (param) {
  console.log(this === param) // mexendo no escopo global
}

comparaComThis(global)
comparaComThis(this)

console.log("");
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log("");
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // é o arquivo local criado
comparaComThisArrow(this)

console.log("");
comparaComThisArrow = comparaComThisArrow.bind(obj) //bind aqui não funciona por causa da função arrow
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)