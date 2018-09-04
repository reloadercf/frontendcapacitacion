import React, { Component } from 'react';
import { Layout} from 'antd';
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import { FooterSection } from './components/footer/FooterSection';
import { HeaderSection } from './components/header/HeaderSection';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Routes from './Routes';
import swal from 'sweetalert';
import {Helmet} from "react-helmet";


const { Header, Content, Footer } = Layout;

class App extends Component {

  state={
    modulos:[],
    logged:false,
    user:{},
    permissions:[],
    examen_past:false,
    examen_avalible:false,
    video_end:false   
}
componentWillMount(){
  this.checkIfuser()
}

componentDidMount(){
this.getmodulos()
}

paso_examen=(examen)=>{
  let {examen_past}=this.state
  this.setState({examen_past:examen})
  console.log(examen_past)
}

//esta funcion primero validamos que el state examen_avalible  este en false
finish_class=(clase)=>
{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = `https://serene-fortress-47490.herokuapp.com/my_clases?s=${clase}`;
    var request = new Request(url, {
        method: 'GET',
        headers:new Headers({
            'Authorization':'Token '+userToken,
            'Content-Type': 'application/json'
        }) 
    });
    fetch(request)
        .then(r => r.json())
        .then(data => 
        {     

            let user_clase=data.find(p => {
                return p.usuario == this.state.user.id
            })
            //this.setState({video_end:user_clase.clase_finish})
            user_clase['clase_finish']=true
            this.setState({video_end:true})
            console.log(user_clase)
            const userToken = JSON.parse(localStorage.getItem('userToken'));
            let url = `https://serene-fortress-47490.herokuapp.com/apis/clasesuser/${user_clase.id}/`
            var request = new Request(url, {
                method: 'PUT',
                body: JSON.stringify(user_clase),
                headers: new Headers({
                    'Authorization': 'Token ' + userToken,
                    'Content-Type': 'application/json'
                })
            });
            fetch(request)
            .then(r=>r.json())
            .then(datados=>{    
                //console.log(datados)          
            })
         
        })
}



do_evaluacion=(clase)=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = `https://serene-fortress-47490.herokuapp.com/my_evaluations/?e=${clase}`;
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
                let evaluacion={}
                evaluacion['usuario']=this.state.user.id
                evaluacion['clase']=clase
                const userToken = JSON.parse(localStorage.getItem('userToken'));
                let url = "https://serene-fortress-47490.herokuapp.com/apis/evaluacion/"
                var request = new Request(url, {
                    method: 'POST',
                    body: JSON.stringify(evaluacion),
                    headers: new Headers({
                        'Authorization': 'Token ' + userToken,
                        'Content-Type': 'application/json'
                    })
                });
                fetch(request)
                .then(r=>r.json())
                .then(data=>{
                   
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
    

getmodulos=()=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = "https://serene-fortress-47490.herokuapp.com/my_user/";
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
            this.setState({modulos: data[0].modulos})
            this.setState({user:data[0].correo})
      
            let permisos=data[0].correo.user_permissions
            let permisoarray=[]
            permisos.forEach(function (elemento)
            {
                permisoarray.push(elemento.codename)      
            });
            this.setState({permissions:permisoarray})
            //console.log(this.state.user)
            console.log(this.state.permissions)
        })
        .catch(e => {

        })
}



checkIfuser=()=>{
  let userToken = JSON.parse(localStorage.getItem('userToken'));
  //console.log(userToken)
    if (userToken) {
        this.setState({logged:true})
      }
    else
      {
        this.setState({logged:false})
      }

}

logIn=(user)=>{
//console.log(user)
let url = 'https://serene-fortress-47490.herokuapp.com/api-token-auth/';
var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
        //'Authorization':'Token '+userToken,
        'Content-Type': 'application/json'
    })
}); 
fetch(request)
    .then(r=>{
      if(r.ok)
        return r.json()
        console.log(r.json())            
    })
    .then(data=>{
        localStorage.setItem('userToken', JSON.stringify(data.token));
        this.getmodulos()
        swal({
            title: "Exito",
            text: "Bienvenido",
            icon: "success",
            button: "ok",
          });
        this.setState({logged:true})
    })
    .catch(e=>{
        
        swal({
            title: "Error",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            button: "ok",
          });
        this.setState({logged:false})
      
})
}


logOut=()=>{
    localStorage.removeItem('userToken');
    this.setState({logged:false})
}



  render() {
      let {modulos,
           logged,
           examen_avalible,
           user,
           video_end,
           permissions
        }=this.state
    
    return (

    <Layout>
    <Helmet>
         <meta charSet="utf-8" />
                <title>DIPRA Formaci&oacute;n</title>
            </Helmet>
        <NavMenu logged={logged} logOut={this.logOut} permissions={permissions}/>
      <Layout className="layout-videos">
        <Header style={{ background: '#f0f2f5', height:"100px", padding: 0 }} >
            <HeaderSection/>
        </Header>
        <Content style={{ margin: '24px 16px 0',  }}>
            <Routes 
                modulos={modulos} 
                logged={logged} 
                logIn={this.logIn}
                paso_examen={this.paso_examen}
                examen_avalible={examen_avalible}
                onEnded={this.onEnded}
                user={user}
                permissions={permissions}
                finish_class={this.finish_class}
                do_evaluacion={this.do_evaluacion}
                video_end={video_end}
                getmodulos={this.getmodulos}

            />
          

        </Content>
        <Footer  style={{ padding: 0, marginTop:"20vh"}} >
           <FooterSection/>
        </Footer>
      </Layout>
    </Layout>
    
    
    );
  }
}

export default App;
