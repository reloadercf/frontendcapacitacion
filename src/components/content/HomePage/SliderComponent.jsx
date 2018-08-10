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
            autoplaySpeed: 4000,
            cssEase: "linear",
            pauseOnHover: true
        };
        return (
            <div style={{
                marginBottom: "5em"
            }}>
                <Slider {...settings}>
                    <div className="container">
                        <img src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imagen 1"/>
                        <div className="div-gradient">
                            <h1 >Amplia tus conocimientos</h1>
                        </div>
                    </div>
                    <div className="container">
                        <img src="https://images.pexels.com/photos/946250/pexels-photo-946250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imagen 2"/>
                        <div className="div-gradient">
                            <h1 >Mejora tus habilidades de prospección</h1>
                        </div>
                    </div>

                    <div className="container">
                        <img src="https://images.pexels.com/photos/955447/pexels-photo-955447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imagen 3"/>
                        <div className="div-gradient">
                            <h1>Aprende a manejar las herramientas para potencializar tus ventas</h1>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default SliderComponent;