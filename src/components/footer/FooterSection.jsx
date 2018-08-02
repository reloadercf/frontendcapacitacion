import React from 'react'
import {Row, Col, Icon} from 'antd';

export const FooterSection=()=>{
    return(
        <div className="footer">  
                 <Row type="flex" justify="space-around" >
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="contacto">
                           <h2>Contacto</h2>
                           <span>
                               Correo: contacto_@dipra.com.mx
                           </span>
                            <span>
                                Tel: 771-153-0048
                            </span>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                       <div className="follow">
                           <h2>Siguenos</h2>
                           <div className="icons">
                                <Icon type="facebook" style={{fontSize: "30px", marginRight: ".5em"}}/>
                                <Icon type="twitter" style={{fontSize: "30px",marginRight: ".5em"}}/>
                                <Icon type="instagram"style={{fontSize: "30px", marginRight: ".5em"}} />
                           </div>
                           <div> 
                               <span>www.dipra.com.mx</span>
                           </div>
                       </div>
                    </Col>
                    <Col lg={6} md={6} xs={24} style={{marginBottom: "1em"}}>
                        <div className="developer"> 
                            <p>Desarrollado por Sistemas DIPRA</p>
                            <h2>Sistemas DIPRA</h2>   
                        
                        </div>    
                    </Col>
                    <Col lg={6} md={6} xs={24}>
                        <div className="aviso" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <p>
                                Con nuestro Pensamientos Cambiamos el Mundo
                                ©Dipra 2017. All rights reserved.Aviso de prvacidad
                            </p>
                        </div> 
                    </Col>   
                </Row>
        </div>
    )
}