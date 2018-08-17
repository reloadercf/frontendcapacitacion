import React, { Component } from 'react';
import { Layout} from 'antd';
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import { FooterSection } from './components/footer/FooterSection';
import { HeaderSection } from './components/header/HeaderSection';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';
import Main from './components/content/Main';

import Routes from './Routes';


const { Header, Content, Footer } = Layout;

class App extends Component {

  state={
    modulos:[],
    logged:false,
    user:{},
    examen_past:false,
    examen_avalible:false,
    video_end:false
    
}
componentWillMount(){
  this.checkIfuser()
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
    let url = `http://127.0.0.1:8000/my_clases?s=${clase}`;
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
            this.setState({video_end:user_clase.clase_finish})

            user_clase['clase_finish']=true
            //this.setState({video_end:true})
            console.log(user_clase)
            const userToken = JSON.parse(localStorage.getItem('userToken'));
            let url = `http://127.0.0.1:8000/apis/clasesuser/${user_clase.id}/`
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
                console.log(datados)          
            })
         
        })
    

  
}

do_evaluacion=(clase)=>{
    if(this.state.video_end)
    {    
        let evaluacion={}
        evaluacion['usuario']=this.state.user.id
        evaluacion['clase']=clase
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = "http://127.0.0.1:8000/apis/evaluacion/"
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
            console.log(data) 
            console.log("Se creo la evaluacion") 
        })
        .catch(e=>{
            console.log(e)
    })  

    }
    
    else
    {
        console.log("necesitas ver el video")
    }
    
}

getmodulos=()=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = "http://127.0.0.1:8000/my_user/";
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
            //console.log(this.state.user)
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
let url = 'http://127.0.0.1:8000/api-token-auth/';
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
        //console.log(r.json())            
    })
    .then(data=>{
        //console.log(data)
        localStorage.setItem('userToken', JSON.stringify(data.token));
        //this.props.history.push('/profile')
        this.setState({logged:true})
    })
    .catch(e=>{
        
        Alert.error('Error:', {
            effect: 'slide',
            timeout: 2000,
            position: 'top',
            customFields: {
                customerName: "Revisa tus datos",
            }
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
           video_end
        }=this.state
    return (
      <Layout>
        <NavMenu logged={logged} logOut={this.logOut}/>
        
      <Layout className="layout-videos">
        <Header style={{ background: '#fff', height:"100px", padding: 0 }} >
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
                finish_class={this.finish_class}
                do_evaluacion={this.do_evaluacion}
                video_end={video_end}

            />
             <Alert stack={{limit: 3}} contentTemplate={Main} />

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
