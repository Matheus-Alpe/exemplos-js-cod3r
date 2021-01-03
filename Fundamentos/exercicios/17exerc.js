function somarNumeros(array) {
    return array.reduce((total, atual) => total + atual, 0);
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))