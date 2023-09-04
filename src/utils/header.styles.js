const estyle = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, #008ead, #007b9d)",
});

const contenedor = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, #008dab, #007294)",
});

const styleNav = (changeColor) => ({
  backgroundImage: changeColor
    ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, #007b99, #007897)",
});

const styleBlack = (changeColor) => ({
  backgroundImage: hovered
    ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
    : "-webkit-linear-gradient(top, black, rgb(241, 237, 237))",
  transition: "background-image 0.3s ease",
});
const styleNav2 = (changeColor) => ({
  backgroundImage: hovered
    ? "-webkit-linear-gradient(top, #0782a0, #077d9b)"
    : "-webkit-linear-gradient(top, #007b99, #007897)",
  transition: "background-image 0.3s ease",
});

export { estyle, contenedor, styleNav, styleBlack, styleNav2 };
