import React from 'react'
import {Card,Popover,Button} from 'antd';
import dipra from '../../../dipra.png';
import {Link} from 'react-router-dom';


export const ModulosComponent = ({id, descripcion, objetivo, autor}) => {

    const content = (
        <div style={{width:"200px"}}>
          <p>Descripcion: {descripcion}</p>
          <p>Objetivos: {objetivo}</p>
          <Link to={`/modulo${id}`}> 
            <Button type="primary">Iniciar Curso</Button>
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
                    <img alt={`MODULO:${id}`} src = {dipra} style={{width:"100%"}}/> 
                </div>
                <h3>{`MODULO: ${id}`}</h3>
                <p>{autor}</p>
            </div>
        </Card>
        </Popover>


    )
}