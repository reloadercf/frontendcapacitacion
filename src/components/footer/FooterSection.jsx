import React from 'react'
import {Row, Col, Icon} from 'antd';
import { Popover, Button } from 'antd';


export const FooterSection=()=>{
    return(
        <div className="footer">  
                 <Row type="flex" justify="space-around" >
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="contacto">
                       <Popover title="Nosotros te ayudamos"><h2><Icon type="phone" theme="outlined" /> Contacto</h2></Popover>
                           <span>
                           <Icon type="mail" theme="outlined" /> <Popover title="¿Tienes dudas?"><a href="mailto:sistemas@dipra.com.mx?Subject=Hola%20DIPRA" target="_top">sistemas@dipra.com.mx</a></Popover>
                           </span>
                            <span>
                            <Popover title="Llamanos"><Icon type="mobile" theme="outlined" /> (771) 153-0048 ext 112</Popover>
                            </span>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="follow">
                           <h2><Popover title="Compartimos contenido en Redes Sociales"><Icon type="like" theme="outlined" /> Siguenos</Popover></h2>
                           <div className="icons">
                           <Popover title="Dale Like"><a href="https://www.facebook.com/DIPRASC" target="_blank"><Icon type="facebook" style={{fontSize: "30px", marginRight: ".5em",color:"#fff"}}/></a></Popover>
                           <Popover title="Follow"><a href="https://twitter.com/DIPRASC?lang=es" target="_blank"><Icon type="twitter" style={{fontSize: "30px",marginRight: ".5em",color:"#fff"}}/></a></Popover>
                           <Popover title="Siguenos"><a href="https://www.instagram.com/diprasc/" target="_blank"><Icon type="instagram"style={{fontSize: "30px", marginRight: ".5em",color:"#fff"}} /></a></Popover>
                           </div>
                           <div> 
                               <span><Popover title="Visita sito Oficial"><a href="http://www.dipra.com.mx" target="_blank"><Icon type="global" theme="outlined" /> www.dipra.com.mx</a></Popover></span>
                           </div>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                        <div className="developer"> 
                            <p>Developed by team of systems</p>
                            <br/>
                            <h2><Icon type="laptop" theme="outlined" style={{ fontSize: '36px'}}  />  of DIPRA</h2>                     
                        </div>    
                    </Col>
                    <Col lg={6} md={6} xs={24}>
                        <div className="aviso" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <p><br/>
                            <Popover title="Atrevete a cambiar el mundo"> Nuestros pensamientos cambian el mundo</Popover>
                            </p>
                             <p>
                             ©Dipra 2018. All rights reserved <br/>
                             <Popover title="Consulta"><a href="http://www.dipra.com.mx/avisoprivacidad.pdf" target="_blank">Aviso de Privacidad</a></Popover>
                             </p>
                        </div> 
                    </Col>   
                </Row>
        </div>
    )
}