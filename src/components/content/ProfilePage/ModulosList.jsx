import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { ModulosComponent } from './ModulosComponent';


class ModulosList extends Component {

    state={
        modulos:this.props.modulos
    }

    componentWillMount(){
        console.log(this.state.modulos)
    }

    render() {
        let{modulos}=this.state
        return (
            <div>
                <Row type="flex" justify="space-around" style={{marginTop:"4em"}}>
                 {modulos.map((i, key)=>(
                    <Col md={7} sm={24} xs={24}  span={4}>
                      <ModulosComponent {...i} key={key}/>
                    </Col>
                 ))}   
                   
                 
                </Row>

            </div>
        );
    }
}

export default ModulosList;