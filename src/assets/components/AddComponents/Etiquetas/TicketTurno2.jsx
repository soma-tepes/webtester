import React from 'react'
import s2 from "../../../css/images/ticketsegunda/segunda2.svg"

import s2d from "../../../css/images/ticketsegunda/segundaD2.svg"

import ind2 from "../../../css/images/ticketsegunda/idv2.svg"

const TicketTurno2 = ({handlePrint,componentRefs,waterMark,ComponentToPrint}) => {
  return (
   <>
   
   <div className="containerTicket">
                <div className="containerTicketSub">
                 
                  <div className="contanerText" onClick={handlePrint[6]}>
                    <ComponentToPrint ref={componentRefs[6]} imageSrc={s2d} className="ticket2" />
                    {waterMark}
                    {/*   <button onClick={handlePrint7}>Imprimir</button> */}
                  </div>
                  <div className="contanerText" onClick={handlePrint[8]}>
                    <ComponentToPrint ref={componentRefs[8]} imageSrc={s2} className="ticket2" />
                    {waterMark}
                    {/*   <button onClick={handlePrint9}>Imprimir</button> */}
                  </div>
                  <div className="contanerText" onClick={handlePrint[14]}>
                    <ComponentToPrint ref={componentRefs[14]} imageSrc={ind2} className="ticket2" />
                    {waterMark}
                    {/*   <button onClick={handlePrint12}>Imprimir</button> */}
                  </div>
                </div>
              </div>
   </>
  )
}

export default TicketTurno2