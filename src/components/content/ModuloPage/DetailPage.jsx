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
        let url = "https://serene-fortress-47490.herokuapp.com/apis/modulo/";
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
        let{do_evaluacion,user}=this.props
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
                        <Contenido id_modulo={id_modulo} user={user} temas={temas} do_evaluacion={do_evaluacion}/>
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default DetailPage;