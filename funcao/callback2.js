//diferenças entre com e sem call back
const notas = [7.5, 10, 8.4, 6.9, 5.5, 9.1, 3.1]

//sem uso de callback - exemplo
const notasBaixas1 = []

for(let i in notas){
  if(notas[i] < 7){
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)


//com uso de callback 
const notasBaixas2 = notas.filter(function (nota){
  return nota < 7
})
console.log(notasBaixas2)

//msm coisa q notasBaixas2, so q com fn arrow
const notasBaixas3 = notas.filter(nota => nota < 7) 
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)