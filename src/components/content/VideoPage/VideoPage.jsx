import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import { HeaderVideo } from './HeaderVideo';
import { VideoComponent } from './VideoComponent';
import { VideosList } from './VideosList';


export class VideoPage extends Component {

    state = {
        modulos:[],
        modulo: {},
        temas:[],
        tema:{},
        subtema:{}
    }
    componentWillMount() {
        this.getModulo()
    
    }
    getModulo = () => {
        let modulos=this.props.modulos
        let modulodetail=modulos.filter(p => {
            return p.id == this.props.match.params.modulo_id;
        })

        let tema_modulo=modulodetail[0].modulo_tema.filter(p => {
            return p.id == this.props.match.params.tema_id;
        })


        let subtema_tema=tema_modulo[0].tema_clase.filter(p => {
            return p.id == this.props.match.params.video_id;
        })

        console.log(modulodetail)
        this.setState({modulo:modulodetail[0]})
        this.setState({tema:tema_modulo[0]})
        this.setState({subtema:subtema_tema[0]})

    }
  

    render() {
        let {modulo, tema, subtema} = this.state
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderVideo modulo={modulo} tema={tema} subtema={subtema}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col lg={18} md={18} xs={24}>
                       <VideoComponent   subtema={subtema} />                      
                    </Col>
                    <Col lg={6} md={6} xs={24}>
                       <Card>
                           {/* <VideosList /> */}
                       </Card>
                    </Col>

                </Row>
            </div>
        );
    }
}

