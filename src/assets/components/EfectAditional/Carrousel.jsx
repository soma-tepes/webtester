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
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,  // Añade esta línea para activar el autoplay
        autoplaySpeed: 7000, // Puedes ajustar la velocidad del autoplay en milisegundos (en este caso 2 segundos)
    };


    const insertDataCarrousel = [
        { images: img, class: "sub_ima", message: "Data1" },
        { images: nue, class: "sub_ima", message: "Data2" },
        { images: mol, class: "sub_ima", message: "Data3" },
        { images: hrs, class: "sub_ima", message: "Data4" },
    ]

    return (


        <Slider {...settings}>
            {/*  <h3>Jae Oregon</h3> */}

            {insertDataCarrousel?.map(e =>
                <div className='carru_ima'>

                    <div className='carru_subcontainer'>

                        <div className='CarruImage'  >
                            <div  className='sub_ima' 
                             style={{ backgroundImage: `url(${e?.images})`,width:"100%",height:"100%",backgroundSize:"cover" }}></div>
                            <p className='carruText'>{e?.message} ...</p>
                        </div>
                    </div>



                </div>)

            }



        </Slider>

    )
}

export default Carrousel