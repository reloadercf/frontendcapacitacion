import React, { Component } from 'react';
import {Row, Col} from 'antd';
import { HeaderExamen } from './HeaderExamen';
import { ExamenComponent } from './ExamenComponent';
class ExamenPage extends Component {

    state = {
        value:null,
        respuestas:[]
      }
    
      componentWillMount(){

      }
      RespExamen = (e) => {
        let{value, respuestas}=this.state
        console.log('radio checked', e.target.value);


        this.setState({
          value: e.target.value,
        });
      }

    //   onInputChange = ({ target }) => {
    //     const { value, respues } = this.state;
    //     const nexState = cards.map(card => {
    //       if (card.cardName !== target.name) return card;
          
    //       return {
    //         ...card,
    //         options: card.options.map(opt => {
    //           const checked = opt.radioName === target.value;
    //           return {
    //             ...opt,
    //             selected: checked
    //           }
    //         })
    //       }
    //     });
    //     this.setState({ cards: nexState })
    //   }
    

    render() {
        let{value}=this.state
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}> 
                        <HeaderExamen/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col lg={21} md={20} xs={24}>
                            <ExamenComponent RespExamen={this.RespExamen}  respuesta={value}/>            
                    </Col>
                   

                </Row>
            </div>
        );
    }
}

export default ExamenPage;