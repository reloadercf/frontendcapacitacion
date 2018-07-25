import React from 'react'
import {Card} from 'antd';
import {Row, Col} from 'antd';


export const HeaderVideo =({modulo, tema, subtema})=>{

    return(
       
        <div className="header-detail">
        
            <Card >
                <div>
                    <h1>MODULO {modulo.id}</h1>
                    <h1>{tema.title}</h1>
                    <h1>{subtema.title}</h1>
                    <span>Descripcio del subtema</span>
                </div>
            </Card>

        </div>

    )
}