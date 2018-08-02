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
    //my_profile:[],
    logged:false,
    user:{},

    //States Video
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,

    examen_past:false,
    examen_avalible:false,
    video_end:false

}

 playPause = () => 
  {
    this.setState({ playing: !this.state.playing })
  }
  setVolume=(value) => {
    let vol=value/100
    this.setState({ volume:vol})
  }

  onEnded =(examen) => {
        alert("Se termino el video")
        this.setState({ examen_avalible: true})
        //this.props.history.push('/profile')  
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
            console.log(data[0].modulos)
        })
        .catch(e => {
            //console.log(e)
        })
}


checkIfuser=()=>{
  let userToken = JSON.parse(localStorage.getItem('userToken'));
  console.log(userToken)
    if (userToken) {
        this.setState({logged:true})
      }
    else
      {
        this.setState({logged:false})
      }
}

logIn=(user)=>{
console.log(user)
let url = 'http://localhost:8000/api-token-auth/';
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
      if(r.ok)return r.json()
      console.log(r.json())
            
    })
    .then(data=>{
        console.log(data)
        localStorage.setItem('userToken', JSON.stringify(data.token));
        //this.props.history.push('/profile')
        this.setState({logged:true})
    })
    .catch(e=>{
        console.log(e)
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
           //state para pausar e iniciar vieo
           playing,
           // state volumen de video
           volume,
           my_profile,
           examen_avalible
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
                playing={playing}
                volume={volume}
                playPause={this.playPause}
                setVolume={this.setVolume}
                paso_examen={this.paso_examen}
                examen_avalible={examen_avalible}
                onEnded={this.onEnded}
                my_profile={my_profile}
            />
             <Alert stack={{limit: 3}}contentTemplate={Main} />
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
