import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfilePage from './components/content/ProfilePage/ProfilePage';
import DetailPage from './components/content/ModuloPage/DetailPage';
import {VideoPage} from './components/content/VideoPage/VideoPage';

import LogUserPage from './components/navbar/LogUserPage';


class Routes extends React.Component{ 
    render(){
          let {modulos, logged} = this.props;
        return(
            <Switch>
           
                <Route exact path="/"  render={props => (<ProfilePage {...props} modulos={modulos}/>)}  />    
                <Route path="/login" render={props =>(logged?<Redirect to="/" />:<LogUserPage {...props}/>)}/>     
                <Route exact path="/modulo:modulo_id"  render={props => (<DetailPage {...props} modulos={modulos}/>)} /> 
                <Route exact path="/modulo:modulo_id/tema:tema_id/video:video_id"  render={props => (<VideoPage {...props} modulos={modulos}/>)} />                
            </Switch>
        )
    }
}

export default Routes;