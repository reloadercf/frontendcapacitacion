import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {isAllowed} from '../content/ProfilePage/Auth';
//import { hasRole, isAllowed } from './ProfilePage/Auth';
const {Sider} = Layout;

const Logged = ({logOut, permissions}) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

    <Menu.Item key="6" onClick={logOut}>
      <Icon type="appstore-o" style={{
        fontSize: "20px"
      }}/>
      <span className="nav-text">Cerrar Sesion</span>
    </Menu.Item>
    <Menu.Item key="7">
      <Link to="/profile">
        <Icon type="team" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Modulos</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link to="/evaluaciones">
        <Icon type="profile" style={{
          fontSize: "20px"
        }}/>
        <span className="nav-text">Evaluaciones</span>
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
  render() {

    let {logged} = this.props
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
        style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 1
      }}>

        <div className="logo"/> {logged
          ? <Logged logOut={this.props.logOut}/>
          : <Login/>}
      </Sider>
    );
  }
}

export default NavMenu;