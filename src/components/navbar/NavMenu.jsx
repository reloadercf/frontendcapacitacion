import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
//import {isAllowed} from '../content/ProfilePage/Auth';
//import { hasRole, isAllowed } from './ProfilePage/Auth';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const Logged = ({logOut, permissions, categories}) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

    <Menu.Item key="a" onClick={logOut}>
      <Icon type="appstore-o" style={{
        fontSize: "20px"
      }}/>
      <span className="nav-text">Cerrar Sesion</span>
    </Menu.Item>
    <Menu.Item key="b">
      <Link to="/profile">
        <Icon type="team" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Modulos</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="c">
      <Link to="/evaluaciones">
        <Icon type="profile" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Evaluaciones</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="d">
      <Link to="/extra">
        <Icon type="step-forward" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Extra</span>
      </Link>
    </Menu.Item>



    {/* {isAllowed(permissions,['add_tema']) && 
    <Menu.Item key="9">
      <Link to="/evaluaciones">
        <Icon type="profile" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Can add</span>
      </Link>
    </Menu.Item>
    } */}
    
  </Menu>
);

const Login = ({props}) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
    <Menu.Item key="6">
      <Link to="/login">
        <Icon type="appstore-o"/>
        <span className="nav-text">Iniciar Sesion</span>
      </Link>
    </Menu.Item>
  </Menu>
);

class NavMenu extends Component {

  state = {
    collapsed: true,
    categories:[]
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){
      this.getcategories()
  }

  getcategories=()=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = "http://127.0.0.1:8000/apis/categoria/";
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
              this.setState({categories:data})
        })
  
  }

  render() {

    let {logged} = this.props
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={this.state.collapsed}
        onCollapse={this.toggleCollapsed}
        //collapsible={true}
        style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 1
      }}>

        <div className="logo"/> {logged
          ? <Logged logOut={this.props.logOut} categories={this.state.categories}/>
          : <Login/>}
      </Sider>
    );
  }
}

export default NavMenu;