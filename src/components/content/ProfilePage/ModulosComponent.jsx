import React from 'react'
import {Card,Popover,Button} from 'antd';
import dipra from '../../../dipra.png';
import {Link} from 'react-router-dom';
import { Rate } from 'antd';


export const ModulosComponent = ({id, descripcion, objetivo, autor, portada}) => {

    const content = (
        <div style={{width:"200px"}}>
          <p>Aspectos: {descripcion}</p>
          <p>Objetivo: {objetivo}</p>
          <Link to={`/modulo${id}`}> 
            <Button type="primary">Iniciar Formaci&oacute;n</Button>
         </Link>
        </div>
      );
      
    return (
        <Popover  placement="right"  content={content} title={`MODULO: ${id}`}>
        <Card
            className="card-modulo"
          >
            <div>
                <div className="div_img_modulo">
                    <img alt={`MODULO:${id}`} src = {portada} style={{width:"100%"}}/> 
                </div>
                <h3>{`MODULO: ${id}`}</h3>
                <Rate allowHalf defaultValue={5} disabled={true} />
                <p>{autor}</p>
            </div>
        </Card>
        </Popover>


    )
}