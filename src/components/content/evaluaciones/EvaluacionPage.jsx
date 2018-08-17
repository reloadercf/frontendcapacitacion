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
        let url = "https://infinite-peak-15466.herokuapp.com/my_evaluations/";
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
            <Row gutter={24} justify={"center"} style={{height: "43vh"}}>
                {evaluaciones.map((i, key)=>(
                <Col  lg={6} md={6} sm={12} xs={24} key={key}>                                   
                         <div style={{marginBottom:"2em" }}  >
                            <EvaluacionComponent  {...i} /> 
                         </div>                             
                </Col>  
                ))}            
            </Row>
        );
    }
}

export default EvaluacionPage;