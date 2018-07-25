import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {HeaderDetail} from './HeaderDetail';
import { Contenido } from './Contenido';


class DetailPage extends Component {

    state={
        modulo:{}
    }
    componentWillMount(){
        this.getOrden()
    }

    getOrden=()=>{
        let modulos=this.props.modulos
        let modulodetail=modulos.filter(p => {
            return p.id == this.props.match.params.modulo_id;
        })
        this.setState({modulo:modulodetail[0]})
        console.log(modulodetail)
        console.log(this.state.modulo)

    }
    render() {
        let{modulo}=this.state
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderDetail modulo={modulo}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col lg={20} md={20} xs={24}>
                        <Contenido modulo={modulo}/>
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default DetailPage;