import React, {Component} from 'react';
import Slider from "react-slick";
class SliderComponent extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            cssEase: "linear",
          
        };
        return (
            <div style={{
                marginBottom: "5em"
            }}>
                <Slider {...settings}>
                    <div className="container">
                        <img src="https://www.openmet.com/wp-content/uploads/2014/12/empresas-exito.jpg" alt="imagen 1"/>
                        <div className="div-gradient">
                            <h1 >Genera presencia con nuevos clientes</h1>
                        </div>
                    </div>
                    <div className="container">
                        <img src="https://elevenews.com/wp-content/uploads/2018/04/Risk-management-jobs-1024x576-1024x576.jpg" alt="imagen 2"/>
                        <div className="div-gradient">
                            <h1 >Mejora tus resultados </h1>
                        </div>
                    </div>

                    <div className="container">
                        <img src="https://www.portada-online.com/wp-content/uploads/2015/07/Social_Marketing.jpg" alt="imagen 3"/>
                        <div className="div-gradient">
                            <h1>Entiende tu Negocio</h1>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default SliderComponent;