import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Intro} from './Intro';
import ModulosList from './ModulosList';
//import { Buscador } from './Buscador';

class ProfilePage extends Component {
    state={
        modulos:[],
        my_profile:[],     
    }
      componentWillMount(){
        this.get_myprofile()
        //this.props.getmodulos()
        //this.get_permissions()
      }

    get_myprofile=()=>{
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    let url = "https://still-chamber-95677.herokuapp.com/my_user/";
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
            this.setState({my_profile: data[0]})
            this.setState({modulos: data[0].modulos})
            console.log(this.state.my_profile)

        })
        .catch(e => {
            //console.log(e)
        })
    }

    render() 
    {
        //console.log(my_profile)
        let {my_profile, modulos}=this.state
        return (
            <div style={{height:"auto"}}>
                <Row type="flex" justify="start">
                    <Col lg={24} md={24} xs={24}>
                        <Intro my_profile={my_profile}/>
                    </Col>
                </Row>
                <Row type="flex" justify="start">
                    {/* <Col lg={24} md={24} xs={24}>
                        <Buscador/>              
                    </Col> */}
                    <Col lg={24} md={24}>
                        <ModulosList modulos={modulos} />
                    </Col>
                </Row>
            </div>

        );
    }
}

export default ProfilePage;