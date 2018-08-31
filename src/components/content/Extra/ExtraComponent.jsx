import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'antd';
import ReactPlayer from 'react-player'



export const ExtraComponent =({id, titulo, objetivo, descripcion, contenido, url}) =>(
   <div>
       <Card
       style={{padding: 0}}
            className="card-extra"
          >
            <div>
                <div className="div_img_modulo">
                    <ReactPlayer
                        className='react-player'
                        url={url}
                        width='100%'
                        height='100%'
                        controls={true}
                        config={{
                            youtube: {
                              playerVars: { showinfo: 1 }
                            },
                            facebook: {
                              appId: '12345'
                            }
                          }}
                        
                    />  
                </div>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </Card>

   </div>
   
);
