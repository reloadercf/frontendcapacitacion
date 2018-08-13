import React from 'react'
import {Card, Icon} from 'antd'

export const EvaluacionComponent = ({aprobado, clase, intentos, resultado, usuario}) => {

    return (
        <div>
            <Card
                title={clase.title_clase}
                extra={<div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}> <Icon type="user" spin={true} style={{fontSize:"30px", color:"#e84545", marginRight:"1em", fontWeight:"800"}}/> <p>{usuario.username}</p> </div>}
                hoverable={true}
                >
                <div  className="card-evaluacion" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>
                    
                    {aprobado
                    ?   <div className="card-aprobado">
                            <span>Aprobado</span>
                        </div>
                    :   <div className="card-reprobado">
                            <span>Reprobado</span>
                        </div> }

                    {/* <div>
                        <span>Resultado</span>
                        <p>{resultado}</p>
                    </div> */}
                    <div>
                        <span>Intentos</span>
                        <p>{intentos}</p>
                    </div>

                </div>
            </Card>

        </div>
    )
}