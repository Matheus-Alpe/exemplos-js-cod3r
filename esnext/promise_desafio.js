const fs = require('fs')

function lerArquivo(path) {
  return new Promise(resolve => {
    fs.readFile(path, 'utf-8', (err, conteudo) => {
      resolve(conteudo.toString())
    })
  })
}


const caminho = __dirname + '/dados.txt'

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\r\n'))
  .then(linhas => linhas.join(', '))
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log)