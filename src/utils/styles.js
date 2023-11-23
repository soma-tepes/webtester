import image from "../assets/css/images/banner.jpg";
import image2 from "../assets/css/images/dark.png"
import image3 from "../assets/css/images/cal.webp"
import nuev from "../assets/css/images/cap.png"

const estyle = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-linear-gradient(bottom, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, #c8d2bc, #c8d2bc",
});

const estyle2 = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-linear-gradient(bottom, black, rgb(241, 237, 237))"
    : `url(${image})`,
});

const backImage = (changeColor) => ({
  backgroundImage: changeColor
    ?"-webkit-radial-gradient(gray, black)" 
    : "-webkit-radial-gradient(gray, white)" ,
})

const colorLetter = (changeColor)=>({
  color : changeColor
  ? "white"
  : "black"
})

const backgroundChange = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-radial-gradient( white, black)"
    : "-webkit-linear-gradient( var(--color-jae), white)"
});

export { estyle, estyle2,backImage,colorLetter,backgroundChange };
