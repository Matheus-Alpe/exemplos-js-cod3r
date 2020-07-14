const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // ja estabelece relação de protótipo com pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //só aparece pq foi definido um nome na linha 4, não aparece atributos da herança
console.log(Object.keys(filha2)) // [ 'nome' ] por causa do 'enumerable: true'

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

