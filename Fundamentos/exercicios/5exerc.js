function maiorOuIgual(x, y) {
    if(x === null || x === undefined || y === null || y === undefined || typeof x === 'string' || typeof y === 'string') return false;
    else if(x >= y) return true;
    else return false;
}

console.log("0, 0", maiorOuIgual(0, 0))
console.log('0, "0"',maiorOuIgual(0, "0"))
console.log("5, 1", maiorOuIgual(5, 1))
console.log("1, 5", maiorOuIgual(1, 5))