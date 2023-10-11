import React from "react";
import "../Styles/EtiquetasPrint.css";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import MenuEtiquetas from "./MenuEtiquetas";
import FormTicketManual from "./AddComponents/Etiquetas/FormTicketManual";
import TiketTurno1 from "./AddComponents/Etiquetas/TiketTurno1";
import TicketTurno3 from "./AddComponents/Etiquetas/TicketTurno3";
import TicketTurno2 from "./AddComponents/Etiquetas/TicketTurno2";
const ComponentToPrint = React.forwardRef(({ imageSrc, className }, ref) => (

  <div ref={ref}>
    {
      className == "ticket" &&
      <div className="areaImprimir ">

        <img className={className} src={imageSrc} alt="" />

      </div>
    }
    {className == "ticket2" &&
      <div className="areaImprimir2 ">

        <img className={className} src={imageSrc} alt="" />
      </div>
    }


  </div>
));
const EtiquetasPrint = () => {


  const [changeText, setChangeText] = useState("")
  const arrayImag = 18
  const [turnoData1, setturnoData1] = useState(
    {
      boton: false,//turno 1
      botonb: false,// turno  2
      botonc: false,//turno 3
      botond: false //create template

    }
  )
  const componentRefs = Array.from({ length: arrayImag }, () => React.useRef());
  const handlePrint = componentRefs.map((ref) => useReactToPrint({ content: () => ref.current }));
  const waterMark = <h3 className="textTemplate">{"JAE"}</h3>


  const handleChange = (e) => {
    e.preventDefault()
    setChangeText(e.target.value)

  }
  return (


    <>
      <MenuEtiquetas setturnoData1={setturnoData1} turnoData1={turnoData1} />

      <>

        {turnoData1.botond ?
          <>
            <FormTicketManual handleChange={handleChange} waterMark={waterMark} componentRefs={componentRefs}
              changeText={changeText} handlePrint={handlePrint} />
          </>
               : turnoData1.botonc ?

            <TicketTurno3 handlePrint={handlePrint} ComponentToPrint={ComponentToPrint}
              componentRefs={componentRefs} waterMark={waterMark} />

                : turnoData1.botonb ?

             <TicketTurno2  handlePrint={handlePrint} ComponentToPrint={ComponentToPrint}
              componentRefs={componentRefs} waterMark={waterMark} />
              :
               
              <TiketTurno1
                handlePrint={handlePrint} ComponentToPrint={ComponentToPrint}
                componentRefs={componentRefs} waterMark={waterMark}
              />

        }
      </>

    </>

  );
};


export default EtiquetasPrint;
