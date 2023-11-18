import React from 'react'
import "../../../../Styles/LabelBasicEditable.css"

const LabelBasicEditable = ({ dataLabel, datasForm, handlePrint, componentRefs, comparative }) => {

 

  return (
    <>
   
    <div className='LabelEditableSvg'  onClick={handlePrint[18]}   ref={componentRefs[18]}>
    
       <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
      <g>
        <text className='ex' x={`2%`} y="15%">Linea:</text>
        <text className='exa' x={`23%`} y="15%">{datasForm?.line?.toUpperCase()}</text>
        <line x1="19" y1="10" x2="44" y2="10" stroke="black" stroke-width="0.5" />

        <text className='ex' x={`45%`} y="15%">Fecha:</text>
        <text className='exa' x={`65%`} y="15%">{datasForm.date}</text>
        <line x1="65" y1="10" x2="98" y2="10" stroke="black" stroke-width="0.5" />


        <text className='ex2' x="2%" y="30%" >Modelo:</text>
        <text className='exa' x={`${dataLabel}`} y="29%"  style={{fontSize: `${datasForm.fontSizeModel}`}}>{datasForm?.model?.toUpperCase()}</text>
        <line x1="32%" y1="30%" x2="98" y2="30%" stroke="black"  stroke-width="0.3"/>

        <text className='ex2' x="2%" y="45%">Orden:</text>
        <text className='ex' x={`44%`} y="44%">{datasForm.wo}</text>
        <line x1="32%" y1="45%" x2="98" y2="45%" stroke="black"  stroke-width="0.3"/>

        <text className='ex2' x="2%" y="60%">Qty:</text>
        <text className='ex' x={`57%`} y="59%">{datasForm?.qty ?datasForm?.qty : comparative?.__EMPTY_7}</text>
        <line x1="32%" y1="60%" x2="98" y2="60%" stroke="black" stroke-width="0.3" />

        <text className='ex2' x="2%" y="75%">Box #:</text>
        <text className='ex' x={`57%`} y="74%">{datasForm?.nbox}</text>
        <line x1="32%" y1="75%" x2="98" y2="75%" stroke="black" stroke-width="0.3" />
      

        <text className='ex2' x="10%" y="90%">Turno:</text>
        <text className='ex2' x="35%" y="90%">{datasForm.turn}</text>
        <text className='ex2' x="60%" y="90%">Hora:</text>
        <text className='ex2' x="80" y="90%">{datasForm.hour}</text>

      </g>
    </svg>
    </div>
    
   </>
  );

}

export default LabelBasicEditable