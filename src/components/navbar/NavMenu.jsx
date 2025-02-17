import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
//import {isAllowed} from '../content/ProfilePage/Auth';
//import { hasRole, isAllowed } from './ProfilePage/Auth';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;


const Logged = ({logOut, permissions}) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

    <Menu.Item key="a" onClick={logOut}>
      <Icon type="poweroff" style={{
        fontSize: "25px"
      }}/>
      <span className="nav-text">Cerrar sesi&oacute;n</span>
    </Menu.Item>
    <Menu.Item key="b">
      <Link to="/profile">
        <Icon type="dashboard" style={{
          fontSize: "25px"
        }}/>
        <span className="nav-text">Formaci&oacute;n</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="c">
      <Link to="/evaluaciones">
        <Icon type="trophy" style={{
          fontSize: "25px"
        }}/>
        <span className="nav-text">Resultados</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="d">
      <Link to="/extra">
        <Icon type="rocket" style={{
          fontSize: "25px"
        }}/>
        <span className="nav-text">Complementos</span>
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
        <Icon type="play-circle"/>
        <span className="nav-text">Iniciar sesi&oacute;n</span>
      </Link>
    </Menu.Item>
  </Menu>
);

class NavMenu extends Component {

  state = {
    collapsed: false,
   
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {

    let {logged} = this.props
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={this.state.collapsed}
        onCollapse={this.toggleCollapsed}
        collapsible={true}
        style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 1
      }}>

        <div className="logo"/> {logged
          ? <Logged logOut={this.props.logOut} />
          : <Login/>}
      </Sider>
    );
  }
}

export default NavMenu;