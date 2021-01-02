function calcularSalario(horasTrabalhadas, salarioHora) {
    if(!horasTrabalhadas || !salarioHora) {
        console.log('preencha os campos');
        return;
    }

    console.log(`Salário igual a R$ ${salarioHora * horasTrabalhadas}`)
}

calcularSalario(150)
calcularSalario(150 , 40.5)