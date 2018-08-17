import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {HeaderVideo} from './HeaderVideo';
import {VideoComponent} from './VideoComponent';


export class VideoPage extends Component {

    state = {
        modulos: [],
        modulo: {},
        temas: [],
        tema: {},
        subtema: {}
    }
    componentWillMount() {
        this.getModulo()

    }

    getModulo = () => {
        let modulos = this.props.modulos

        let url = "https://infinite-peak-15466.herokuapp.com/apis/modulo/";
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

                let tema_modulo=modulodetail[0].modulo_tema.filter(p => {
                    return p.id == this.props.match.params.tema_id;
                })
        
        
                let subtema_tema=tema_modulo[0].tema_clase.filter(p => {
                    return p.id == this.props.match.params.video_id;
                })
        
                
                this.setState({modulo:modulodetail[0]})
                this.setState({tema:tema_modulo[0]})
                this.setState({subtema:subtema_tema[0]})

            })
            .catch(e => {
                //console.log(e)
            })
    }

    render() {
        let {modulo, tema, subtema} = this.state
        let {match,history,finish_class,video_end} = this.props
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <HeaderVideo modulo={modulo} tema={tema} subtema={subtema}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col lg={18} md={18} xs={24}>
                        <VideoComponent
                            match={match}
                            history={history}
                            subtema={subtema}
                            finish_class={finish_class}
                            video_end={video_end}
                            />
                    </Col>
                </Row>
            </div>
        );
    }
}


