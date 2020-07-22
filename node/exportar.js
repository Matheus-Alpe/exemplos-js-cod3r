console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(exports)
console.log(module.exports)

exports = { // não exportar dessa forma
  nome: 'Teste'
}
console.log(exports)
console.log(module.exports)

module.exports = { public: true } // sempre exportar dessa forma