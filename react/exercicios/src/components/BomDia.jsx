import React, { Fragment } from 'react'
//Novas versões do React não precisa do imoprt

//Fragment é quando for para envolver algo sem precisar de outro elemento
export default props => 
    <Fragment> 
        <h1>Bom dia {props.nome}!</h1>
        <h2>Você tem {props.idade} anos!!</h2>
    </Fragment>

//pode ser retornado por uma div
// export default props => 
//     <div> 
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Você tem {props.idade} anos!!</h2>
//     </div>

//pode ser retornado por um array
// export default props => [
//     <h1 key="h1">Bom dia {props.nome}!</h1>,
//     <h2 key="h2">Você tem {props.idade} anos!!</h2>
// ]