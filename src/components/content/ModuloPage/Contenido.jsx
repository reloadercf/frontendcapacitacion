import React, {Component} from 'react';
import {Collapse} from 'antd';
import {ContenidoCard} from './ContenidoCard';
const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#c9d6df',
  borderRadius: 4,
  marginBottom: "2em",
  border: 0,
  overflow: 'hidden'
};

export class Contenido extends Component {

  state = {
    temas: [],
    subtemas: [],
  }

  componentWillMount() {
    this.gettemas()
    //this.getsubtemas()
  }

  gettemas = () => {
    this.setState({temas: this.props.modulo.modulo_tema})
    console.log(this.props.modulo.modulo_tema)
  }
  

  render() {
     let {temas}=this.state
     let {id_modulo}=this.props
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        style={{
        background: '#eeeeee',
        marginTop: "3em",
        marginBottom: "3em"
      }}>
    
            {temas.map((i, key)=>(
                <Panel header={i.title_tema}  key={key} style={customPanelStyle} >               
                    {i.tema_clase.map((c, key)=>(             
                      <ContenidoCard {...c}  id_tema={i.id} id_modulo={id_modulo} key={key}/>             
                    ))}                
                </Panel>
            ))}    
      </Collapse>

    );
  }
}
