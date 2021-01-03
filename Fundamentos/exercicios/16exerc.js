function checarAnoBissexto(ano) {
    if (ano % 4 == 0) {
        if (ano % 100 == 0 ) {
            if (ano % 400 == 0) return true;
            return false;
        }
        return true;
    }
    return false;
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2400))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(2809))
console.log(checarAnoBissexto(2808))
console.log(checarAnoBissexto(2888))