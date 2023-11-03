import React, { useEffect, useState } from 'react'
import "../../../Styles/FormTicketManual.css"
import "../../../Styles/EtiquetasPrint.css"
import { useStore2 } from '../../../../utils/store'
import LabelRemacheManual from './subetiquetasmanuales/LabelRemacheManual'
import LabelManualBasic from './subetiquetasmanuales/LabelManualBasic'
import ex from "../../../css/images/ticketsegunda/ex.svg"
import LabelBasicEditable from './subetiquetasmanuales/LabelBasicEditable'

const FormTicketManual = ({ handleChange, changeText, handlePrint, waterMark, componentRefs }) => {
    const { data } = useStore2()
    const modelBD = { data }

    const [datasForm, setDatasForm] = useState({

        model: null, description: null, qty: null, wo: null, date: null, employe: null, turn: null, selectA: null, line: null, nbox : null,
        optionTypeCables: ["KOMAX CABLE REMACHADO", "KOMAX CABLE PROCESADO", "KOMAX CABLE TWISTEADO"],
        optionTurn: ["Turno 1", "Turno 2", "Turno 3", "Turno 4"]
    })


    const [menuLabel, setMenuLabel] = useState(Array(3).fill(false))

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
    const [LabelMenu, setLabelMenu] = useState(["Label Quick", "Label Remache/Twis/Process", "Label Identificator"])

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
    const hello = "Hello"

    const [dataLabel, setDataLabel] = useState(51)
    const handleLa = (e)=>{
        e.preventDefault()
        const data = e.target.value 
        setDataLabel(data)
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
                            {/*    <img hello={hello} src={ex} alt="" /> */}

                            <LabelBasicEditable dataLabel= {dataLabel} handleChangeData={handleChangeData} datasForm={datasForm} 
                            handlePrint={handlePrint}
                            componentRefs={componentRefs}
                            />
                        </div>
                        <form action=""><input type="number" placeholder='%' value={dataLabel} onChange={handleLa} /></form>
                        
                        <div><h3>Datas</h3>
                        <form >
                        <input type="text" name="line"  onChange={handleChangeData} placeholder='Ingrese Linea'/>
                        <input type="date" name="date"  onChange={handleChangeData} placeholder='' />
                        <input type="text" name="model" onChange={handleChangeData}  placeholder='Ingrese Modelo'/>
                        <input type="text" name="wo"  onChange={handleChangeData}  placeholder='Ingrese Orden'/>
                        <input type="text" name="qty" onChange={handleChangeData}  placeholder='Ingrese QTY'/>
                        <input type="text" name="nbox" onChange={handleChangeData}  placeholder='Numero de Box'/>
                      
                        </form></div>
                    </>


                }
               
            </div>
        </>
    )
}

export default FormTicketManual