import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import useStore, { calculateTitlesById } from "../../utils/store";
import useFetchData from "../../utils/hookEfect";
import { estyle, estyle2 } from "../../utils/styles";
import Carrousel from "./EfectAditional/Carrousel";
import abc from "../css/images/abc.webp"
import wall from "../css/images/cal.webp"
import '../Styles/Banner.css'

const Banner = () => {
  const { changeColor } = useContext(AppContext);
  const { fetchData } = useFetchData();
  const { data } = useStore();

  const titlesById = calculateTitlesById(data);
  const bannerStyle = estyle(changeColor);
  const change = estyle2(changeColor);

  return (
    <div id="banner-wrapper" style={{ ...bannerStyle, backgroundImage: `url(${abc})` }}>
      <div className="container">

        <div id="banner" className="flexTitles"  style={{ ...change, backgroundImage: `url(${wall})`, height: "50vh" ,
       
      }}  >
         <div><h2 className="titleDisplay" style={{color:"black"}}>{titlesById?.[2]}</h2></div> 
        <div> <span style={{color:"black"}}>{titlesById?.[3]}</span></div> 
          <div >  < Carrousel /> </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
