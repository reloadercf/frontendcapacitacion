import React, { Component } from 'react';
import WrappedNormalLoginForm from './LoginForm';

class LogUserPage extends Component {

    state={
        user:{},  
    }

    render() {

        let {user} = this.state;
        let {logIn}=this.props
        
        return (
            <div style={{
                width:"100%", 
                height:"80vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
                }}>
                <WrappedNormalLoginForm
                         {...user}
                         user={user}
                         handleText={this.handleText}
                         logIn={logIn}
                />
            </div>
        );
    }
}

export default LogUserPage;