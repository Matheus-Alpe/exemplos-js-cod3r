function menorNumero(array) {
    return array.reduce((menor, atual) => {
        if(atual < menor) return atual;
        return menor;
    }, Infinity)
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))