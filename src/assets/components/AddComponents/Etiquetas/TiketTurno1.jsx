import React from 'react';
import prime from "../../../css/images/ticketsegunda/prime.svg";
import template from "../../../css/images/ticketsegunda/template.svg";
import a from "../../../css/images/ticketsegunda/681.svg";
import b from "../../../css/images/ticketsegunda/682.svg";
import c from "../../../css/images/ticketsegunda/683.svg";
import d from "../../../css/images/ticketsegunda/684.svg";
import e from "../../../css/images/ticketsegunda/685.svg";
import s1 from "../../../css/images/ticketsegunda/segunda1.svg";
import pcn from "../../../css/images/ticketsegunda/pcn.svg";
import peso from "../../../css/images/ticketsegunda/peso.svg";
import ind1 from "../../../css/images/ticketsegunda/idv1.svg";
import s1d from "../../../css/images/ticketsegunda/segundaD1.svg";
import standarTicker from "../../../css/images/ticketsegunda/basicstandar.svg";
import ex from "../../../css/images/ticketsegunda/ex.svg";


const TiketTurno1 = ({ handlePrint, componentRefs, waterMark, ComponentToPrint }) => {
  const images = [

    { src: template, className: "ticket" },
    { src: prime, className: "ticket" },
    { src: a, className: "ticket2" },
    { src: b, className: "ticket2" },
    { src: c, className: "ticket2" },
    { src: d, className: "ticket2" },
    { src: e, className: "ticket2" },
    { src: s1, className: "ticket2" },
    { src: pcn, className: "ticket" },
    { src: peso, className: "ticket" },
    { src: ind1, className: "ticket2" },
    { src: s1d, className: "ticket2" },
    { src: standarTicker, className: "ticket" },
    { src: ex, className: "ticket" }
  ];

  const handleImageClick = (index) => {
    handlePrint[index]();
  };

  return (
    <>
      <div className="containerTicket">
        <div className="containerTicketSub">
          {images.map((image, index) => (
            <div
              className={`contanerText ${image.className}`}
              onClick={() => handleImageClick(index)}
            >
              <ComponentToPrint ref={componentRefs[index]} imageSrc={image.src} className={`${image.className}`} />
              {waterMark}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TiketTurno1;