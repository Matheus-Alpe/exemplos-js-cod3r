// const nome = 'matheus'
// const letras = nome.split('')

// const possibilidades = ['ana']

// function existe(nome) {
//   for (let e of possibilidades) {
//     if (nome === e) return true
//   }
//   return false
// }

// function rand(max) {
//   const valor = Math.random() * max
//   return Math.floor(valor)
// }

// function geraNomes() {
//   let nomeResultado = ''
//   let contador = 0

//   while (contador < 10) {

//     for (let i in letras) {
//       let n = rand(nome.length - 1)
//       nomeResultado += letras[n]
//     }

//     if (!existe(nomeResultado)) {
//       console.log(nomeResultado)
//       possibilidades.push(nomeResultado)
//       nomeResultado = ''
//     } else {
//       contador++
//     }

//   }
// }

// geraNomes()
// console.log(possibilidades.filter(e => e.charAt(0) == 'm'))
// console.log(possibilidades.sort())

const msg = 'Olá'

const getFrase = (m) => {
  return new Promise((resolve, reject) => {
    m ? resolve(`${m} Matheus`) : reject(param)
  })
}

getFrase().catch(e => console.log(e.message))

getFrase(msg)
  .then(x => x.concat('!!!!'))
  .then(x => console.log(x))
  .catch(e => console.log(e.message))
