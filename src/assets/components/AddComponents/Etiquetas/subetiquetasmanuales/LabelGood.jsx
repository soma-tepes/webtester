import React, { useEffect } from 'react'

import "../../../../Styles/LabelGood.css"
import QRCode from 'react-qr-code';

import { useState } from 'react'
import Barcode from 'react-barcode';

const LabelGood = ({ datosE, datasForm ,setSavedArray , dataQr }) => {
 



useEffect(() => {
 
    setSavedArray(
                  [datosE?.[39],datosE?.[40],datosE?.[41],
                  datosE?.[42],datosE?.[43],datosE?.[44]]
                  .join(",").replace(/,/g, '')
      );
  
}, [datosE]);



  return (
    <>
   
   
    
    {
    
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
      <g className='barcoceGood' transform="translate(41, 28)">
          <Barcode  fontSize={0}  width={0.25}  height={9}   value={datosE?.[16]}/>
          </g>
        <text className='title1' x={`38%`} y="5%">{datasForm?.prodTitle1}</text>

        <text className='title2' x="2%" y="12%" >MAT'L Desc.</text>

        <text className='titleg2' x= "25%" y="12%" >{datosE?.[1]}</text>
        
        <text className='title2' x="2%" y="17%" >MAT'L #</text>
        <text className='titleg1' x="20%" y="17%" >{datosE?.[0]}</text>
        
        <text className='title2' x="2%" y="25%" >Date Code No. 1</text>
        <text className='title2' x="30%" y="25%" >{datosE?.[21]}</text>
        <text className='title2' x="2%" y="32%" >Date Code No. 2</text>

        <text className='title2' x="2%" y="40%" >Qty.</text>
        <text className='titleg2' x= "12%" y="40%" >{datosE?.[7]}</text>
        <text className='title2' x="2%" y="48%" >Order No.</text>
        <text className='title2' x="20%" y="48%" >{datosE?.[15]}</text>
        <text className='titleg2' x= "15%" y="48%" >{datasForm?.wo}</text>
        <text className='title2' x="2%" y="56%" >DAY/MO/YY.</text>
        <text className='title2' x="24%" y="56%" >{datosE?.[20]}</text>

        <text className='title3' x="2%" y="60%" >Drawing No.</text>
        <text className='title3' x="20%" y="60%" >{datosE?.[4]}</text>
        <QRCode x={"4%"} y={"65%"} size={20} value={dataQr} /> 
        <text className='title3' x="53%" y="58%" >Box No.</text>
        <text className='title2' x="64%" y="58%" >{datosE?.[16]}</text>

       
      
        <text className='title2 ' x="59%" y="80%" >{datosE?.[16]}</text>
    
        <text className='title3' x="40%" y="95%" >MFG.LOC.JOR</text>
        <text className='title3' x="57%" y="95%" >PKG . BY </text>
        <text className='title3' x="68%" y="95%" >{datosE?.[6]} </text>
        <text className='title3' x="80%" y="95%" >DFC.9007D-OR</text>

        <line x1="1.4" y1="0" x2="1.4" y2="110" stroke="black" stroke-width="1" />

      
      </g>
    </svg>
}

   
    
   </>
  )
}

export default LabelGood