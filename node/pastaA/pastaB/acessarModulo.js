const moduloA = require('../../moduloA.js')
console.log(moduloA.ola)

const c = require('./pastaC') //acessando o arquivo importado através do index.js, nomeclatura faz diferença
console.log(c.ola2)


// criando servidor local
// const http = require('http') // módulo interno do node
// http.createServer((req, res)=>{
//   res.write('Bom dia!')
//   res.end()
// }).listen(8080)