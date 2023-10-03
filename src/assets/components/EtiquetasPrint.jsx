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
import ind1 from "../css/images/ticketsegunda/idv1.svg"
import ind2 from "../css/images/ticketsegunda/idv2.svg"
import ind3 from "../css/images/ticketsegunda/idv3.svg"
import prime from "../css/images/ticketsegunda/prime.svg"
import template from "../css/images/ticketsegunda/template.svg"

import standar from "../css/images/aaticket.svg"
import "../Styles/EtiquetasPrint.css";
import segunda from "../css/images/seg.svg"
import { useReactToPrint } from "react-to-print";
import { useState } from "react";




const ComponentToPrint = React.forwardRef(({ imageSrc, className, name }, ref) => (

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

  const [turnoData1, setturnoData1] = useState(true)
  const componentRefs = Array.from({ length: 18 }, () => React.useRef());
  const [
    componentRef1, componentRef2, componentRef3, componentRef4,
    componentRef5, componentRef6, componentRef7, componentRef8,
    componentRef9, componentRef10, componentRef11, componentRef12,
    componentRef13, componentRef14, componentRef15, componentRef16,
    componentRef17, componentRef18
  ] = componentRefs;


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

  const handlePrint14 = useReactToPrint({
    content: () => componentRef14.current
  });
  const handlePrint15 = useReactToPrint({
    content: () => componentRef15.current
  });
  const handlePrint16 = useReactToPrint({
    content: () => componentRef16.current
  });
  const handlePrint17 = useReactToPrint({
    content: () => componentRef17.current
  });
  const handlePrint18 = useReactToPrint({
    content: () => componentRef18.current
  });




  return (


    <>
      <div className="titleTiket">
        <div>Ticket </div>
        <button onClick={() => turnoData1 ? setturnoData1(false) : setturnoData1(true)}>Turno1</button>
        <button>Turno2</button>
        <button>Turno3</button>
      </div>
      <div className="containerTicket">
        <div className="containerTicketSub">
          <div className="contanerText" onClick={handlePrint18}>

            <ComponentToPrint ref={componentRef18} imageSrc={template} className="ticket" />
            <h1 className="textTemplate">Text</h1>


            {/*  <button onClick={handlePrint1}>Imprimir</button> */}
          </div>

          <div onClick={handlePrint1}>
            <ComponentToPrint ref={componentRef1} imageSrc={pcn} name="tik" className="ticket" />
            {/*  <button onClick={handlePrint1}>Imprimir</button> */}
          </div>

          <div onClick={handlePrint13}>
            <ComponentToPrint ref={componentRef13} imageSrc={peso} className="ticket" />
            {/*  <button onClick={handlePrint13}>Imprimir</button> */}
          </div>

          <div onClick={handlePrint17}>
            <ComponentToPrint ref={componentRef17} imageSrc={prime} className="ticket" />
            {/*  <button onClick={handlePrint1}>Imprimir</button> */}
          </div>
          {turnoData1 &&
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
              <div onClick={handlePrint14}>
                <ComponentToPrint ref={componentRef14} imageSrc={ind1} className="ticket2" />
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
              <div onClick={handlePrint15}>
                <ComponentToPrint ref={componentRef15} imageSrc={ind2} className="ticket2" />
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
              <div onClick={handlePrint16}>
                <ComponentToPrint ref={componentRef16} imageSrc={ind3} className="ticket2" />
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
            </>
          }
        </div>


      </div>
    </>

  );
};


export default EtiquetasPrint;
