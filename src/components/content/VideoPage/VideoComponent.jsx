import React from 'react'
import ReactPlayer from 'react-player'
import { Button } from 'antd';
import { Slider } from 'antd';

export const VideoComponent = ({subtema, playing, playPause, volume, setVolume}) => {


    return (
        <div>
            <ReactPlayer
                url="http://www.dipradigital.com/videos_capa/Cotizador%20de%20autos%201era%20parte.mp4"
                playing={playing}
                controls={false}
                volume={volume}
                width={"100%"}
                height={"100%"}/>

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