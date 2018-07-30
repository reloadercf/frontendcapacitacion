import React, { Component } from 'react';
import { Layout} from 'antd';
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import { FooterSection } from './components/footer/FooterSection';
import { HeaderSection } from './components/header/HeaderSection';
import Routes from './Routes';


const { Header, Content, Footer } = Layout;


class App extends Component {

  state={
    modulos:[],
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
    loop: false

}

playPause = () => {


    this.setState({ playing: !this.state.playing })
  }
setVolume=(value) => {
    let vol=value/100
    this.setState({ volume:vol})
}

componentWillMount(){
  this.checkIfuser()
  this.getmodulos()
}

getmodulos=()=>{

    //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
    let url = "http://127.0.0.1:8000/apis/modulo/";
    var request = new Request(url, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'})
    });
    fetch(request)
        .then(r => r.json())
        .then(data => {
            this.setState({modulos: data})
            console.log(this.state.modulos)
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
            />
        </Content>
        <Footer  style={{ height:"200px", padding: 0, marginTop:"20vh"}} >
           <FooterSection/>
        </Footer>
      </Layout>
    </Layout>
    );
  }
}

export default App;
