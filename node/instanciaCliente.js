const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // () no final, para chamar a função factory - importante
const contadorD = require('./instanciaNova')()

//-------- testes 
contadorA.inc()
contadorA.inc()
console.log(`B - ${contadorB.valor} |`, `A - ${contadorA.valor}`) //valor armazenado em cache, padrão do node

contadorC.inc()
contadorC.inc()
console.log(`D - ${contadorD.valor} |`, `C - ${contadorC.valor}`) //valores independentes por causa da factory