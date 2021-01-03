function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        if (numero == minimo || numero == maximo) return true;
        else if (numero >= minimo && numero <= maximo) return true;
        else return false;
    } else {
        if (numero > minimo && numero < maximo) return true;
        else return false;
    }
}

console.log(estaEntre(10, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true
