function receberSomenteOsParesDeIndicesPares(array) {
    return array.filter((elemento, indice) => {
        if (indice % 2 == 0 && elemento % 2 == 0) return elemento;
    })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));