import React, { Component } from 'react';
import {Row, Col} from 'antd';
import { HeaderExamen } from './HeaderExamen';
import { ExamenComponent } from './ExamenComponent';
import Alert from 'react-s-alert';
import swal from 'sweetalert';

class ExamenPage extends Component {

    state = {
        examen:{},
        preguntas:[],
        respuestas:[],
        res_correctas:0,
        evaluacion:{},
        intentos:0 ,
        paso_exa:false,    
      }
    
      componentWillMount()
      {
          this.getModulo()
      }

      //Con esta funcion obtenemos el modulo en el cual estamos
      getModulo = () => {
        let{evaluacion}=this.state
        //let modulos=this.props.modulos
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

                let tema_modulo=modulodetail[0].modulo_tema.filter(p => {
                    return p.id == this.props.match.params.tema_id;
                })
              
                let subtema_tema=tema_modulo[0].tema_clase.filter(p => {
                    return p.id == this.props.match.params.examen_id;
                })

                let examen_clase=subtema_tema[0].nombre_examen
                

                evaluacion['clase']=subtema_tema[0].id
                this.setState({evaluacion})
                this.setState({examen:examen_clase})
                this.setState({preguntas:examen_clase.pregunta_examen})
                  //console.log(subtema_tema[0].nombre_examen)
                console.log(examen_clase.pregunta_examen)
               
                  
            })
            .catch(e => {
                //console.log(e)
            })

        }


      onChange=(e)=>{
            let {respuestas, preguntas, respuestas_calificar} = this.state;
            //let field = e.target.name;

            if (e.target.value==null){
                console.log("debes contestar")
            }
            let pregunta_revisar = preguntas.find(i=>{
                return i.pregunta == e.target.name
              })
  
            let calificar_resp=pregunta_revisar.respuesta_pregunta.find(i=>{
                return i.respuestas == e.target.value;
            })

             respuestas[calificar_resp.pregunta]= calificar_resp.res_correcta
             let result = respuestas.filter(respuesta => respuesta==true);
             
             
             this.setState({res_correctas: result.length})
             console.log( pregunta_revisar)
             console.log( respuestas[calificar_resp.pregunta])
              
        }



       SendExamen=(e)=>{
           let{res_correctas, preguntas, evaluacion, intentos,}=this.state

            //let usuario=this.props.user
            evaluacion['usuario']=this.props.user.id
            evaluacion['resultado']=res_correctas

            if(res_correctas>=(preguntas.length-1))
            {
                Alert.success('Felicidades:', {
                    effect: 'slide',
                    timeout: 5000,
                    position: 'top',
                 
                    customFields: {
                        customerName: "Felicidaddes aprobaste el examen puedes pasar al siguiente modulo ",
                        resultados: res_correctas
                    }
                    
                });
                this.props.paso_examen(true)

                evaluacion['aprobado']=true
                evaluacion['intentos']=intentos+1;
                const userToken = JSON.parse(localStorage.getItem('userToken'));
                let url = "http://127.0.0.1:8000/apis/evaluacion/"
                var request = new Request(url, {
                    method: 'PUT',
                    body: JSON.stringify(evaluacion),
                    headers: new Headers({
                        'Authorization': 'Token ' + userToken,
                        'Content-Type': 'application/json'
                    })
                });
                fetch(request)
                .then(r=>r.json())
                .then(data=>{
                    console.log(data)
                    this.props.history.push('/profile')  
                    this.setState({evaluacion:data})          
                })
                .catch(e=>{
                    console.log(e)
            })  
                
            }
            else
            {

                this.props.paso_examen(false)
                evaluacion['aprobado']=false
                evaluacion['intentos']=intentos+1;
                swal({
                    title: "Reprobado",
                    text: "Has reprobado la evaluacion, revisa tus resultados",
                    icon: "success",
                    button: "ok",
                  });
               
                const userToken = JSON.parse(localStorage.getItem('userToken'));
                let url = `http://127.0.0.1:8000/apis/evaluacion/${evaluacion.clase}/`
                var request = new Request(url, {
                    method: 'PUT',
                    body: JSON.stringify(evaluacion),
                    headers: new Headers({
                        'Authorization': 'Token ' + userToken,
                        'Content-Type': 'application/json'
                    })
                });
                fetch(request)
                .then(r=>r.json())
                .then(data=>{
                    console.log(data)
                    this.setState({evaluacion:data})
                    this.props.history.push(`/modulo${this.props.match.params.modulo_id}/tema${this.props.match.params.tema_id}/video${this.props.match.params.examen_id}`)                 
                })
                .catch(e=>{
                    console.log(e)
            })  
                   
            }
       }

  
       SendExamenDos=(e)=>{
        let{res_correctas, preguntas, evaluacion, respuestas}=this.state
        let resp= respuestas.filter(respuesta => respuesta!==null)

        this.setState({respuestas:resp})

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = `http://127.0.0.1:8000/my_evaluations/?e=${evaluacion.clase}`;
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
                if(res_correctas>=(preguntas.length))
                {
                    swal({
                        title: "Felicidades",
                        text: "Has aprobado tu examen",
                        icon: "success",
                        button: "Salir",
                      });

                    this.props.paso_examen(true)
                    this.setState({paso_exa:true})
    
                    let eval_usuario={}
                    eval_usuario['clase']=evaluacion.clase
                    eval_usuario['usuario']=this.props.user.id
                    eval_usuario['aprobado']=true
                    eval_usuario['resultado']=res_correctas
                    eval_usuario['intentos']=(data[0].intentos+1)
                    const userToken = JSON.parse(localStorage.getItem('userToken'));
                    let url = `http://127.0.0.1:8000/apis/evaluacion/${data[0].id}/`;
                    var request = new Request(url, {
                        method: 'PUT',
                        body: JSON.stringify(eval_usuario),
                        headers: new Headers({
                            'Authorization': 'Token ' + userToken,
                            'Content-Type': 'application/json'
                        })
                    });
                    fetch(request)
                    .then(r=>r.json())
                    .then(data=>{
                        console.log(data) 
                        //this.props.history.push('/profile')   
                    })
                    .catch(e=>{
                        console.log(e)
    
                    }) 
                   
              }      
              else
                {
                    swal({
                        title: "Reprobaste",
                        text: "Reprobaste tu examen revisa tus respuestas e intantolo nuevamente",
                        icon: "error",
                        button: "Salir",
                      }); 
                    let eval_usuario={}
                    eval_usuario['clase']=evaluacion.clase
                    eval_usuario['usuario']=this.props.user.id
                    eval_usuario['aprobado']=false
                    eval_usuario['resultado']=res_correctas
                    eval_usuario['intentos']=(data[0].intentos+1)
                    const userToken = JSON.parse(localStorage.getItem('userToken'));
                    let url = `http://127.0.0.1:8000/apis/evaluacion/${data[0].id}/`;
                    var request = new Request(url, {
                        method: 'PUT',
                        body: JSON.stringify(eval_usuario),
                        headers: new Headers({
                            'Authorization': 'Token ' + userToken,
                            'Content-Type': 'application/json'
                        })
                    });
                    fetch(request)
                    .then(r=>r.json())
                    .then(data=>{
                        //console.log(data) 
                        this.props.history.push(`/modulo${this.props.match.params.modulo_id}/tema${this.props.match.params.tema_id}/examen${this.props.match.params.examen_id}`)      
                    })
                    .catch(e=>{
                        //console.log(e)
                    })  
    
                }
            })
            .catch(e => {
                console.log(e)
            })
    }



    render() {
        let{examen,  preguntas, respuestas, paso_exa}=this.state
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}> 
                        <HeaderExamen examen={examen}/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col lg={21} md={20} xs={24}>
                        <ExamenComponent onChange={this.onChange} SendExamen={this.SendExamenDos} respuestas={respuestas} examen={examen} paso_exa={paso_exa} preguntas={preguntas} />            
                    </Col>
                   

                </Row>
            </div>
        );
    }
}

export default ExamenPage;