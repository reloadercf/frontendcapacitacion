import React from 'react'
import {Button,Icon} from 'antd';
import {Link, } from 'react-router-dom';


export const ContenidoCard = ({id, title_clase, id_tema, id_modulo,do_evaluacion}) => {
    
    // let get_evaluacion=evaluaciones.find(p => {
    //     return p.clase.title_clase == title_clase;
    // })
    // console.log(get_evaluacion)

    return (
        <div className="div-subtema">
            <div className="info-subtema">
                <h3>{id}: {title_clase}</h3>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>

                      {/* {get_evaluacion.aprobado
                        ?    <Icon type="check-circle" style={{fontSize:"30px", color:"#2eb872", marginRight:"2em"}}/>

                        :   <Link  to={`/modulo${id_modulo}/tema${id_tema}/examen${id}`}>
                                <Button style={{ marginRight: "10px"}} type="primary" icon="search">Examen</Button>          
                            </Link>
                        }
                
                 */}
                
                <Link  to={`/modulo${id_modulo}/tema${id_tema}/examen${id}`}>
                    <Button onClick={()=> do_evaluacion(id)}  style={{ marginRight: "10px"}} type="primary" icon="search">Examen</Button>          
                </Link>
                <Link to={`/modulo${id_modulo}/tema${id_tema}/video${id}`}> 
                    <Button type="primary" icon="search">Video</Button>
                </Link>

               

           
            </div>

        </div>
    )
} 