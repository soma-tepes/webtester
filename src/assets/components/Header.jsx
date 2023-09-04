import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "../../assets/css/main.css";
import AppContext from "../../Context/AppContext";
import useStore, { calculateTitlesById } from "../../utils/store";
import useFetchData from "../../utils/hookEfect";
import { estyle, contenedor, styleNav } from "../../utils/header.styles";
const Header = () => {
  const { changeColor, setChangeColor } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);
  const { fetchData } = useFetchData();
  const { data } = useStore();
  const titlesById = calculateTitlesById(data);

  const handleChange = () => {
    setChangeColor(!changeColor);
  };
  const estyleOne = estyle(changeColor);
  const estyleTwo = contenedor(changeColor);
  const estyleThree = styleNav(changeColor);

  const styleBlack = {
    backgroundImage: hovered
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, black, rgb(241, 237, 237))",
    transition: "background-image 0.3s ease",
  };
  const styleNav2 = {
    backgroundImage: hovered
      ? "-webkit-linear-gradient(top, #0782a0, #077d9b)"
      : "-webkit-linear-gradient(top, #007b99, #007897)",
    transition: "background-image 0.3s ease",
  };

  return (
    <div id="header-wrapper" style={estyleTwo}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="header" style={estyleOne}>
              <Link to={"/capturehours"}>
                <h1>{titlesById?.[1]}</h1>
              </Link>
              <h1>
                <Link to="" id="logo">
                  {titlesById?.[1]}
                </Link>
              </h1>
              <nav id="nav" style={estyleThree}>
                <Link
                  to="#"
                  onClick={handleChange}
                  style={changeColor ? styleBlack : styleNav2}
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
