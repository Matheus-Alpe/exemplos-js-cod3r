/*// exemplo de callback no browser  - executar no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
  console.log('O evento ocorreu!')
}
*/


const pessoa = [
  { id: 1, nome: 'Matheus', idade: 10 },
  { id: 2, nome: 'Ana', idade: 18 },
  { id: 3, nome: 'Marcos', idade: 20 },
  { id: 1, nome: 'Carlos', idade: 8 }
]

const maiorIdade = pessoa.filter(pessoa => pessoa.idade >=18)
console.log(maiorIdade)

const findID = pessoa.filter(pessoa => pessoa.id == 1)
console.log(findID)