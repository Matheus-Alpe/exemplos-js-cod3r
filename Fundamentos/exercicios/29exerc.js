function segundoMaior(array) {
    let primeiro = array.reduce((maior, atual) => {
        if (atual > maior) {
            return atual
        };
        return maior;
    }, 0);

    return array.reduce((maior, atual) => {
        if (atual > maior && atual != primeiro) {
            return atual
        };
        return maior;
    }, 0);
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));