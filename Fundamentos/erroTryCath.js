function tratarErroELancar(erro) { //função tratando o erro
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final...');
    
  }
}

const pessoa2 = { name: 'Ana' }
const pessoa = { nome: 'Matheus' }

imprimirNomeGritado(pessoa2)
imprimirNomeGritado(pessoa)