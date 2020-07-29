function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?!')) //cada then passa como resultado para o proximo then, ou seja, vai acumulando
  .then(outraFrase => console.log(outraFrase, 'AAAAAAAAAA'))
  .catch(e => console.log(e)) //forma para tratar erro, ou seja 'reject' da promise
