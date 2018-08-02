import React, { Component } from 'react';
import {Row, Col, Icon} from 'antd';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <h1>PLATAFORMA INTEGRAL DE CAPACITACION DIPRA</h1>
                <Row type="flex" justify="space-around" > 
                    <Col lg={8} md={8} xs={24} >
                        <div className="home_objetivos">
                            <h2>Objetivo</h2>
                            <p>adadasd</p>
                        </div>
                    </Col>
                    <Col lg={8} md={8} xs={24} >
                        <div className="home_info">
                            <h2>Objetivo</h2>
                            <p>adadasd</p>
                        </div>
                    </Col>
                    <Col lg={8} md={8} xs={24} >
                        <div className="home_estrategia">
                            <h2>Objetivo</h2>
                            <p>adadasd</p>
                        </div>
                    </Col>
                    
                </Row>

            </div>
        );
    }
}

export default HomePage;