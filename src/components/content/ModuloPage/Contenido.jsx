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
    modal2Visible: false,
  }

  componentWillMount() {
    this.gettemas()
    //this.getsubtemas()
  }

  gettemas = () => {
    this.setState({temas: this.props.modulo.temas})
  }


  handleOpen=()=>{
    this.setState({ modal2Visible:true });
  } 
 
  handleClose=()=>{
    this.setState({ modal2Visible:false });
  } 


  

  render() {
     let {temas, modal2Visible}=this.state
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
                <Panel header={i.title}  key={key} style={customPanelStyle} >               
                    {i.subtemas.map((c, key)=>(             
                      <ContenidoCard {...c} key={key} modal2Visible={modal2Visible} handleOpen={this.handleOpen} handleClose={this.handleClose}/>             
                    ))}                
                </Panel>
            ))}    
      </Collapse>

    );
  }
}
