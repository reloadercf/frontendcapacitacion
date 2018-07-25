import React, { Component } from 'react';
import WrappedNormalLoginForm from './LoginForm';

class LogUserPage extends Component {
    render() {
        return (
            <div style={{background:"#ffff"}}>
                <WrappedNormalLoginForm/>
            </div>
        );
    }
}

export default LogUserPage;