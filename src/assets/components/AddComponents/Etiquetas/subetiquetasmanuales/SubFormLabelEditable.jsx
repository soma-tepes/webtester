import React from 'react'
import { useState } from 'react'

const SubFormLabelEditable = ({ dataLabel, handleLa, handleChangeData }) => {

    const array = ['linea', 'fecha', 'modelo', 'qty', 'box']

    const [datasObject,setDatasObject] =  useState ( [{
        datas: ["line","date","model","wo","qty","nbox","turn","hour",],
        
    }])
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


                <div>
                    <h3>Datas</h3>
                
                    {datasObject[0]?.datas?.map(e=> 
                        <input type={`${e == "qty" ? "number": e == "date" ? "date" : "text"}`} 
                        name={e}  placeholder={`Ingrese ${e}`} onChange={handleChangeData}/>
                        )}
                    </div>
                  
            </div>

        </>
    )
}

export default SubFormLabelEditable