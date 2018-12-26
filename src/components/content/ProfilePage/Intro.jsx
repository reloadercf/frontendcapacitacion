import React from 'react'
import { Card } from 'antd';
import { Icon } from 'antd';




export const Intro=({my_profile})=>{

    //console.log(my_profile.correo)

    return(
        <Card >
        <div>
            <h1>Bienvenido <Icon type="logout" theme="outlined" /> {my_profile.slug} <Icon type="login" theme="outlined" /></h1>
            <span><div
                                style={{
                               textAlign:"justify"
                            }}> A medida que evoluciona tu carrera, necesita una solución de aprendizaje que inspire a cerrar nuevas negociaciones. Con nuestra plataforma, podras especializar tu carrera a la velocidad de la tecnología, trabajar de manera más inteligente y rápida, generando habilidades fundamentales para continuar monetizando tus conocimientos.</div></span>
        </div>
      </Card>
    )
}