import React from 'react'

import "../../../../Styles/LabelGood.css"
import { useState } from 'react'
const LabelGood = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative ,arraySave}) => {
 
  const [datasConfirm, setDatasConfirm] = useState(null)

  return (
    <>
   
    <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        
        <text className='title1' x={`38%`} y="5%">{datasForm.prodTitle1}</text>

        <text className='title2' x="2%" y="12%" >MAT'L Desc.</text>

        <text className='titleg2' x= "25%" y="12%" >{comparative?.__EMPTY_3}</text>
        
        <text className='title2' x="2%" y="17%" >MAT'L #</text>
        <text className='titleg1' x="20%" y="17%" >{arraySave?.[0]}</text>
        
        <text className='title2' x="2%" y="25%" >Date Code No. 1</text>

        <text className='title2' x="2%" y="32%" >Date Code No. 2</text>

        <text className='title2' x="2%" y="40%" >Qty.</text>
        <text className='titleg2' x= "12%" y="40%" >{comparative?.__EMPTY_7}</text>
        <text className='title2' x="2%" y="48%" >Order No.</text>
        <text className='titleg2' x= "15%" y="48%" >{datasForm?.wo}</text>
        <text className='title2' x="2%" y="56%" >DAY/MO/YY.</text>
        <text className='title3' x="2%" y="60%" >Drawing No.</text>


        <text className='title3' x="50%" y="70%" >{arraySave?.[17]}</text>

        <text className='title5Barcode' x="50%" y="75%" >{arraySave?.[17]}</text>

        <text className='title2' x="50%" y="80%" >{arraySave?.[17]}</text>
        <text className='title3' x="50%" y="85%" >R-Pb NoCr NoCd No4p</text>

        <text className='title3' x="40%" y="95%" >MFG.LOC.JOR</text>
        <text className='title3' x="60%" y="95%" >PKG . BY </text>

        <text className='title3' x="80%" y="95%" >DFC.9007D-OR</text>

        <line x1="1.4" y1="0" x2="1.4" y2="110" stroke="black" stroke-width="1" />

      
      </g>
    </svg>
    </div>
    
   </>
  )
}

export default LabelGood