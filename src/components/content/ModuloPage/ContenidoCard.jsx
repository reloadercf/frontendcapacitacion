import React, {Component} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

export class ContenidoCard extends Component 
{

    state={
        clases_finish:null
    }


    
    componentWillMount() {
        this.get_status_clase()
    }
    

    get_status_clase=()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = `https://serene-fortress-47490.herokuapp.com/my_clases?s=${this.props.id}`;
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
                console.log(data[0].clase_finish)
                this.setState({clases_finish:data[0].clase_finish})  
                //return data[0].clase_finish      
            })
            .catch(e => {
                //console.log(e)
            })
  
      }

      

    render() 
    {
        let{ id,
            title_clase,
            id_tema,
            id_modulo,
            do_evaluacion,
            register_class,
            }=this.props


        return (

            <div className="div-subtema">

                <div className="info-subtema">
                    <h3>{id}: {title_clase}</h3>
                </div>
                <div
                    style={{
                    display: "flex",
                    alignItems: "center"
                }}>

                    {this.state.clases_finish
                        ? <Link to={`/modulo${id_modulo}/tema${id_tema}/examen${id}`}>
                                <Button
                                    onClick={() => do_evaluacion(id)}
                                    style={{
                                    marginRight: "10px"
                                }}
                                    type="primary"
                                    icon="search">Examen</Button>
                            </Link>

                        : <Link to={`/modulo${id_modulo}/tema${id_tema}/examen${id}`}>
                            <Button
                                onClick={() => do_evaluacion(id)}
                                style={{
                                marginRight: "10px"
                            }}
                                type="primary"
                                icon="search"
                                disabled>Examen</Button>
                        </Link>
                    }

                    <Link to={`/modulo${id_modulo}/tema${id_tema}/video${id}`}>
                        <Button onClick={() => register_class(id)} type="primary" icon="search">Video</Button>
                    </Link>

                </div>

            </div>

        );
    }
}

