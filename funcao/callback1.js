const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
  console.log(`${indice + 1}. ${nome}`)
}

//callback
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
  console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante)) //mesma coisa, só transformada em fn arrow


console.log(fabricantes.filter(f => f.length > 3))

const revF = fabricantes.reverse()
console.log(revF)