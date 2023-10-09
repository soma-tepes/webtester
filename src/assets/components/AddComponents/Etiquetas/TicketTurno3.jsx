import React from 'react'
import s3 from "../../../css/images/ticketsegunda/segunda3.svg"
import s3d from "../../../css/images/ticketsegunda/segundaD3.svg"
import ind3 from "../../../css/images/ticketsegunda/idv3.svg"

const TicketTurno3 = ({handlePrint,componentRefs,waterMark,ComponentToPrint}) => {
  return (
  <>
   <div className="containerTicket">
              <div className="containerTicketSub">
                <div className="contanerText" onClick={handlePrint[15]}>
                  <ComponentToPrint ref={componentRefs[15]} imageSrc={ind3} className="ticket2" />
                  {waterMark}
                  {/*   <button onClick={handlePrint12}>Imprimir</button> */}
                </div>
                <div className="contanerText" onClick={handlePrint[9]}>
                  <ComponentToPrint ref={componentRefs[9]} imageSrc={s3} className="ticket2" />
                  {waterMark}
                  {/*    <button onClick={handlePrint10}>Imprimir</button> */}
                </div>
              
                <div className="contanerText" onClick={handlePrint[11]}>
                  <ComponentToPrint ref={componentRefs[11]} imageSrc={s3d} className="ticket2" />
                  {waterMark}
                  {/*   <button onClick={handlePrint12}>Imprimir</button> */}
                </div>
              </div>
            </div>
  </>
  )
}

export default TicketTurno3