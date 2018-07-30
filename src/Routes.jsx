import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfilePage from './components/content/ProfilePage/ProfilePage';
import DetailPage from './components/content/ModuloPage/DetailPage';
import {VideoPage} from './components/content/VideoPage/VideoPage';
import LogUserPage from './components/navbar/LogUserPage';
import HomePage from './components/content/HomePage/HomePage';
import ExamenPage from './components/content/ExamenPage/ExamenPage';


class Routes extends React.Component{ 
    render(){
          let {modulos, 
                logged, 
                logIn,
                playPause,
                playing,
                volume,
                setVolume
                
                } = this.props;
        return(
            <Switch>
                <Route exact path="/" component={HomePage}  />  
                <Route path="/login" render={props =>(logged?<Redirect to="/profile" />:<LogUserPage {...props} logIn={logIn}/>)}/>    
                <Route path="/profile" render={()=>(logged?<ProfilePage modulos={modulos}/>:<Redirect to="/"/>)}/> 
                <Route exact path="/modulo:modulo_id" render={props=>(logged?<DetailPage {...props}  modulos={modulos}/>:<Redirect to="/"/>)}/>  
                <Route exact path="/modulo:modulo_id/tema:tema_id/video:video_id" 
                      render={props=>(logged?<VideoPage {...props} playing={playing}  volume={volume} setVolume={setVolume} playPause={playPause} modulos={modulos} />:<Redirect to="/"/>)}/>    
                {/* <Route exact path="/modulo:modulo_id/tema:tema_id/examen:examen_id" render={props=>(logged?<ExamenPage {...props} modulos={modulos} />:<Redirect to="/"/>)}/>     */}
                                           
            </Switch>
        )
    }
}

export default Routes;

