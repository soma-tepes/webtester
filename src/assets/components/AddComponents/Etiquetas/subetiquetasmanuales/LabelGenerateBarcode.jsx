import React from 'react'
import { useState } from 'react'
import Barcode from 'react-barcode'

const LabelGenerateBarcode = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative }) => {

 const deluxe = datasForm?.barcodeB ? <Barcode  fontSize={0}  width={0.35}  height={7}   value={datasForm?.barcodeB}/> : ""


 
  return (
    <>
   
    <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
      <g transform="translate(25, 45)">{deluxe}</g>

      </g>
    </svg>
    </div>
    
   </>
  )
}

export default LabelGenerateBarcode