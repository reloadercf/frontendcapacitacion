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
    
    modulos:[
        {
            'id':1,
            'temas':[
              {
                'id':1,
                'title':'ADMINISTRACION DEL TIEMPO',
                'subtemas':[
                  {
                    'id':1,
                    'title':'Clase 1 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  },
                  {
                    'id':2,
                    'title':'Clase 2 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  },
                  {
                    'id':3,
                    'title':'Clase 3 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  }
                ]

              },
              {
                'id':2,
                'title':'CONTABILIDAD',
                'subtemas':[
                  {
                    'id':1,
                    'title':'¿Qué es la contabilidad?',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  },
                  {
                    'id':2,
                    'title':'¿Como se lleva la contabilidad?',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  },
                  {
                    'id':3,
                    'title':'¿Impuetos?',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/xioZSo_WOo0'
                  }
                ]

              },
              {
                'id':3,
                'title':'AUTOESTIMA PROFESIONAL',
                'subtemas':[
                  {
                    'id':1,
                    'title':'Subtema 1 Autoestima profesional',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':2,
                    'title':'Subtema 2 Autoestima profesional',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':3,
                    'title':'Subtema 3 Autoestima profesional',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/hT_nvWreIhg'
                  }
                ]

              },

            ],
            'descripcion': 'En este modulo aprenderas Loos conceptos basicos de Contabilidad, Administracion del tiempo y Autoestima Profesional',
            'objetivo':"Despues de terminar este curso el asesor sera capaz de dominar....",
            'autor': "Carlos Fernando Mendoza",        
        }, 
        {
          'id':2,
          'temas':[
            {
              'id':1,
              'title':'AUTOESTIMA PROFESIONAL',
              'subtemas':[
                {
                  'id':1,
                  'title':'Tu Empresa y la importancia de potenciarla.',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'http://www.dipradigital.com/videos_capa/Documental%20como%20utilizar%20Asistencia%20en%20Viajes_1.mp4'
                },
                {
                  'id':2,
                  'title':'Comportamiento, vestimenta y tips frente al cliente',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'https://www.youtube.com/watch?v=1I4FgHlE1lo'
                },
                {
                  'id':3,
                  'title':'Contexto Pais, Contexto Empresa, Contexto Asesor.',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'https://www.youtube.com/watch?v=4GFAZBKZVJY'
                },
              ]

            },
            {
              'id':2,
              'title':'AUTOESTIMA PERSONAL',
              'subtemas':[
                {
                  'id':1,
                  'title':'TEMA 1.',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'http://www.dipradigital.com/videos_capa/Documental%20como%20utilizar%20Asistencia%20en%20Viajes_1.mp4'
                },
                {
                  'id':2,
                  'title':'TEMA 2',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'https://www.youtube.com/watch?v=1I4FgHlE1lo'
                },
                {
                  'id':3,
                  'title':'TWMA 3',
                  'objetivo':'Despues de terminar de ver este video seraz capaz ......',
                  'video':'https://www.youtube.com/watch?v=4GFAZBKZVJY'
                },
              ]

            },

          ],
          'descripcion': 'En este modulo aprenderas Loos conceptos basicos de Contabilidad, Administracion del tiempo y Autoestima Profesional',
          'objetivo':"Despues de terminar este curso el asesor sera capaz de dominar....",
          'autor': "Carlos Fernando Mendoza",        
      },          
    ],
    logged:false,
    user:{}
    
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
            //this.setState({modulos: data})
            console.log(data)

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
      let {modulos, logged}=this.state
    return (
      <Layout>
        <NavMenu logged={logged} logOut={this.logOut}/>
        
      <Layout className="layout-videos">
        <Header style={{ background: '#fff', height:"100px", padding: 0 }} >
            <HeaderSection/>
        </Header>
        <Content style={{ margin: '24px 16px 0',  }}>
            <Routes modulos={modulos} logged={logged} logIn={this.logIn}/>
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
