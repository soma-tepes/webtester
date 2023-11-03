import React from 'react'
import "../../../../Styles/LabelBasicEditable.css"

const LabelBasicEditable = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative }) => {

 

  return (
    <>
   
    <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        <text className='ex' x={`2%`} y="15%">Linea:</text>
        <text className='exa' x={`23%`} y="15%">{datasForm?.line?.toUpperCase()}</text>
        <line x1="23" y1="10" x2="44" y2="10" stroke="black" stroke-width="0.5" />

        <text className='ex' x={`45%`} y="15%">Fecha:</text>
        <text className='exa' x={`70%`} y="15%">{datasForm.date}</text>
        <line x1="70" y1="10" x2="98" y2="10" stroke="black" stroke-width="0.5" />


        <text className='ex2' x="2%" y="40%" >Modelo:</text>
        <text className='exa' x={`${dataLabel}`} y="39%"  style={{fontSize: `${datasForm.fontSizeModel}`}}>{datasForm?.model?.toUpperCase()}</text>
        <line x1="32%" y1="40%" x2="98" y2="40%" stroke="black"  stroke-width="0.5"/>

        <text className='ex2' x="2%" y="58%">Orden:</text>
        <text className='ex' x={`44%`} y="57%">{datasForm.wo}</text>
        <line x1="32%" y1="58%" x2="98" y2="58%" stroke="black"  stroke-width="0.5"/>

        <text className='ex2' x="2%" y="76%">Qty:</text>
        <text className='ex' x={`57%`} y="75%">{datasForm?.qty ?datasForm?.qty : comparative?.__EMPTY_7}</text>
        <line x1="32%" y1="76%" x2="98" y2="76%" stroke="black" stroke-width="0.5" />

        <text className='ex2' x="2%" y="94%">Box #:</text>
        <text className='ex' x={`57%`} y="93%">{datasForm.nbox}</text>
        <line x1="32%" y1="94%" x2="98" y2="94%" stroke="black" stroke-width="0.5" />

      </g>
    </svg>
    </div>
    
   </>
  );

}

export default LabelBasicEditable