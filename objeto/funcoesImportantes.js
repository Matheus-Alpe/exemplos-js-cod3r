const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
  endereco: {
    logradouro: 'Rua Abc',
    numero: 333
  }
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa)) // pega todas os valores do objeto
console.log(Object.entries(pessoa)) //transforma em array cada chave / valor do objeto

Object.entries(pessoa).forEach(([chave, valor]) => { //utilizando destructuring
  console.log(`${chave}: ${valor}`)

  if (typeof valor == 'object') {
    Object.entries(pessoa.endereco).forEach(([chave, valor]) => {
      console.log(`${chave}: ${valor}`)
    })
  }
})

Object.defineProperty(pessoa, 'dataNascimento', {//primeiro o target q é 'pessoa', segundo é o nome atributo entre áspas
  enumerable: false, //ser listada,
  writable: false, //ser reescrita,
  value: '01/01/2019' //valor do atributo
}) //define propriedade do objeto

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) //dataNascimento enumerable = false não aparece na listagem do keys()

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //concatena dados no primeiro objeto passado no parâmetro
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)