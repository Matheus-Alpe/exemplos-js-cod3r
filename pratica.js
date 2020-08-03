const pessoa = {
  *definirNome(nome) {
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