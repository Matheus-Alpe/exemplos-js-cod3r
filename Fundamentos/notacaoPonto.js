console.log(Math.ceil(6.1)) //arredonda para o maior

const obj1 = {}
obj1.nome = 'Bola' // outra forma de incluir um atributo ao objeto ->  obj1['apelido'] = 'ball'

obj1.getFrase = () => obj1.nome.concat(" é redonda") // função arrow retornando nome do objeto concatenando frase

console.log(obj1)
console.log(obj1.getFrase())

//-----------------------------
function Obj(nome) {
  this.nome = nome
  this.exerc = function () {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
obj2.exerc()
console.log(obj3.nome)
obj3.exerc()
