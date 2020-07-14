// Toda função tem .prototype
console.log(typeof String) // Function
console.log(typeof Array) // Function
console.log(typeof Object) // Function
console.log(typeof Number) // Function

String.prototype.reverse = function() { 
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

/*
    não substituir funções ja existentes
*/