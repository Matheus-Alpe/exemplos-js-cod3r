const fs = require('fs') // fs = file system, módulo interno do node
console.log(__dirname)
const caminho = __dirname + '/arquivo.json'

// sincrono... -> arquivos pesados podem travar o event loop, ter cuidado
const conteudo = fs.readFileSync(caminho, 'utf-8') //'leia um arquivo de forma sincrona'
console.log(conteudo)

// assincrona 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`) //executa dps por causa da forma assincrona
})

// Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})

/**
 * arquivos .json não necessita só do file system, existe outra forma de ler sendo mais simples
 */
const config = require('./arquivo.json') //arquivos .json já são convertidos para objeto no require
console.log('db config:', config.db)