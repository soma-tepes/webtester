import React from 'react'
import "../../../../Styles/LabelRastre.css"

const LabelRastre = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative }) => {
  return (
    <>
    <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
    <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
   <g>
     <text className='goodTitle' x={`10%`} y="12%">Goods Received Label</text>
  
     <text className='goodTitle2' x={`10%`} y="21%">Description</text>
     <text className='goodTitle3' x={`10%`} y="30%">Item No.</text>
     <text className='goodTitle3' x={`10%`} y="38%">Drawing No.</text>
     <text className='goodTitle3' x={`10%`} y="47%">Qty.</text>
     <text className='goodTitle3' x={`10%`} y="55%">Lot. No.</text>
     <text className='goodTitle3' x={`10%`} y="63%">P.O #</text>
     <text className='goodTitle3' x={`10%`} y="71%">Rec'd Date</text>
     <text className='goodTitle3' x={`10%`} y="79%">Vendor</text>
     <text className='goodTitle3' x={`10%`} y="87%">Manuf .Date</text>

     <text className='goodTitle3' x={`10%`} y="97%">Made in</text>

     <text className='goodTitle4' x={`60%`} y="97%">R-Pb NoCr NoCd No4P</text>
   </g>
 </svg>
 </div>
 
</>
  )
}

export default LabelRastre