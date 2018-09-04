import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import SliderComponent from './SliderComponent';

class HomePage extends Component {
    render() {

        return (
            <div className="home-page">
                <h1>DESARROLLO PROFESIONAL</h1>
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
                                        type="bar-chart"
                                        style={{
                                        fontSize: "30px",
                                        color: '#ffffff',
                                        marginRight: "5px"
                                    }}/>Work team
                                </h2>
                            </div>

                            <p>Nuestro equipo de formadores son expertos y adaptan los contenidos de acuerdo a tu nivel de aprendizaje y los presentan en breves y prácticos vídeos.</p>
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
                                        type="up-circle"
                                        style={{
                                        fontSize: "30px",
                                        color: '#ffffff',
                                        marginRight: "5px"
                                    }}/>Training
                                </h2>
                            </div>
                            <p>Aprende donde y cuando quieras:En todo momento esta disponible el acceso a la plataforma donde podras aprender y adquirir conocimiento de forma continua. Con las apps gratuitas que DIPRA desarrollo para ti disponibles para iOS, Android, </p>
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
                                        type="tag"
                                        style={{
                                        fontSize: "30px",
                                        color: '#ffffff',
                                        marginRight: "5px"
                                    }}/>Effect
                                </h2>
                            </div>
                            <p>Mantenerse al día con la tecnología tomando cursos, evaluaciones y herramientas dirigidas por expertos que te ayudarán a desarrollar las habilidades que necesitas, cuando las necesitas. </p>
                        </div>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default HomePage;