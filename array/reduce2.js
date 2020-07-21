const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: true },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const d1 = alunos.map(a => a.bolsista).reduce(todosBolsistas, false)
console.log("Todos os alunos são bolsistas?", d1)

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const d2 = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log("Algum aluno é bolsista?", d2)