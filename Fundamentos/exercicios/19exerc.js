function calcularMedia(array) {
    return array.reduce((total, valor) => total + valor, 0) / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([5, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))