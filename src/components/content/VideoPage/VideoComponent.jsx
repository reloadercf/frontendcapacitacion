import React,{Component} from 'react'
import ReactPlayer from 'react-player'
import {Button} from 'antd';
import {Slider} from 'antd';
import swal from 'sweetalert';
import {Link} from 'react-router-dom'
import SliderDos from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';


export class VideoComponent extends Component {
    state={

        url: null,
        playing: false,
        volume: 0.5,
        muted: false,
        played: 0,
        loaded: 0,
        loop:false,
        duration: 0,
        playbackRate: 1.0,
        seek:false,
        finalizo_clase:false,
        value: { min: 2, max: 10 },
       
    }


    playPause = () => 
    {
      this.setState({ playing: !this.state.playing })
    }

    setVolume=(value) => {
      let vol=value/100
      this.setState({ volume:vol})
    }
    componentWillMount(){
        this.get_status_clase()
    }

 
    //Esta funcion sirve para obtener el status de la clase 
    //para saber si la clase ya esta finalizada.
    get_status_clase=()=>{
        let clase=this.props.match.params.video_id
        const userToken=JSON.parse(localStorage.getItem('userToken'));
        let url = `http://127.0.0.1:8000/my_clases?s=${clase}`;
        var request =new Request(url,{
            method: 'GET',
            headers:new Headers({
                'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })        
        })
        fetch(request)
            .then(r=>r.json())
            .then(data=>{

                    let status_finish_clase=data.pop()
                    this.setState({finalizo_clase:status_finish_clase.clase_finish})
                    console.log(this.state.finalizo_clase)
                
            })
            .catch(e=>{
                console.log(e)
        })
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
      if (!this.state.seeking) {
        this.setState(state)
      }
    }
    
    RedirectModulo=()=>{
        this.props.finish_class(this.props.subtema.id)
        this.setState({finalizo_clase:true})
    }

    onEndedVideo=()=>{
        let{match, history}=this.props
        let link = `/modulo${match.params.modulo_id}/tema${match.params.tema_id}/examen${match.params.video_id}`
         if (this.state.finalizo_clase)
         {
                return null
         }
         else{
            swal({
                title: "Video Finalizado",
                text: "Puedes realizar tu evaluacion o ver video otra vez",
                icon: "success",
                buttons: {
                  examen: {
                    text: "Hacer examen",
                    value: "examen",
                  },
                  video: true,
                },
              })
              .then((value) => {
                switch (value) {
                  case "video":
                    this.RedirectModulo()
                    break;
               
                  case "examen":
                    this.RedirectModulo()
                    history.push(link)
                    break;
               
                  default:
                    this.RedirectModulo()
                }
              });
         }
        

    }
   
    ref = player => {
        this.player = player
      }
  
    render() {
        let {subtema,match}=this.props
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
                controls={true}
                volume={volume}
                width={"100%"}
                height={"100%"}
                onEnded={this.onEndedVideo}
                onProgress={this.onProgress}
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
               
                {
                    this.state.finalizo_clase? 
                    <div style={{width:"40%"}}>
                    <span>Adelantar</span>
                    <input
                        type='range' 
                        min={0} 
                        max={1} 
                        step='any'
                        value={played}
                        style={{width:"100%"}}
                        onMouseDown={this.onSeekMouseDown}
                        onChange={this.onSeekChange}
                        onMouseUp={this.onSeekMouseUp}
                    />
                    {/* <SliderDos
                        min={0} 
                        max={1}
                        value={played}
                        step='any'
                        onBeforeChange={this.onSeekMouseDown}
                        onChange={this.onSeekChange}
                        onAfterChange={this.onSeekMouseUp}
                    
                    /> */}
                 
                    </div>
                     
                    :  
                     null
                  
                }
                
                
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
                <div>
                    {this.state.finalizo_clase? 

                    <Link to={ `/modulo${match.params.modulo_id}/tema${match.params.tema_id}/examen${match.params.video_id}`}>
                        <Button type="primary" icon="search"> Examen</Button>
                    </Link>
                    : null}
                    
                    
                </div>

            </div>
           

        </div>

        );
    }
}