import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import "../../assets/css/main.css";
import AppContext from "../../Context/AppContext";

const Header = () => {

    const { changeColor, setChangeColor } = useContext(AppContext); 

 

  const handleChange = () => {
    setChangeColor(!changeColor);
  };

  const estyle = {
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, #008ead, #007b9d)",
  };

  const homepageStyle = {
    backgroundImage: changeColor
    ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, #008ead, #007b9d)",
  };

  return (
    <div id="header-wrapper" style={estyle}>
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
              <nav id="nav">
                <Link to="/" style={homepageStyle} >
                  Homepage
                </Link>
                <i onClick={handleChange}>{changeColor ? "🌙" : "🌕"}</i>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
