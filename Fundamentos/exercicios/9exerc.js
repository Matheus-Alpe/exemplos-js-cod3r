function repetir(valor, qt) {
    let resultado = []
    if (!valor || !qt) return resultado;

    for(let i = 0; i < qt; i++) resultado.push(valor);
    return resultado;
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))
console.log(repetir(7))
console.log(repetir())