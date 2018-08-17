import React,{Component} from 'react'
import ReactPlayer from 'react-player'

import {Button} from 'antd';
import {Slider} from 'antd';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';


export class VideoComponent extends Component {
    state={
        //States Video
        url: null,
        playing: false,
        volume: 0.5,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
    }


    playPause = () => 
    {
      this.setState({ playing: !this.state.playing })
    }
    setVolume=(value) => {
      let vol=value/100
      this.setState({ volume:vol})
    }
  
    onSeekMouseDown = e => {
      this.setState({ seeking: true })
    }
    onSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
    }

    onProgress = state => {
      //console.log('onProgress', state)
      // We only want to update time slider if we are not currently seeking
      if (!this.state.seeking) {
        this.setState(state)
      }
    }
    
    RedirectModulo=()=>{
        let{match, history}=this.props
        let link = `/modulo${match.params.modulo_id}`
        this.props.finish_class(this.props.subtema.id)
        history.push(link)
    }

    onEndedVideo=()=>{
      
      
            Alert.success('Felicidades:', {
                effect: 'slide',
                timeout: 5000,
                position: 'top',
                customFields: {
                    customerName: "Felicidades has finalizado la clase te invitamos a realizar la evaluación para medir tus conosimientos",
                    specialInfo: this.RedirectModulo(),
                }
            });

    }
   
    ref = player => {
        this.player = player
      }
  
    render() {
        let {subtema}=this.props
        let {playing, volume, played } = this.state
   
        return (
            <div
            style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        }}>
        
            <ReactPlayer
                
                ref={this.ref}
                url={subtema.video}
                playing={playing}
                controls={false}
                volume={volume}
                width={"100%"}
                height={"100%"}
                onEnded={this.onEndedVideo}
                onProgress={this. onProgress}
                loop={false}
           
                />

            <div className="control-video">
                <div>
                    <Button
                    onClick={this.playPause}
                    type="primary"
                    shape="circle"
                    icon={playing
                    ? 'pause-circle'
                    : 'play-circle'}
                    size={"large"}/>

                </div>
               
                <div style={{width:"40%"}}>
                    <span>Adelantar</span>
                    <input
                    type='range' min={0} max={1} step='any'
                    value={played}
                    style={{width:"100%"}}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}

                    />
                </div>
                



                <div className="volume-control">
                    <span
                        style={{
                        marginRight: "2em"
                    }}>Volumen:</span>
                    <Slider
                        defaultValue={parseInt(volume * 100)}
                        min={0}
                        max={100}
                        onChange={(value) => this.setVolume(value)}/>
                </div>

            </div>

        </div>

        );
    }
}