import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import useStore, { calculateTitlesById } from "../../utils/store";
import useFetchData from "../../utils/hookEfect";
import { estyle, estyle2, backImage, colorLetter } from "../../utils/styles";
import Carrousel from "./EfectAditional/Carrousel";
import abc from "../css/images/abc.webp"

import '../Styles/Banner.css'

const Banner = () => {
  const { changeColor } = useContext(AppContext);
  const { fetchData } = useFetchData();
  const { data } = useStore();

  const titlesById = calculateTitlesById(data);

  return (
    <div id="banner-wrapper" style={{ ...estyle(changeColor), backgroundImage: `url(${abc})` }}>
      <div className="container">

        <div id="banner" className="flexTitles"
          style={{
            ...colorLetter(changeColor),
            ...estyle2(changeColor),
            ...backImage(changeColor), height: "20rem",
          }}  >
          <div className="container_titles">
            <div><h2 className="titleDisplay" style={{ ...colorLetter(changeColor) }}>{titlesById?.[2]}</h2></div>
            <div> <span style={{ ...colorLetter(changeColor) }}>{titlesById?.[3]}</span></div>
            <div >  < Carrousel /> </div>

          </div>

        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
