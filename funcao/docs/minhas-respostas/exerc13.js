const dias = [1, 2, 3, 4, 5, 6, 7]

dias.forEach(function(dia){
  switch(dia){
    case 1: case 7:
      console.log(dia, 'Fim de semana')
      break;
    case 2: case 3: case 4: case 5: case 6: 
      console.log(dia, 'Dia útil')
      break;
    default:
      console.log('Dia inválido')
  }
})