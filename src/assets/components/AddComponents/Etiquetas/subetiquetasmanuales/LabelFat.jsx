import React from 'react'
import "../../../../Styles/LabelFat.css"

const LabelFat = ({handlePrint , componentRefs}) => {
  return (
    <>  <div className='labelFAT' onClick={handlePrint[18]}   ref={componentRefs[18]}>
     {
       <svg width="99.1mm" height="154.9mm" viewBox="0 0 99.1 154.9">
       <g>
         <text className='ex rotate' x={`90%`} y="23%" >MAT'L DESCRIPTION</text>

         <text className='ex rotate' x={`85%`} y="19%" >Here Description  </text>
      
         <text className='ex rotate' x={`10%`} y="90%">TestingB:</text>
         <text className='ex rotate' x={`50%`} y="50%" >TestingC</text>
         <line x1="5%" y1="3%" x2="95%" y2="3%" stroke="black" stroke-width="2" />{/*mark A  */}
         <line x1="5%" y1="2.5%" x2="5%" y2="98%" stroke="black" stroke-width="2" />{/*mark B  */}
        <line x1="4%" y1="98%" x2="95%" y2="98%" stroke="black" stroke-width="2" />{/* mark C */}
         <line x1="95%" y1="98.5%" x2="95%" y2="2.4%" stroke="black" stroke-width="2" />{/* Mark d */}

         <line x1="70%" y1="98.5%" x2="70%" y2="2.4%" stroke="black" stroke-width="1" />{/* renglon one */}

         <line x1="54%" y1="98.5%" x2="54%" y2="2.4%" stroke="black" stroke-width="1" />{/* renglon one */}

         <line x1="38%" y1="98.5%" x2="38%" y2="2.4%" stroke="black" stroke-width="1" />{/* renglon one */}

         <line x1="25%" y1="98.5%" x2="25%" y2="2.4%" stroke="black" stroke-width="1" />{/* renglon one */}

         <line x1="54%" y1="66%" x2="70%" y2="66%" stroke="black" stroke-width="1" />{/* mark Csub */}
         <line x1="4%" y1="30%" x2="25%" y2="30%" stroke="black" stroke-width="1" />{/* mark Csub */}
         <line x1="4%" y1="50%" x2="25%" y2="50%" stroke="black" stroke-width="1" />{/* mark Csub */}
         <line x1="4%" y1="70%" x2="25%" y2="70%" stroke="black" stroke-width="1" />{/* mark Csub */}

         <line x1="14%" y1="2.5%" x2="14%" y2="30%" stroke="black" stroke-width="1" />{/*mark B sub */}  
         <line x1="16%" y1="70%" x2="16%" y2="98%" stroke="black" stroke-width="1" />{/*mark B sub */}
       </g>
     </svg>
      }
      </div>
    </>
    
  )
}

export default LabelFat