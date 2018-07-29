import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {HeaderDetail} from './HeaderDetail';
import { Contenido } from './Contenido';


class DetailPage extends Component {

state={
        modulos:this.props.modulos,
        modulo:{},
        id_modulo:this.props.match.params.modulo_id
    }
    componentWillMount(){
     this.getModulo()
    }


    getModulo=()=>{
        let{modulos}=this.state
        let modulodetail=modulos.filter(p => {
            return p.id == this.props.match.params.modulo_id    ;
        })
        this.setState({modulo:modulodetail[0]})
        console.log(modulodetail)
        console.log(this.state.modulo)  
        console.log(modulos)
      
    }
    render() {
        let{modulo, id_modulo}=this.state
      
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderDetail modulo={modulo}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col lg={20} md={20} xs={24}>
                        <Contenido modulo={modulo} id_modulo={id_modulo}/>
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default DetailPage;