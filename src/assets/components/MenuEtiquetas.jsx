import React from 'react'
import "../Styles/MenuEtiqueta.css"
const MenuEtiquetas = ({setturnoData1 , turnoData1}) => {

 
    
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
        <div className='btnOption'><span >Etiquetas</span></div>
        <button className={`${turnoData1.boton? "onMenuTicket": ""}`} onClick={()=>handleOption('btn1')}>Turno 1</button>
        <button  className={`${turnoData1.botonb? "onMenuTicket": ""}`}  onClick={()=>handleOption('btn2')}>Turno 2</button>
        <button className={`${turnoData1.botonc? "onMenuTicket": ""}`}  onClick={()=>handleOption('btn3')} >Turno 3</button>
        <button  className={`${turnoData1.botond? "onMenuTicket": ""}`} onClick={() =>handleOption('btn4')}>Etiqueta Manual</button>
      </div>
 </>
  )
}

export default MenuEtiquetas