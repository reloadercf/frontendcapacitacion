import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { ModulosComponent } from './ModulosComponent';


class ModulosList extends Component {

    render() {
        let{modulos}=this.props
        return (
            <div>
                <Row type="flex" justify="space-around" style={{marginTop:"4em"}}>
                 {
                   modulos && modulos.lenght>0?
                     modulos.map((i, key)=>(
                    <Col md={7} sm={24} xs={24}  span={4} key={key} style={{marginBottom:"2em"}}>
                      <ModulosComponent {...i} key={key}/>
                    </Col>
                 )): 
                  <div 
                  style=
                  {{display:"flex", 
                  alignItems:"center",
                  fontSize:"30px"
                  }}>No tienes modulos asignados</div> }                    
                </Row>

            </div>
        );
    }
}

export default ModulosList;