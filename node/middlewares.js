// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => { //ctx = contexto, comunicar os dados de uma função para outra
  ctx.valor1 = 'mid1'
  next() 
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next() 
}

const passo3 = ctx => ctx.valor3 = 'mid3' //suprimiu o proximo passo 'next'


const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1))
  }

  execPasso(0)
}

const ctxObjeto = {}

exec(ctxObjeto, passo1, passo2, passo3) //output: { valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }
console.log(ctxObjeto)

// exec(ctxObjeto, passo2, passo3) //output: { valor2: 'mid2', valor3: 'mid3' }
// console.log(ctxObjeto)

// exec(ctxObjeto, passo3, passo1, passo2) //output: { valor3: 'mid3' }
// console.log(ctxObjeto)