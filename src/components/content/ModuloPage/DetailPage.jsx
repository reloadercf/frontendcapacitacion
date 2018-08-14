import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {HeaderDetail} from './HeaderDetail';
import { Contenido } from './Contenido';


class DetailPage extends Component {

    state={
        modulo:{},
        id_modulo:this.props.match.params.modulo_id,
        temas:[],
        //subtemas:{}
    }
    componentWillMount(){
        this.getModulo()
    }


    getModulo=()=>{
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = "http://127.0.0.1:8000/apis/modulo/";
        var request = new Request(url, {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json'})
        });
        fetch(request)
            .then(r => r.json())
            .then(data => {
                let modulodetail=data.filter(p => {
                    return p.id == this.props.match.params.modulo_id;
                })
                this.setState({modulo:modulodetail[0]})
                this.setState({temas:modulodetail[0].modulo_tema})
                console.log(modulodetail[0].modulo_tema)
            })
            .catch(e => {
                //console.log(e)
            })
    }

    
    render() {
        let{modulo, temas, id_modulo}=this.state
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderDetail modulo={modulo}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col lg={20} md={20} xs={24}>
                        <Contenido id_modulo={id_modulo} temas={temas}/>
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default DetailPage;