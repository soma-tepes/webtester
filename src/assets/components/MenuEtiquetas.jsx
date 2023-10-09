import React from 'react'
import "../Styles/MenuEtiqueta.css"
const MenuEtiquetas = ({setturnoData1}) => {

 
    
const update = (datas) => {
        setturnoData1(e => ({ ...e, ...datas }))
    }    
const handleOption = (option)=>{


   update({
    boton: option =="btn1",
    botonb: option =="btn2",
    botonc: option =="btn3",
    botond: option =="btn4"
   })

}


  return (
 <>
  <div className="titleTiket">
        <div className='btnOption'>Etiquetas </div>
        <button onClick={()=>handleOption('btn1')}>Turno1</button>
        <button onClick={()=>handleOption('btn2')}>Turno2</button>
        <button onClick={()=>handleOption('btn3')} >Turno3</button>
        <button onClick={() =>handleOption('btn4')}>Etiqueta Manual</button>
      </div>
 </>
  )
}

export default MenuEtiquetas