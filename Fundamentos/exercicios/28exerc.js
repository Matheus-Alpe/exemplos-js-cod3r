function filtrarPorQuantidadeDeDigitos(array, qtCasas) {
    return array.filter(elemento => {
        if(String(elemento).length == qtCasas) return elemento;
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 3));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));