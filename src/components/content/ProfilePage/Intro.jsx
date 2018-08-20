import React from 'react'
import { Card } from 'antd';




export const Intro=({my_profile})=>{

    //console.log(my_profile.correo)

    return(
        <Card >
        <div>
            <h1>Bienvenido {my_profile.slug}</h1>
            <span>Esta plataforma fue diseñada par que tu asesor financiero logres  ampliar tus conocimientos y potencializar tus ventas.</span>
        </div>
      </Card>
    )
}