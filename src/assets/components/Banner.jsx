import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import useStore, { calculateTitlesById } from "../../utils/store";
import useFetchData from "../../utils/hookEfect";
import { estyle, estyle2 } from "../../utils/styles";
const Banner = () => {
  const { changeColor } = useContext(AppContext);
  const { fetchData } = useFetchData();
  const { data } = useStore();

  const titlesById = calculateTitlesById(data);
  const bannerStyle = estyle(changeColor);
  const change = estyle2(changeColor);

  return (
    <div id="banner-wrapper" style={bannerStyle}>
      <div className="container">
        <div id="banner" style={change}>
          <h2>{titlesById?.[2]}</h2>
          <span>{titlesById?.[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
