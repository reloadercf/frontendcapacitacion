import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfilePage from './components/content/ProfilePage/ProfilePage';
import DetailPage from './components/content/ModuloPage/DetailPage';
import {VideoPage} from './components/content/VideoPage/VideoPage';
import LogUserPage from './components/navbar/LogUserPage';
import HomePage from './components/content/HomePage/HomePage';
import ExamenPage from './components/content/ExamenPage/ExamenPage';
import EvaluacionPage from './components/content/evaluaciones/EvaluacionPage';
import ExtraPage from './components/content/Extra/ExtraPage';
//import { hasRole, isAllowed } from './components/content/ProfilePage/Auth';

class Routes extends React.Component{ 
    render(){
          let {   
                modulos, 
                logged, 
                logIn,
                user,
                finish_class,
                do_evaluacion,
                video_end,
                paso_examen,
                examen_avalible,
                getmodulos
                
                } = this.props;

                console.log(modulos)
        return(
            <Switch>
                <Route exact path="/" render={()=>(logged?(<Redirect to="/profile"/>):(<HomePage/>))}  />  
                <Route path="/login" render={props =>(logged?<Redirect to="/profile" />:<LogUserPage {...props} logIn={logIn}/>)}/>    
                <Route path="/profile" render={()=>(logged?<ProfilePage getmodulos={getmodulos}  modulos={modulos} />:<Redirect to="/"/>)}/> 
                <Route path="/extra" render={props=>(logged?<ExtraPage {...props}/>:<Redirect to="/"/>)}/> 
                <Route exact path="/modulo:modulo_id" render={props=>(logged?<DetailPage {...props}  modulos={modulos} user={user} examen_avalible={examen_avalible} do_evaluacion={do_evaluacion}/>:<Redirect to="/"/>)}/>  
                <Route exact path="/modulo:modulo_id/tema:tema_id/video:video_id"   render={props=>(logged?<VideoPage 
                    {...props} 
                    finish_class={finish_class} 
                    video_end={video_end} 
                    modulos={modulos} 
                    />:<Redirect to="/"/>)}/> 

                <Route exact path="/modulo:modulo_id/tema:tema_id/examen:examen_id" render={props=>(logged?<ExamenPage {...props} modulos={modulos} paso_examen={paso_examen} user={user}/>:<Redirect to="/"/>)}/>    
                <Route path="/evaluaciones" render={()=>(logged?<EvaluacionPage  />:<Redirect to="/"/>)}/>  
                <Route component={HomePage}/>                                
            </Switch>
        )
    }
}

export default Routes;

