import React from 'react'
import ReactDOM from 'react-dom'

//componentes precisam ser nomeado com letra Maiscula no inicio
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'
// import BoaMadrugada, { BoaTarde, BoaNoite} from './components/Multiplos'

ReactDOM.render(
    <div>
        <Saudacao nome="Matheus" tipo="Bom dia"/>
        <hr/>
        <Pai nome="Matheus" sobrenome="Alves Pereira">
            <Filho nome="Pedro" />
            <Filho nome="Carla" sobrenome="Oliveira"/>
            <Filho nome="Silvia" />
        </Pai>
        {/* <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
        <BoaMadrugada nome="Carlos" /> */}
    </div>    
, document.getElementById('root'))
