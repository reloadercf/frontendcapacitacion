import React from 'react'
import ReactPlayer from 'react-player'
import { Button } from 'antd';
import { Slider } from 'antd';

 
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';
  
export const VideoComponent = ({subtema, playing, playPause, volume, setVolume, video, match, history}) => {
    console.log(history)

    let link=`/modulo${match.params.modulo_id}/tema${match.params.tema_id}/examen${match.params.video_id}`
    
    
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <ReactPlayer
                url={subtema.video}
                playing={playing}
                controls={false}
                volume={volume}
                width={"100%"}
                height={"100%"}
                onEnded={() => {
                    Alert.success('Felicidades:', {
                        effect: 'slide',
                        timeout: 5000,
                        position: 'top',
                        customFields: {
                            customerName: "Es hora de probar tu desempeño contesta esta pequeña evaluacion ",
                        }
                    });
                    history.push(link)  
                    
                }}
                loop={false}      
                />

            <div className="control-video" >           
                <Button onClick={playPause} type="primary" shape="circle" icon={playing ? 'pause-circle' : 'play-circle'}   size={"large"}/>
                <div className="volume-control">
                    <span style={{marginRight:"2em"}}>Volumen:</span>
                    <Slider   defaultValue={parseInt(volume*100)}  min={0} max={100} onChange={(value)=>setVolume(value)}  />
                   
                </div>
                
            </div>

        </div>

    )
}