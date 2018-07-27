import React from 'react'
import {Row, Col, Card, Radio} from 'antd';
const RadioGroup = Radio.Group;
export const ExamenComponent = ({RespExamen, respuesta}) => {
    return (
        <div style={{
            marginTop: "3em"
        }}>
            <Card>
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <div style={{marginTop: "3em"}}>
                            <h3>¿Esta es la pregunta 1?</h3>
                            <div>
                                <RadioGroup name={"hola1"} onChange={RespExamen} value={respuesta}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </RadioGroup>
                            </div>
                            <hr/>
                        </div>     
                        <div style={{marginTop: "3em"}}>
                            <h3>¿Esta es la pregunta 2?</h3>
                            <div>
                                <RadioGroup name={"hol2"}onChange={RespExamen} value={respuesta}>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </RadioGroup>
                            </div>
                            <hr/>
                        </div>   
                        <div style={{marginTop: "3em"}}>
                            <h3>¿Esta es la pregunta 2?</h3>
                            <div>
                                <RadioGroup name={"hola3"} onChange={RespExamen} value={respuesta} >
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </RadioGroup>
                            </div>
                            <hr/>
                        </div>    
                    </Col>
                </Row>
            </Card>
        </div>
    )
}