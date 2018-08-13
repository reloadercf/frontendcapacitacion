import React from 'react'
import {Row, Col, Card, Radio} from 'antd';
import { Button } from 'antd';
const RadioGroup = Radio.Group;
export const ExamenComponent = ({onChange, preguntas,SendExamen}) => {
    return (
        <div style={{
            marginTop: "3em"
        }}>
            <Card>
                <Row>
                    <Col lg={24} md={24} sm={24} xs={24}>
                        <div style={{marginTop: "3em"}}>

                            {preguntas.map((i, key)=>(                             
                                <div key={key} style={{marginBottom:"2em"}}>
                                    <h3>{i.id} {i.pregunta}</h3>
                                    <RadioGroup  onChange={onChange} name={i.pregunta} defaultValue={i.pregunta} >
                                        {i.respuesta_pregunta.map((b, key)=>(                             
                                                <div key={key}>
                                                    <Radio name={i.pregunta} value={b.respuestas}>{b.respuestas}</Radio>
                                                </div>           
                                        ))} 
                                    </RadioGroup>   
                                    <hr/>
                                </div>
                                    
                            ))} 
                            <Button htmlType="submit" onClick={SendExamen} type="primary">Calificar</Button>

                      
                            
                        </div>     
                  
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

