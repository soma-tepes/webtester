import React, { useEffect, useState } from 'react'
import "../../../Styles/FormTicketManual.css"
import "../../../Styles/EtiquetasPrint.css"
import { useStore2 } from '../../../../utils/store'
import LabelRemacheManual from './subetiquetasmanuales/LabelRemacheManual'
import LabelManualBasic from './subetiquetasmanuales/LabelManualBasic'

import LabelBasicEditable from './subetiquetasmanuales/LabelBasicEditable'
import SubFormLabelEditable from './subetiquetasmanuales/SubFormLabelEditable'
import LabelGood from './subetiquetasmanuales/LabelGood'

const FormTicketManual = ({ handleChange, changeText, handlePrint, waterMark, componentRefs }) => {
    const { data } = useStore2()
    const modelBD = { data }

    const [datasForm, setDatasForm] = useState({

        model: null, description: null, qty: null, 
        wo: null, date: null, employe: null,
        turn: null, selectA: null, line: null, nbox: null,
        fontSizeModel : null,
        optionTypeCables: ["KOMAX CABLE REMACHADO", "KOMAX CABLE PROCESADO", "KOMAX CABLE TWISTEADO"],
        optionTurn: ["Turno 1", "Turno 2", "Turno 3", "Turno 4"],

        prodTitle1: "PRODUCT CONTROL LABEL",
        
    })

    const [consecutivo, setConsecutivo] = useState(1);
    const [menuLabel, setMenuLabel] = useState(Array(4).fill(false))
    const [LabelMenu, setLabelMenu] = useState(["Label Quick", "Label Remache/Twis/Process", "Label Identificator","LabelGood"])


    const handleDataAdd = (e) => {
        e.preventDefault()
        const data = e.target.addelement.value
        setDatasForm(
            {
                ...datasForm,
                optionTypeCables: [...datasForm.optionTypeCables, data]
            }

        )
        e.target.addelement.value = ""

    }

    const handleChangeData = (e) => {



        setDatasForm({
            ...datasForm,
            [e.target.name]: e.target.value,
        });
    };

    /* const LabelMenu =  ["Label Quick", "Label Remache/Twis/Process", "Label Identificator"] */
    
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

    const hadleButton = (e) => {
        e.preventDefault()
        const updateData = e.target.element.value
        setLabelMenu([...LabelMenu, updateData])

    }
    const comparative = modelBD.data.filter(e => e.__EMPTY_4).find(e => e.__EMPTY_4 == datasForm?.model?.toUpperCase())
  

    const [dataLabel, setDataLabel] = useState(51)
    const handleLa = (e) => {
        e.preventDefault()
        const data = e.target.value
        setDataLabel(data)



    }
const [arraySave, setArraySave] = useState()
    const handleSave =(e) =>{
        e.preventDefault()
   
        const stringer = e.target.dateA.value
        const newStringer = stringer.split(",").filter(e=>e);
        const objet  = Object.assign({},newStringer)
        for (let clave in objet) {
            objet[clave] = objet[clave].replace(/"/g, '').trim();
        }
        
   setArraySave(objet)
   console.log(objet)
        
    }
    return (
        <>
            <div className='typeTicketMenu'>
                <div><span className='typeLabelMenuTittle'>Sub Label Menu</span></div>
                <div className='btnMenuLabel' key={LabelMenu}>
                    {
                        LabelMenu.map((e, i) => <button className={`${menuLabel[i] ? "onnMenuTicket" : ""} labelMenuButton`} onClick={() => handleLabelMenu(i)}>{e}</button>)
                    }
                </div>
                {/*   <div>Add an button 
                    <form onSubmit={hadleButton}>
                    <input type="text" placeholder='element here!' name='element' />
                    </form>
                  </div> */}
            </div>
            <div className="containerTicket2" >
                {menuLabel[0] &&
                    <LabelManualBasic handleChange={handleChange} changeText={changeText} handlePrint={handlePrint}
                        componentRefs={componentRefs} waterMark={waterMark}
                    />}
                {menuLabel[1] &&
                    <>
                        <LabelRemacheManual handlePrint={handlePrint} changeText={changeText} datasForm={datasForm} componentRefs={componentRefs}
                            waterMark={waterMark} handleChangeData={handleChangeData} comparative={comparative} handleDataAdd={handleDataAdd}
                        />

                    </>
                }
                {menuLabel[2] &&
                    <>
                        <div className='labelEditManualTester'>
                             

                            <LabelBasicEditable dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                handlePrint={handlePrint} comparative={comparative}
                                componentRefs={componentRefs}
                            />
                        </div>

                     <>
                      <SubFormLabelEditable dataLabel={dataLabel} handleLa={handleLa} handleChangeData={handleChangeData}/>
                     </>
                    </>


                }

                {
                    menuLabel[3] && 
                    <>
                    <div className='labelEditManualTester'>
                         

                        <LabelGood dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                            handlePrint={handlePrint} comparative={comparative}
                            componentRefs={componentRefs} arraySave = {arraySave}
                        />
                    </div>

                 <>
                  <SubFormLabelEditable dataLabel={dataLabel} handleLa={handleLa} handleChangeData={handleChangeData}/>
                  
                   <form onSubmit={handleSave}>
                    <input type="text" name='dateA' placeholder='ingrese el valor de bloc de notas'/>Lector de etiqueta
                   </form>
                 </>
                </>
                }

            </div>
        </>
    )
}

export default FormTicketManual