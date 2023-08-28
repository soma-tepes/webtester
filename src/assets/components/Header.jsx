import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "../../assets/css/main.css";
import AppContext from "../../Context/AppContext";


const Header = () => {

  const { changeColor, setChangeColor } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);


  const handleChange = () => {
    setChangeColor(!changeColor);
  };

  const estyle = {
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, #008ead, #007b9d)",
  };

  const contenedor = {
    backgroundImage: changeColor ?
      "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      :
      "-webkit-linear-gradient(top, #008dab, #007294)"
  }

  const styleNav = {
    backgroundImage: changeColor ?
      "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      :
      "-webkit-linear-gradient(top, #007b99, #007897)"
  }

  const styleBlack = {
    backgroundImage: hovered ?
      "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      :
      "-webkit-linear-gradient(top, black, rgb(241, 237, 237))",
    transition: "background-image 0.3s ease",

  }
  const styleNav2 = {
    backgroundImage: hovered
      ? "-webkit-linear-gradient(top, #0782a0, #077d9b)"
      : "-webkit-linear-gradient(top, #007b99, #007897)",
    transition: "background-image 0.3s ease",
  }





  return (
    <div id="header-wrapper" style={contenedor}>

      <div className="container">

        <div className="row">

          <div className="col-12">


            <div id="header" style={estyle}>

              <Link to={"/capturehours"}>
                <h1>JAE Oregon</h1>
              </Link>
              <h1>
                <Link to="" id="logo">
                  JAE Oregon
                </Link>
              </h1>
              <nav id="nav" style={styleNav}>
           
                < Link to="#" onClick={handleChange} style={changeColor ? styleBlack : styleNav2}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {changeColor ? "-Home-" : "Homepage"}
                </Link>
               
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
