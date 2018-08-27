import React from 'react'
import {Row, Col, Card, Radio} from 'antd';
import { Button, Icon } from 'antd';
const RadioGroup = Radio.Group;
export const ExamenComponent = ({onChange, preguntas,SendExamen, respuestas, paso_exa}) => {

  
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
                                    <h3 style={{display: "flex", alignItems: "center"}}>{i.pregunta} {respuestas[key]===true?<Icon  type="check-circle" style={{fontSize: 30, color: '#2eb872', marginLeft:"20px"}} /> :null } {respuestas[key]===false?<Icon type="close-circle"  style={{fontSize: 30, color: '#e84545',  marginLeft:"20px"}}/>:null }  </h3>
                                    <RadioGroup  onChange={onChange} name={i.pregunta} defaultValue={i.pregunta} >
                                        {i.respuesta_pregunta.map((b, key)=>(                             
                                                <div key={key}>
                                                    <Radio  name={i.pregunta} value={b.respuestas}>{b.respuestas} </Radio> 
                                                </div>           
                                        ))} 
                                    </RadioGroup>   
                                    <hr/>
                                </div>
                                    
                            ))} 
                            <div>
                                {}
                                {paso_exa===true?<Button htmlType="submit" type="primary">Repetir examen</Button>:null}
                                {paso_exa===false?<Button htmlType="submit" onClick={SendExamen} type="primary">Calificar</Button>:null}
                          
                            </div>
                         
                            
                        </div>     
                  
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

