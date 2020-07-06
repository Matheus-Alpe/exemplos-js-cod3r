/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/
function comparaString(s1, s2) {
  let status = true
  for (let i = 0; i < s1.length; i++) {
    let s1Char = s1.charAt(i).toLowerCase()

    for (let x = 0; x < s2.length; x++) {

      let s2Char = s2.charAt(x).toLowerCase()
      if (s1Char === s2Char) {
        status = true
        break
      } else {
        status = false
      }

    }

    if (!status) {
      return status
    }

  }
  return status
}

console.log(comparaString('cba', 'abc'))
console.log(comparaString('cba', 'ac'))
console.log(comparaString('Matheus', 'Suehtam'))