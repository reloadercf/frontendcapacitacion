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
                    'title':'subtema 1 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':2,
                    'title':'Subtema 2 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':3,
                    'title':'Subtema 3 administracion del tiempo',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/hT_nvWreIhg'
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
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':2,
                    'title':'¿Como se lleva la contabilidad?',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/ilw-qmqZ5zY'
                  },
                  {
                    'id':3,
                    'title':'¿Impuetos?',
                    'objetivo':'Comprender los conceptos basicos de la contabilidad',
                    'video':'https://youtu.be/hT_nvWreIhg'
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
    logged:false
}


  render() {
      let {modulos, logged}=this.state
    return (
      <Layout>
        <NavMenu logged={logged}/>
        
      <Layout className="layout-videos">
        <Header style={{ background: '#fff', padding: 0 }} >
            <HeaderSection/>
        </Header>
        <Content style={{ margin: '24px 16px 0',  }}>
            <Routes modulos={modulos} logged={logged}/>
        </Content>
        <Footer >
           <FooterSection/>
        </Footer>
      </Layout>
    </Layout>
    );
  }
}

export default App;
