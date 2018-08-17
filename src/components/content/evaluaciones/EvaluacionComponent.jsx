import React from 'react'
import {Card} from 'antd'

export const EvaluacionComponent = ({aprobado, clase, intentos, resultado, usuario}) => {

    return (
        <div>
            <Card
                title={clase.title_clase}
                hoverable={true}
                className="card-card"
            >
                <div  className="card-evaluacion" >
                    <div className="div_aprobado">
                        {aprobado
                            ? <div className="card-aprobado">
                                <span>Aprobado</span>
                              </div>
                            : <div className="card-reprobado">
                                <span>Reprobado</span>
                            </div> }
                    </div>
                   
                    <div className="div-intentos">
                        <span>Intentos: {intentos}</span>
                 
                    </div>

                </div>
            </Card>

        </div>
    )
}