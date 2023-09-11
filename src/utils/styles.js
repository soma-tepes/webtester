import image from "../assets/css/images/banner.jpg";
import image2 from "../assets/css/images/dark.png"
import image3 from "../assets/css/images/cal.webp"

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
    ? `url(${image2})`
    : `url(${image3})`,
})

const colorLetter = (changeColor)=>({
  color : changeColor
  ? "white"
  :
    "black"
})

export { estyle, estyle2,backImage,colorLetter };
