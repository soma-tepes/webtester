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
import "../Styles/EtiquetasPrint.css";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import EtiquetaSvg from "./EtiquetaSvg";
import MenuEtiquetas from "./MenuEtiquetas";
import Logo from "./Logo/Logo";

const ComponentToPrint = React.forwardRef(({ imageSrc, className, changeText }, ref) => (

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
      <MenuEtiquetas setturnoData1={setturnoData1} />
      {/*  <Logo/> */}
      <>

        {turnoData1.botond ?
          (
           
            <>
              <div className="containerTicket2">
            <div>
            <article>
                  <span>Add Text </span>
                  <form onSubmit={handleChange} >
                    <input className="inputPrinter" maxlength="9" type="text" value={changeText} onChange={handleChange}  placeholder="Max 8 Character"/>
                  </form>
                  <button onClick={handlePrint[17]}>Imprimir</button>
                </article>
            </div>
              

                <div className="containerTicketSubTemplate" onClick={handlePrint[17]}>
                  <div  className="contanerText">
                    <div className={`areaImprimir3  ${changeText.length >= 7 ? "len7": "lent6"}`}
                     ref={componentRefs[17]}>
                     {changeText}
                      </div>

                    {waterMark}
                  </div>

                </div>

              </div>
            </>

          )
          : <div className="containerTicket">


            <div className="containerTicketSub">
              <div className="contanerText" onClick={handlePrint[17]}>
                <ComponentToPrint ref={componentRefs[17]} imageSrc={template} className="ticket" />
                {waterMark}
                {/*  <h3 className="textTemplate">Text</h3> */}
              </div>

              <div className="contanerText" onClick={handlePrint[0]}>
                <ComponentToPrint ref={componentRefs[0]} imageSrc={pcn} name="tik" className="ticket" />
                {waterMark}
                {/*  <button onClick={handlePrint1}>Imprimir</button> */}
              </div>

              <div className="contanerText" onClick={handlePrint[12]}>
                <ComponentToPrint ref={componentRefs[12]} imageSrc={peso} className="ticket" />
                {waterMark}
                {/*  <button onClick={handlePrint13}>Imprimir</button> */}
              </div>

              <div className="contanerText" onClick={handlePrint[16]}>
                <ComponentToPrint ref={componentRefs[16]} imageSrc={prime} className="ticket" />
                {waterMark}
                {/*  <button onClick={handlePrint1}>Imprimir</button> */}
              </div>

              <div className="contanerText" onClick={handlePrint[1]}>
                <ComponentToPrint ref={componentRefs[1]} imageSrc={a} className="ticket2" />
                {waterMark}
                {/*    <button onClick={handlePrint2}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[2]}>
                <ComponentToPrint ref={componentRefs[2]} imageSrc={b} className="ticket2" />
                {waterMark}
                {/*    <button onClick={handlePrint3}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[3]}>
                <ComponentToPrint ref={componentRefs[3]} imageSrc={c} className="ticket2" />
                {waterMark}
                {/*  <button onClick={handlePrint4}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[4]}>
                <ComponentToPrint ref={componentRefs[4]} imageSrc={d} className="ticket2" />
                {waterMark}
                {/*    <button onClick={handlePrint5}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[5]}>
                <ComponentToPrint ref={componentRefs[5]} imageSrc={e} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint6}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[6]}>
                <ComponentToPrint ref={componentRefs[6]} imageSrc={s2d} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint7}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[7]}>
                <ComponentToPrint ref={componentRefs[7]} imageSrc={s1} className="ticket2" />
                {waterMark}
                {/*  <button onClick={handlePrint8}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[8]}>
                <ComponentToPrint ref={componentRefs[8]} imageSrc={s2} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint9}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[9]}>
                <ComponentToPrint ref={componentRefs[9]} imageSrc={s3} className="ticket2" />
                {waterMark}
                {/*    <button onClick={handlePrint10}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[10]}>
                <ComponentToPrint ref={componentRefs[10]} imageSrc={s1d} className="ticket2" />
                {waterMark}
                {/*    <button onClick={handlePrint11}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[11]}>
                <ComponentToPrint ref={componentRefs[11]} imageSrc={s3d} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[13]}>
                <ComponentToPrint ref={componentRefs[13]} imageSrc={ind1} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[14]}>
                <ComponentToPrint ref={componentRefs[14]} imageSrc={ind2} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>
              <div className="contanerText" onClick={handlePrint[15]}>
                <ComponentToPrint ref={componentRefs[15]} imageSrc={ind3} className="ticket2" />
                {waterMark}
                {/*   <button onClick={handlePrint12}>Imprimir</button> */}
              </div>


            </div>



          </div>}
      </>

    </>

  );
};


export default EtiquetasPrint;
