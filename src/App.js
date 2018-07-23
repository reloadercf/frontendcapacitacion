import React, { Component } from 'react';
import { Layout} from 'antd';
import './App.css';
import NavMenu from './components/navbar/NavMenu';
import { FooterSection } from './components/footer/FooterSection';
import { HeaderSection } from './components/header/HeaderSection';
import Routes from './Routes';
const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <NavMenu/>
        
      <Layout className="layout-videos">
        <Header style={{ background: '#fff', padding: 0 }} >
            <HeaderSection/>
        </Header>
        <Content style={{ margin: '24px 16px 0',  }}>
            <Routes/>
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
