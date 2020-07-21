const escola = [{
  nome: 'Turma M1',
  alunos: [
    { nome: 'Pedro', nota: 9.8 },
    { nome: 'Ana', nota: 8.7 }
  ]
}, {
  nome: 'Turma M2',
  alunos: [
    { nome: 'Matheus', nota: 9.2 },
    { nome: 'Carla', nota: 6.5 }
  ]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) { //não existe essa função 
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)