// styles.js
export const estyle = (changeColor) => ({
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, #008ead, #007b9d)",
  });
  
  export const contenedor = (changeColor) => ({
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, #008dab, #007294)",
  });
  
  export const styleNav = (changeColor) => ({
    backgroundImage: changeColor
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, #007b99, #007897)",
  });
  
  export const styleBlack = (hovered) => ({
    backgroundImage: hovered
      ? "-webkit-linear-gradient(top, black, rgb(241, 237, 237))"
      : "-webkit-linear-gradient(top, black, rgb(241, 237, 237))",
    transition: "background-image 0.3s ease",
  });
  
  export const styleNav2 = (hovered) => ({
    backgroundImage: hovered
      ? "-webkit-linear-gradient(top, #0782a0, #077d9b)"
      : "-webkit-linear-gradient(top, #007b99, #007897)",
    transition: "background-image 0.3s ease",
  });
  