import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './components/content/ProfilePage/ProfilePage';
import DetailPage from './components/content/ModuloPage/DetailPage';
import VideoPage from './components/content/VideoPage/VideoPage';


class Routes extends React.Component{
    
    render(){
          let {modulos} = this.props;
        return(
            <Switch>
                <Route exact path="/"  render={props => (<ProfilePage {...props} modulos={modulos}/>)}  />         
                <Route exact path="/detail/:modulo_id"  render={props => (<DetailPage {...props} modulos={modulos}/>)} /> 
                <Route exact path="/video"  render={props => (<VideoPage {...props} modulos={modulos}/>)} /> 
                           
            </Switch>
        )
    }
}

export default Routes;