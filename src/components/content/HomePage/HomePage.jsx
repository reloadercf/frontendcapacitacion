import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import SliderComponent from './SliderComponent';

class HomePage extends Component {
    render() {

        return (
            <div className="home-page">
                <h1>PLATAFORMA INTEGRAL DE CAPACITACIÓN DIPRA</h1>
                <SliderComponent/>
                <Row type="flex" justify="space-around">
                    <Col lg={8} md={8} xs={24}>
                        <div className="home_objetivos">
                            <div
                                style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h2>
                                    <Icon
                                        type="star"
                                        style={{
                                        fontSize: "30px",
                                        color: '#1e2022',
                                        marginRight: "5px"
                                    }}/>Objetivo
                                </h2>
                            </div>

                            <p>Esta plataforma fue diseñada para que tu</p>
                        </div>
                    </Col>
                    <Col lg={8} md={8} xs={24}>
                        <div className="home_info">
                        <div
                                style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h2>
                                    <Icon
                                        type="like"
                                        style={{
                                        fontSize: "30px",
                                        color: '#1e2022',
                                        marginRight: "5px"
                                    }}/>Objetivo
                                </h2>
                            </div>
                            <p>adadasd</p>
                        </div>
                    </Col>
                    <Col lg={8} md={8} xs={24}>
                        <div className="home_estrategia">
                            <div
                                style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h2>
                                    <Icon
                                        type="star"
                                        style={{
                                        fontSize: "30px",
                                        color: '#1e2022',
                                        marginRight: "5px"
                                    }}/>Objetivo
                                </h2>
                            </div>
                            <p>adadasd</p>
                        </div>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default HomePage;