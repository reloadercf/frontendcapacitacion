import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './components/content/ProfilePage/ProfilePage';
import DetailPage from './components/content/ModuloPage/DetailPage';


class Routes extends React.Component{
    
    render(){
        
        return(
            <Switch>
                <Route exact path="/" component={ProfilePage}/>         
                <Route exact path="/detail" component={DetailPage}/> 
                                   
            </Switch>
        )
    }
}

export default Routes;