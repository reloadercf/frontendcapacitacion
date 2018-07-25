import React from 'react'
import {Card} from 'antd';
import {Row, Col} from 'antd';
export const HeaderDetail = ({modulo}) => {
    return (

        <div className="header-detail">
            <Card >
                <div>
                    <h1>MODULO {modulo.id}</h1>
                    <span>{modulo.descripcion}</span>
                </div>
            </Card>

            <Row type="flex" justify="space-around" className="div-que-aprendere">
                <Col lg={15} md={15} xs={24} span={8}>
                    <Card>
                        <div>
                            <h3>¿Qué aprendere?</h3>
                            <hr/>
                            <div>
                                <Row type="flex" justify="space-around">
                                    <Col lg={12} md={12} xs={24}>
                                        <div>
                                            {modulo.objetivo}
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} xs={24}>
                                        <div> {modulo.objetivo}</div>
                                    </Col>
                                </Row>

                            </div>

                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={6} xs={24} span={16}>
                    <div className="div-imagen-modulo">
                        <img
                            src="https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?auto=compress&cs=tinysrgb&h=350" alt=""/>
                    </div>

                </Col>
            </Row>

        </div>

    )
}