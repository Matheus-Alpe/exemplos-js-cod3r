
Array.prototype.forEach2 = function (callback) { //implementando forEach
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Agatha', 'Alda', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
  console.log(`${++indice}) ${nome}`)
})




