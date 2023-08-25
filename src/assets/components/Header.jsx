import React from "react";
import "../../assets/css/main.css";
import { Link } from "react-router-dom";
import '../Styles/Header.css'

const Header = () => {
 
  return (
    <div id="header-wrapper" className="headerHeader">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header id="header" className="subnameHeader">
              <Link  to={"/capturehours"}>
                <h1 >JAE Oregon</h1>
              </Link>
                <h1><Link to="" id="logo">JAE Oregon</Link></h1>
           
              <nav id="nav">
                <Link to="/" className="current-page-item">
                  Homepage
                </Link>
              
              </nav>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
