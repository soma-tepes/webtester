import React, { useEffect, useState } from 'react'
import "../../../../Styles/LabelRastreComponents.css"
import QRCode from 'react-qr-code';

const LabelRastreComponentes = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative , rastreSaveComponents}) => {
  
  
  const [QRCodes, setQRCode] = useState([])
  

  useEffect(() => {
    if (Object.keys(rastreSaveComponents ?? {} )) {
      setQRCode([rastreSaveComponents?.[35],rastreSaveComponents?.[36]]
        .join(",").replace(/,/g, '')
        );
    }
  }, [rastreSaveComponents]);
  
  
    return (
   <>

<div onClick={handlePrint[18]}   ref={componentRefs[18]}> {
     <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        
     

        <text className='lcOne' x="5%" y="12%" > Article Label</text>

    
        
        <text className='icTwo' x="5%" y="20%" >Desc. </text>
        <text className='icTwo' x="25%" y="20%" >{rastreSaveComponents?.[1]} </text>
        
        <text className='icTwo' x="5%" y="31%" >Item No.</text>
        <text className='icTwo' x="25%" y="31%" >{rastreSaveComponents?.[0]}</text>


        <text className='icTwo' x="5%" y="38%" >Dwg No.</text>
        <text className='icTwo' x="25%" y="38%" >{rastreSaveComponents?.[4]}</text>


        <text className='icTwo' x="5%" y="45%" >Qty.</text>
        <text className='icTwo' x="29%" y="45%" >{rastreSaveComponents?.[8]}</text>
       
        <text className='icTwo' x="5%" y="52%" >Lot No.</text>
        <text className='icTwoo' x="29%" y="52%" >{rastreSaveComponents?.[16]}</text>
      
        <text className='icTwo' x="5%" y="59%" >W/O No.</text>
        <text className='icTwo' x="29%" y="59%" >{rastreSaveComponents?.[15]}</text>
     
       
     
        <text className='icTr' x="4%" y="95%" >JAE Oregon,Inc</text>
       
        <text className='icTr' x="34%" y="95%" >Made In </text>
        <text className='icTr' x="47%" y="95%" >{rastreSaveComponents?.[49]} </text>
   
        <text className='icTr' x="67%" y="95%" >{rastreSaveComponents?.[48]}</text>
        <QRCode x={"72%"} y={"40%"} size={12} value={QRCodes} /> 
      

      
      </g>
    </svg>
} </div>
  </>
  )
}

export default LabelRastreComponentes