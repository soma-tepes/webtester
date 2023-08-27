import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import image from "../css/images/banner.jpg"
const Banner = () => {


  const { changeColor } = useContext(AppContext); 



  const estyle = {
    backgroundImage: changeColor
      ?"-webkit-linear-gradient(bottom, black, rgb(241, 237, 237))"
      :  "-webkit-linear-gradient(top, #c8d2bc, #c8d2bc" ,
  };

  const estyle2 = {
    backgroundImage: changeColor
      ?"-webkit-linear-gradient(bottom, black, rgb(241, 237, 237))"
      :  `url(${image})` ,
  };

  return (
    
    <div id="banner-wrapper" style={estyle}>
        <div class="container">

            <div id="banner" style={estyle2}>
                <h2>JAE Oregon Internal Resources</h2>
                <span>Links and Resources</span>
            </div>

        </div>
    </div>
  )
}

export default Banner