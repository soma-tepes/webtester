import React from "react";
import a from "../css/images/ticketsegunda/681.svg"
import b from "../css/images/ticketsegunda/682.svg"
import c from "../css/images/ticketsegunda/683.svg"
import d from "../css/images/ticketsegunda/684.svg"
import e from "../css/images/ticketsegunda/685.svg"
import s1 from "../css/images/ticketsegunda/segunda1.svg"
import s2 from "../css/images/ticketsegunda/segunda2.svg"
import s3 from "../css/images/ticketsegunda/segunda3.svg"
import s1d from "../css/images/ticketsegunda/segundaD1.svg"
import s2d from "../css/images/ticketsegunda/segundaD2.svg"
import s3d from "../css/images/ticketsegunda/segundaD3.svg"
import pcn from "../css/images/ticketsegunda/pcn.svg"
import peso from "../css/images/ticketsegunda/peso.svg"

import standar from "../css/images/aaticket.svg"
import "../Styles/EtiquetasPrint.css";
import segunda from "../css/images/seg.svg"
import { useReactToPrint } from "react-to-print";
import { useState } from "react";




const ComponentToPrint = React.forwardRef(({ imageSrc, className }, ref) => (
  <div ref={ref}>
    <div className="areaImprimir">
      <img className={className} src={imageSrc} alt="" />
    </div>
  </div>
));



const EtiquetasPrint = () => {

const [turnoData1, setturnoData1] = useState(true)

  const componentRef1 = React.useRef();
  const componentRef2 = React.useRef();
  const componentRef3 = React.useRef();
  const componentRef4 = React.useRef();
  const componentRef5 = React.useRef();
  const componentRef6 = React.useRef();

  const componentRef7 = React.useRef();
  const componentRef8 = React.useRef();
  const componentRef9 = React.useRef();
  const componentRef10 = React.useRef();
  const componentRef11 = React.useRef();
  const componentRef12 = React.useRef();
  const componentRef13 = React.useRef();

  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current
  });

  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current
  });
  const handlePrint3 = useReactToPrint({
    content: () => componentRef3.current
  });


  const handlePrint4 = useReactToPrint({
    content: () => componentRef4.current
  });
  const handlePrint5 = useReactToPrint({
    content: () => componentRef5.current
  });
  const handlePrint6 = useReactToPrint({
    content: () => componentRef6.current
  });
  const handlePrint7 = useReactToPrint({
    content: () => componentRef7.current
  });

  const handlePrint8 = useReactToPrint({
    content: () => componentRef8.current
  });

  const handlePrint9 = useReactToPrint({
    content: () => componentRef9.current
  });

  const handlePrint10 = useReactToPrint({
    content: () => componentRef10.current
  });

  const handlePrint11 = useReactToPrint({
    content: () => componentRef11.current
  });

  const handlePrint12 = useReactToPrint({
    content: () => componentRef12.current
  });

  const handlePrint13 = useReactToPrint({
    content: () => componentRef13.current
  });



  let arrayImages = [a, b, c, d, e]

  return (


    <>
      <div className="titleTiket">
        <div>Ticket </div>
        <button onClick={()=>turnoData1 ? setturnoData1(false):setturnoData1(true)}>Turno1</button>
        <button>Turno2</button>
        <button>Turno3</button>
      </div>
      <div className="containerTicket">


        <div onClick={handlePrint1}>
          <ComponentToPrint ref={componentRef1} imageSrc={pcn} className="ticket" />
          {/*  <button onClick={handlePrint1}>Imprimir</button> */}
        </div>

        <div onClick={handlePrint13}>
          <ComponentToPrint ref={componentRef13} imageSrc={peso} className="ticket" />
          {/*  <button onClick={handlePrint13}>Imprimir</button> */}
        </div>
    {   turnoData1&& 
      <> 
       <div onClick={handlePrint2}>
          <ComponentToPrint ref={componentRef2} imageSrc={a} className="ticket2" />
          {/*    <button onClick={handlePrint2}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint3}>
          <ComponentToPrint ref={componentRef3} imageSrc={b} className="ticket2" />
          {/*    <button onClick={handlePrint3}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint4}>
          <ComponentToPrint ref={componentRef4} imageSrc={c} className="ticket2" />
          {/*  <button onClick={handlePrint4}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint5}>
          <ComponentToPrint ref={componentRef5} imageSrc={d} className="ticket2" />
          {/*    <button onClick={handlePrint5}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint6}>
          <ComponentToPrint ref={componentRef6} imageSrc={e} className="ticket2" />
          {/*   <button onClick={handlePrint6}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint7}>
          <ComponentToPrint ref={componentRef7} imageSrc={s2d} className="ticket2" />
          {/*   <button onClick={handlePrint7}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint8}>
          <ComponentToPrint ref={componentRef8} imageSrc={s1} className="ticket2" />
          {/*  <button onClick={handlePrint8}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint9}>
          <ComponentToPrint ref={componentRef9} imageSrc={s2} className="ticket2" />
          {/*   <button onClick={handlePrint9}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint10}>
          <ComponentToPrint ref={componentRef10} imageSrc={s3} className="ticket2" />
          {/*    <button onClick={handlePrint10}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint11}>
          <ComponentToPrint ref={componentRef11} imageSrc={s1d} className="ticket2" />
          {/*    <button onClick={handlePrint11}>Imprimir</button> */}
        </div>
        <div onClick={handlePrint12}>
          <ComponentToPrint ref={componentRef12} imageSrc={s3d} className="ticket2" />
          {/*   <button onClick={handlePrint12}>Imprimir</button> */}
        </div>
      </>
    }
       
      </div>
    </>

  );
};


export default EtiquetasPrint;
