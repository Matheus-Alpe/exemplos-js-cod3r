Number.prototype.inverte = function() {

  return Number(this.toString().split('').reverse().join(''))
}

let v = 123
v = v.inverte()
console.log(v)
console.log(typeof v)


/*

*/

String.prototype.reverse = function() { 
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())