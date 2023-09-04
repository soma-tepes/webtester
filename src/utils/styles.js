import image from "../assets/css/images/banner.jpg";

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

export { estyle, estyle2 };
