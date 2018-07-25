import React from 'react'
import ReactPlayer from 'react-player'


export const VideoComponent=({subtema})=>{

    console.log(subtema)
    return(

        <ReactPlayer
        url={subtema.video}
        playing={false}
        controls={true}
        width={"100%"}
        height={"500px"}
        />

    )
}