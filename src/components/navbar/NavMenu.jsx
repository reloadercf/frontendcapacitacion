import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
const {Sider } = Layout;


class NavMenu extends Component {
    render() {
        return (
            <Sider 
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => { console.log(broken); }}
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                style={{ height: '100vh', position: 'fixed', zIndex:1}} >

            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
         
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">Cerrar Sesion</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">Mis cursos</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">Examenes</span>
              </Menu.Item>
            </Menu>
          </Sider>
        );
    }
}

export default NavMenu;