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

   state={
     evaluaciones:[]
   }
   
   componentWillMount(){
     this.get_evaluaciones()
   }

   get_evaluaciones=()=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = "https://infinite-peak-15466.herokuapp.com/my_evaluations/";
    var request = new Request(url, {
        method: 'GET',
        headers:new Headers({
            'Authorization':'Token '+userToken,
            'Content-Type': 'application/json'
        }) 
    });
    fetch(request)
        .then(r => r.json())
        .then(data => {
            this.setState({evaluaciones: data})
            console.log(data)
        })
        .catch(e => {
            //console.log(e)
        })
    }

  render() {
     let {temas, id_modulo}=this.props
     let{evaluaciones}=this.state
  
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
                <Panel header={i.title_tema}  key={key} style={customPanelStyle}>               
                    {i.tema_clase.map((c, key)=>(             
                      <ContenidoCard {...c}  id_tema={i.id} id_modulo={id_modulo} key={key} evaluaciones={evaluaciones}/>             
                    ))}                
                </Panel>
            ))}    
      </Collapse>

    );
  }
}
