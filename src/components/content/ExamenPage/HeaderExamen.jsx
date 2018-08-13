import React from 'react'
import {Card} from 'antd';

export const HeaderExamen=({examen})=>{
    return(
        <div className="header-examen">
        
        <Card >
            <div>
               <h2>{examen.titulo_examen}</h2>
               <p>Es hora de demostrar que tanto aprendiste del tema contesta la siguiente evaluació</p>
            </div>
        </Card>

    </div>
    )
}