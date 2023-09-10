import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from "../../css/images/hands.jpg"
import mol from "../../css/images/molding.jpg"
import nue from "../../css/images/cap.png"
import hrs from "../../css/images/hours.png"
import "../../Styles/Carrousel.css"
import { Link } from 'react-router-dom';

const Carrousel = () => {
    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,  // Añade esta línea para activar el autoplay
        autoplaySpeed: 5000, // Puedes ajustar la velocidad del autoplay en milisegundos (en este caso 2 segundos)
    };
    return (


        <Slider {...settings}>
               {/*  <h3>Jae Oregon</h3> */}
            <div className='carru_ima'>
           
                <div className='carru_subcontainer'>
                    
                    <div className='sub_ima' style={{ backgroundImage: `url(${img})` }} >
                   
                        <p className='carruText'>Hello</p>
                    </div>
                </div>



            </div>
            <div className='carru_ima'>
                <div className='carru_subcontainer'>
                    <div className='sub_ima' style={{ backgroundImage: `url(${nue})` }} >

                        <p className='carruText'>Hello</p>
                    </div>
                </div>



            </div>
            <div className='carru_ima'>
                <div className='carru_subcontainer'>
                    <div className='sub_ima' style={{ backgroundImage: `url(${img})` }} >

                        <p className='carruText'>Hello</p>
                    </div>
                </div>



            </div>
            <div className='carru_ima'>
                <div className='carru_subcontainer'>
                    <div className='sub_ima' style={{ backgroundImage: `url(${mol})` }} >

                        <p className='carruText'>Hello</p>
                    </div>
                </div>



            </div>
            <div className='carru_ima'>
                <div className='carru_subcontainer'>
                    <div className='sub_ima' style={{ backgroundImage: `url(${mol})` }} >

                        <p className='carruText'>Hello</p>
                    </div>
                </div>



            </div>
            <div className='carru_ima'>
                <div className='carru_subcontainer'>
                    <div className='sub_ima' style={{ backgroundImage: `url(${hrs})` }} >

                   <Link to={"/capturehours"}><p className='carruText'>Ver mas....</p>  </Link>     
                    </div>
                </div>



            </div>


        </Slider>

    )
}

export default Carrousel