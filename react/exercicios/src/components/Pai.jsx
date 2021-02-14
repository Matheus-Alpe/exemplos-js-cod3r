import React from 'react'
// import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'


const Pai = props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
        {/* operador spread passando pra outro componente */}
        {/* <Filho {...props} /> */}
        {/* operador spread sobrescrevendo atributo do props */}
        {/* <Filho {...props} nome="Carla" /> */}

        {/* pega os filhos invacado fora do componente */}
        {/* {props.children} */}


        {/* diferentes formas para instaciar outros componentes filhos */}

        {
            // map do react (array, objetoAtual)
            childrenWithProps(props)           
        }
    </ul>
</div>

export default Pai