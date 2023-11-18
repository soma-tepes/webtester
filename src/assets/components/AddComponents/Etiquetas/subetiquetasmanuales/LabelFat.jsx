import React from 'react'

const LabelFat = ({handlePrint , componentRefs}) => {
  return (
    <>  <div onClick={handlePrint[18]}   ref={componentRefs[18]}>
     {
        <svg width="103.500mm" height="156.500mm" viewBox="0 0 103.500 156.500">
          <g>



           
          <text className='ex' x={`2%`} y="15%">Testing</text>
          <text className='ex' x={`50%`} y="50%">Testing:</text>
          <line x1="0%" y1="3%" x2="100" y2="3%" stroke="black" stroke-width="0.3" />
          <line x1="0%" y1="70%" x2="100" y2="70%" stroke="black" stroke-width="0.3" />
          </g>
        </svg>
      }
      </div>
    </>
    
  )
}

export default LabelFat