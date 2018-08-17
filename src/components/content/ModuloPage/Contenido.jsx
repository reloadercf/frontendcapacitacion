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
     evaluaciones:[],
     clases_finish:null,
     clases_avalible:false
   }
   
   componentWillMount()
   {
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



    register_class=(clase)=>{
      const userToken = JSON.parse(localStorage.getItem('userToken'));
      let url = `https://infinite-peak-15466.herokuapp.com/my_clases?s=${clase}`;
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
            if(data.length==0)
            {
              let clase_usuario ={}
              clase_usuario['clase']=clase    
              clase_usuario['usuario']=this.props.user.id
              const userToken = JSON.parse(localStorage.getItem('userToken'));
              let url = "https://infinite-peak-15466.herokuapp.com/apis/clasesuser/"
              var request = new Request(url, {
                  method: 'POST',
                  body: JSON.stringify(clase_usuario),
                  headers: new Headers({
                      'Authorization': 'Token ' + userToken,
                      'Content-Type': 'application/json'
                  })
              });
              fetch(request)
              .then(r=>r.json())
              .then(data=>
              {
                  console.log("se creo la clase para el usuario") 
              })
              .catch(e=>{
                  console.log(e)
            })
          }      
          else
           {

            }
          })
          .catch(e => {
            console.log(e)
          })
       

    }


  render() {
     let {temas, id_modulo, do_evaluacion, user}=this.props
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
                      <ContenidoCard {...c} user={user} register_class={this.register_class} id_tema={i.id} id_modulo={id_modulo} key={key} evaluaciones={evaluaciones} do_evaluacion={do_evaluacion}/>             
                    ))}                
                </Panel>
            ))}    
      </Collapse>

    );
  }
}
