import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
const {Sider} = Layout;

const Logged = ({logOut, handleCart}) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

    <Menu.Item key="6">
      <Icon type="appstore-o"/>
      <span className="nav-text">Cerrar Sesion</span>
    </Menu.Item>
    <Menu.Item key="7">
      <Icon type="team"/>
      <span className="nav-text">Mis cursos</span>
    </Menu.Item>
    <Menu.Item key="8">
      <Icon type="shop"/>
      <span className="nav-text">Examenes</span>
    </Menu.Item>
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
        onBreakpoint={(broken) => {
        console.log(broken);
      }}
        onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
        style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 1
      }}>

        <div className="logo"/> {logged
          ? <Logged/>
          : <Login/>}
      </Sider>
    );
  }
}

export default NavMenu;