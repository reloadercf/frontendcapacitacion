import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Intro} from './Intro';
import ModulosList from './ModulosList';
import { Buscador } from './Buscador';

class ProfilePage extends Component {
    render() {

        let {modulos}=this.props
        return (
            <div>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <Intro/>
                    </Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <Buscador/>              
                    </Col>
                    <Col lg={24} md={24}>
                        <ModulosList modulos={modulos}/>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default ProfilePage;