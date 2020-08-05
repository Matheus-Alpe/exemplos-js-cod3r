const pessoa = {
  * definirNome(nome) {
    yield nome;
    yield nome + ' Alves';
    yield nome + ' Alves' + 123;
  }
}

const gen = pessoa.definirNome('Matheus')
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

console.log('\n\n\n')

let cc = 'Matheus alves'
console.log(cc.slice(-2))
console.log(cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4))