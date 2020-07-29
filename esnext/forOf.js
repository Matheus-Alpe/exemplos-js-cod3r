//enquanto 'for in' itera em cima de indices, 'for of' itera em cima de valores
for (let letra of 'Cod3r') {
  console.log(letra)
}
//-----------------------------------------------------------
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // FOR IN
  console.log(i)
}

for (let assunto of assuntosEcma) { // FOR OF
  console.log(assunto)
}
//-----------------------------------------------------------
const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}
for (let chave of assuntosMap.keys()) {
  console.log(chave)
}
for (let valor of assuntosMap.values()) {
  console.log(valor)
}
for (let [ch, vl] of assuntosMap.entries()) { //utilizando destructuring
  console.log(ch, vl)
}
//-----------------------------------------------------------
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}
