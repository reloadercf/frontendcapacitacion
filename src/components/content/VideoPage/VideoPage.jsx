import React, { Component } from 'react';
import ReactPlayer from 'react-player'

const style={
    video:{}
}

class VideoPage extends Component 

{
    render() {
        let{video}=this.props
        return (
            <div>
                <ReactPlayer 
                    url={video} 
                    playing ={false}
                    controls={true}
                    width={"100%"}
                    height={"500px"}
              
                    />
            </div>
        );
    }
}

export default VideoPage;