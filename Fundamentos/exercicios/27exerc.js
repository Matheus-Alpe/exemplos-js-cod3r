function inverter(objeto) {
    let resultado = {}
    Object.entries(objeto).forEach(([key, value]) => {
        resultado[value] = key;
    });
    return resultado;
}

console.log(inverter({ a: 1, b: 2, c: 3}))
