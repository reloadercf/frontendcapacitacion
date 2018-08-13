import React from 'react'
import {Card} from 'antd';



export const HeaderVideo =({modulo, tema, subtema})=>{

    return(
       
        <div className="header-detail">
        
            <Card >
                <div>
                    <h1>MODULO {modulo.id}</h1>
                    <h1>{tema.title_tema}</h1>
                    <h1>{subtema.title_clase}</h1>
                    <span>{subtema.descripcion}</span>
                </div>
            </Card>

        </div>

    )
}

