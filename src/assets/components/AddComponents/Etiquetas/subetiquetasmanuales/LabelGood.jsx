import React, { useEffect } from 'react'

import "../../../../Styles/LabelGood.css"
import QRCode from 'react-qr-code';

import { useState } from 'react'
import Barcode from 'react-barcode';

const LabelGood = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative ,arraySave}) => {
 
const [dataQr, setSavedArray] = useState([])  

useEffect(() => {
  if (Object.keys(arraySave ?? {})) {
    setSavedArray([arraySave?.[39],arraySave?.[40],arraySave?.[41],
      arraySave?.[42],arraySave?.[43],arraySave?.[44]]
      .join(",").replace(/,/g, '')
      );
  }
}, [arraySave]);
/* 
useEffect(() => {
  if (Object.keys(arraySave ?? {}).length - 1 === 28) {
    setSavedArray([arraySave?.[20],arraySave?.[21],arraySave?.[22],
      arraySave?.[23],arraySave?.[24]]
      .join(",").replace(/,/g, '')
      );
  }
}, [arraySave]); */


  return (
    <>
   
    <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
    {
     Object.keys(arraySave ?? {}) &&
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        
        <text className='title1' x={`38%`} y="5%">{datasForm?.prodTitle1}</text>

        <text className='title2' x="2%" y="12%" >MAT'L Desc.</text>

        <text className='titleg2' x= "25%" y="12%" >{arraySave?.[1]}</text>
        
        <text className='title2' x="2%" y="17%" >MAT'L #</text>
        <text className='titleg1' x="20%" y="17%" >{arraySave?.[0]}</text>
        
        <text className='title2' x="2%" y="25%" >Date Code No. 1</text>
        <text className='title2' x="30%" y="25%" >{arraySave?.[21]}</text>
        <text className='title2' x="2%" y="32%" >Date Code No. 2</text>

        <text className='title2' x="2%" y="40%" >Qty.</text>
        <text className='titleg2' x= "12%" y="40%" >{arraySave?.[7]}</text>
        <text className='title2' x="2%" y="48%" >Order No.</text>
        <text className='title2' x="20%" y="48%" >{arraySave?.[15]}</text>
        <text className='titleg2' x= "15%" y="48%" >{datasForm?.wo}</text>
        <text className='title2' x="2%" y="56%" >DAY/MO/YY.</text>
        <text className='title2' x="24%" y="56%" >{arraySave?.[19]}</text>

        <text className='title3' x="2%" y="60%" >Drawing No.</text>
        <text className='title3' x="20%" y="60%" >{arraySave?.[4]}</text>
        <QRCode x={"4%"} y={"65%"} size={20} value={dataQr} /> 
        <text className='title3' x="53%" y="40%" >Box No.</text>
        <text className='title2' x="64%" y="40%" >{arraySave?.[16]}</text>

       
        <g transform="translate(40, 28)"><Barcode  fontSize={0}  width={0.25}  height={9}   value={arraySave?.[16]}/></g>
        <text className='title2' x="59%" y="80%" >{arraySave?.[16]}</text>
     {/*    <text className='title3' x="50%" y="85%" >{arraySave?.[26]}</text>
        <text className='title3' x="80%" y="85%" >{arraySave?.[27]}</text> */}
        <text className='title3' x="40%" y="95%" >MFG.LOC.JOR</text>
        <text className='title3' x="57%" y="95%" >PKG . BY </text>
        <text className='title3' x="68%" y="95%" >{arraySave?.[6]} </text>
        <text className='title3' x="80%" y="95%" >DFC.9007D-OR</text>

        <line x1="1.4" y1="0" x2="1.4" y2="110" stroke="black" stroke-width="1" />

      
      </g>
    </svg>
}
{
   Object.keys(arraySave ?? {}).length -1  === 27 &&
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        
        <text className='title1' x={`38%`} y="5%">{datasForm?.prodTitle1}</text>

        <text className='title2' x="2%" y="12%" >MAT'L Desc.</text>

        <text className='titleg2' x= "25%" y="12%" >{arraySave?.[1]}</text>
        
        <text className='title2' x="2%" y="17%" >MAT'L #</text>
        <text className='titleg1' x="20%" y="17%" >{arraySave?.[0]}</text>
        
        <text className='title2' x="2%" y="25%" >Date Code No. 1</text>
        <text className='title2' x="30%" y="25%" >{arraySave?.[15]}</text>
        <text className='title2' x="2%" y="32%" >Date Code No. 2</text>

        <text className='title2' x="2%" y="40%" >Qty.</text>
        <text className='titleg2' x= "12%" y="40%" >{arraySave?.[5]}</text>
        <text className='title2' x="2%" y="48%" >Order No.</text>
        <text className='title2' x="20%" y="48%" >{arraySave?.[11]}</text>
        <text className='titleg2' x= "15%" y="48%" >{datasForm?.wo}</text>
        <text className='title2' x="2%" y="56%" >DAY/MO/YY.</text>
        <text className='title2' x="24%" y="56%" >{arraySave?.[14]}</text>

        <text className='title3' x="2%" y="60%" >Drawing No.</text>
        
        <text className='title3' x="2%" y="75%" >   </text>

        <QRCode x={"4%"} y={"65%"} size={20} value={dataQr} /> 

        <text className='title3' x="20%" y="60%" >{arraySave?.[0].startsWith("CBM") ? arraySave?.[2] : arraySave?.[1]}</text>

        <text className='title2 zinde' x="53%" y="44%" >Box No.</text>
        <text className='title2' x="63%" y="44%" >{arraySave?.[10]}</text>

        <g transform="translate(40, 28)"><Barcode  fontSize={0}  width={0.24}  height={7}   value={arraySave?.[10]}/></g>
        <text className='title2' x="55%" y="80%" >{arraySave?.[10]}</text>
        <text className='title3' x="50%" y="85%" >{arraySave?.[25]}</text>
        <text className='title3' x="80%" y="85%" >{arraySave?.[26]}</text>
        <text className='title3' x="40%" y="95%" >MFG.LOC.JOR</text>
        <text className='title3' x="57%" y="95%" >PKG . BY </text>
        <text className='title3' x="68%" y="95%" >{arraySave?.[4]} </text>
        <text className='title3' x="80%" y="95%" >DFC.9007D-OR</text>

        <line x1="1.4" y1="0" x2="1.4" y2="110" stroke="black" stroke-width="1" />

      
      </g>
    </svg>
}
    </div>
    
   </>
  )
}

export default LabelGood