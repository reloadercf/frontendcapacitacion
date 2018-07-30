import React from 'react'
import {Button} from 'antd';
import {Link} from 'react-router-dom';


export const ContenidoCard = ({id, title_clase, id_tema, id_modulo}) => {

    return (
        <div className="div-subtema">
            <div className="info-subtema">
                <h3>{id}: {title_clase}</h3>
            </div>
            <div>
                <Button
                    style={{
                    marginRight: "10px"
                }}
                    type="primary"
                    icon="search">Examen</Button>
               
                <Link to={`/modulo${id_modulo}/tema${id_tema}/video${id}`}> 
                    <Button type="primary" icon="search">Video</Button>
                </Link>

           
            </div>

        </div>
    )
} 