import React from 'react'
import svg from "../css/images/standar.svg"
import "../Styles/EtiquetasPrint.css"
import jsPDF from 'jspdf';

const EtiquetasPrint = () => {

  const handlePrint = () => {
    const pdf = new jsPDF();
    pdf.addImage(svg, 'PNG', 10, 10, 90, 90); // Ajusta las coordenadas y dimensiones según tu necesidad
    pdf.save("etiqueta.pdf");
  };

  return (
    <div>
      EtiquetasPrint
      <div>
        <img className='ticket' src={svg} alt="" />
      </div>
      <button onClick={handlePrint}>Imprimir</button>
    </div>
  );
};

export default EtiquetasPrint;
