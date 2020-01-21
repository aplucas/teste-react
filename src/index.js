import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/multiplos'

import Saldacao from './componentes/saudacao'

ReactDOM.render(
    <div>
        {/* <Multi.BoaTarde nome="Lucas" />
        <BoaNoite nome="Suelen" /> */}

        <Saldacao nome="Lucas" tipo="Boa Tarde" />

    </div>,
    document.getElementById('root')
)