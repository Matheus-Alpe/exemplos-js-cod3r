function multiplicar(x, y) {
    let resultado = 0;

    if(x == 0 || y == 0) return resultado;
    
    for (let i = 0; i < x; i++) {
        resultado += y;
    }
    return resultado;
}

console.log(multiplicar(5, 5))
console.log(multiplicar(10, 5))
console.log(multiplicar(3, 3))
console.log(multiplicar(0, 5))