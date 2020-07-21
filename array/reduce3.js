
Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceIndicial = valorInicial ? 0 : 1
  let acumulador = valorInicial || this[0]
  for (let i = indiceIndicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}



const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: true },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const d1 = alunos.map(a => a.bolsista).reduce2(todosBolsistas, false)
console.log("Todos os alunos são bolsistas?", d1)

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 4))