
import React from 'react';

const EtiquetaSvg = ({changeText}) => {
  const printSVG = () => {
    const svg = document.getElementById('svg5'); // Obtener el elemento SVG por su ID
    const svgString = new XMLSerializer().serializeToString(svg); // Convertir el SVG a una cadena de texto
    const blob = new Blob([svgString], { type: 'image/svg+xml' }); // Crear un Blob con la cadena de texto del SVG
    const url = URL.createObjectURL(blob); // Crear una URL para el Blob
    const iframe = document.createElement('iframe'); // Crear un iframe para cargar el SVG
    iframe.style.display = 'none'; // Ocultar el iframe
    iframe.src = url; // Establecer la URL del iframe
    document.body.appendChild(iframe); // Agregar el iframe al DOM
    iframe.contentWindow.print(); // Imprimir el contenido del iframe
    setTimeout(() => {
      document.body.removeChild(iframe); // Eliminar el iframe después de imprimir
      URL.revokeObjectURL(url); // Liberar la URL
    }, 1000);
  };

  return (
    <div>
     
      <button onClick={printSVG}>Imprimir SVG</button>
      <svg
        width="101.5mm"
        height="63.5mm"
        viewBox="0 0 101.5 63.5"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <rect x="8.5326852" y="35.078817" width="193.66284" height="74.314662" id="rect227" />
        </defs>
        <g>
          <text
            xmlSpace="preserve"
            transform="matrix(0.51123039,0,0,1.16474,-1.7596156,-40.710432)"
            id="text225"
            style={{
              fontStyle: 'normal',
              fontVariant: 'normal',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontSize: '23.9219px',
              lineHeight: '1.25',
              fontFamily: 'sans-serif',
              fill: '#000000',
              fillOpacity: '1',
              stroke: 'none'
            }}
            x="126.43555"
            y="0"
          >
            <tspan x="40.122182" y="69.660612">{changeText&&changeText}</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default EtiquetaSvg;