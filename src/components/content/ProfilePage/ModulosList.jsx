import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { ModulosComponent } from './ModulosComponent';


class ModulosList extends Component {

    render() {
        let{modulos}=this.props
        return (
            <div>
                <Row type="flex" justify="space-around" style={{marginTop:"4em"}}>
                 {modulos.map((i, key)=>(
                    <Col md={7} sm={24} xs={24}  span={4} key={key}>
                      <ModulosComponent {...i} key={key}/>
                    </Col>
                 ))}                    
                </Row>

            </div>
        );
    }
}

export default ModulosList;