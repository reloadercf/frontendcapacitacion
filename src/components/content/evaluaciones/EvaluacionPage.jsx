import React, { Component } from 'react';
import {Row, Col} from 'antd'
import { EvaluacionComponent } from './EvaluacionComponent';


class EvaluacionPage extends Component {

    state={
        evaluaciones:[]
    }

    componentWillMount()
    {
        this.get_evaluaciones()
    }



    get_evaluaciones=()=>{

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = "http://127.0.0.1:8000/my_evaluations/";
        var request = new Request(url, {
            method: 'GET',
            headers:new Headers({
                'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            }) 
        });
        fetch(request)
            .then(r => r.json())
            .then(data => {
                this.setState({evaluaciones: data})
                console.log(data)
    
            })
            .catch(e => {
                //console.log(e)
            })
        }
    render() {
        let{evaluaciones}=this.state
        return (
            <Row justify={"center"} style={{height: "43vh"}}>
                <Col lg={24} md={24} sm={24} xs={24}>                 
                    {evaluaciones.map((i, key)=>(
                         <div style={{marginBottom:"2em"}} key={key} >
                            <EvaluacionComponent  {...i} /> 
                         </div>
                    
                 ))}  
                </Col>             
            </Row>
        );
    }
}

export default EvaluacionPage;