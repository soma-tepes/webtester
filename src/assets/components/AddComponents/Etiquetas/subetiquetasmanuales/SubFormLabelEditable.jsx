import React from 'react'
import { useState } from 'react'

const SubFormLabelEditable = ({ dataLabel, handleLa, handleChangeData }) => {

    const array = ['linea', 'fecha', 'modelo', 'qty', 'box']
    const [dateForma, setDateForma] = useState(Array(5).fill(null))

    const handleLabelMenu = (index) => {
        const updatedMenuLabel = menuLabel.map((item, i) => {
            if (i === index) {
                return true;
            } else {
                return false;
            }
        });

        setMenuLabel(updatedMenuLabel);
    }


    return (
        <>
            <div>

                <select onChange={(e) => setDateForma(e.target.value)} value={dateForma} >

                    <option value="a">Select Vacio</option>
                    {array?.map(e => <option value={e} >Seleccione: {e}</option>)}
                </select>


                <form action="">
                    Movement Type X AND Y Edit 
                   {
                         dateForma?.[0]  &&  <div>
                         <input type="number" placeholder='%' value={dataLabel} onChange={handleLa} />
                         <input type="number" name="fontSizeModel" onChange={handleChangeData} />
                         </div>  
                   }
                   
                  {
                           dateForma?.[2] && 
                           <div>
                           <input type="number" placeholder='%' value={dataLabel} onChange={handleLa} />
                           <input type="number" name="fontSizeModel" onChange={handleChangeData} />
                           </div>
                  }
                   
                   
                </form>


                <div><h3>Datas</h3>
                    <form >
                        <input type="text" name="line" onChange={handleChangeData} placeholder='Ingrese Linea' />
                        <input type="date" name="date" onChange={handleChangeData} placeholder='' />
                        <input type="text" name="model" onChange={handleChangeData} placeholder='Ingrese Modelo' />
                        <input type="text" name="wo" onChange={handleChangeData} placeholder='Ingrese Orden' />
                        <input type="text" name="qty" onChange={handleChangeData} placeholder='Ingrese QTY' />
                        <input type="text" name="nbox" onChange={handleChangeData} placeholder='Numero de Box' />
                        <input type="text" name="turn" onChange={handleChangeData} placeholder='Ingrese Turno' />
                        <input type="text" name="hour" onChange={handleChangeData} placeholder='Ingrese la hora' />
                    </form></div>
                  
            </div>

        </>
    )
}

export default SubFormLabelEditable