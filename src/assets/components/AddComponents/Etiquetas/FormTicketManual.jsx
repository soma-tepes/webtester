import React, { useEffect, useState } from 'react'
import "../../../Styles/FormTicketManual.css"
import "../../../Styles/EtiquetasPrint.css"

const FormTicketManual = ({ handleChange, changeText, handlePrint, waterMark, componentRefs }) => {


    const [datasForm, setDatasForm] = useState({

        model: null,
        description: null,
        qty: null,
        wo: null,
        date: null,
        employe: null,
        turn: null,
        selectA: null,
        optionTypeCables: ["KOMAX CABLE REMACHADO", "KOMAX CABLE PROCESADO", "KOMAX CABLE TWISTEADO"]

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

    const LabelMenu = ["Label Quick", "Label Remache/Twis/Process", "Label Identificator"]
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
            <div className='typeTicketMenu'>
                <div><span className='typeLabelMenuTittle'>Sub Label Menu</span></div>
                <div className='btnMenuLabel' key={LabelMenu}>
                    {
                        LabelMenu.map((e, i) => <button className={`${ menuLabel[i] ? "onnMenuTicket":""} labelMenuButton`} onClick={() => handleLabelMenu(i)}>{e}</button>)
                    }
                </div>

            </div>
            <div className="containerTicket2" >
                {menuLabel[0] &&
                    <>
                        <div>
                            <article>
                                <span>Add Text </span>
                                <form onSubmit={handleChange} >
                                    <input className="inputPrinter" maxlength="9" type="text" value={changeText} onChange={handleChange} placeholder="Max 8 Character" />
                                </form>
                                <button onClick={handlePrint[18]}>Imprimir</button>
                            </article>
                        </div>


                        <div className="containerTicketSubTemplate" onClick={handlePrint[17]}>
                            <div className="contanerText">
                                <div className={`areaImprimir3  ${changeText && changeText.length >= 7 ? "len7" : "lent6"}`}
                                    ref={componentRefs[17]}>
                                    {changeText && changeText}
                                </div>

                                {waterMark}
                            </div>

                        </div>
                    </>
                }
                {menuLabel[1] &&
                    <>
                        <div className='label2menu'>
                            <div >
                                <div className="containerTicketSubTemplate2" onClick={handlePrint[18]}>
                                    <div className="contanerText">
                                        <div className={`areaImprimir3  ${changeText && changeText.length >= 7 ? "len7" : "lent6"}`}
                                            ref={componentRefs[18]}>
                                            <div className='containerTextA'>
                                                <div className='letterTicket' onClick={(e) => e.stopPropagation()}>



                                                    <div>  <span> {datasForm.selectA}</span></div>
                                                    <div>  <span> Material</span> <span>{datasForm.model}</span></div>
                                                    <div>  <span>Description</span><span>{datasForm.description}</span></div>
                                                    <div>  <span>QTY</span><span>{datasForm.qty}</span></div>
                                                    <div>  <span>WO/NO</span><span>{datasForm.wo}</span></div>
                                                    <div>  <span>Fecha</span><span>{datasForm.date}</span></div>
                                                    <div>  <span>Empleado</span><span>{datasForm.employe}</span></div>
                                                    <div>  <span>Turno</span><span>{datasForm.turn}</span></div>

                                                </div>
                                            </div>


                                        </div>

                                        {waterMark}
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='addInfo'>
                                    <select name="selectA" onChange={handleChangeData} >
                                        <option name="" >Seleccione Una Opcion</option>
                                        {
                                            datasForm.optionTypeCables?.map((e) =>
                                                <option value={e}>{e=='Seleccione Una Opcion' ? "": e}</option>
                                            )
                                        }
                                    </select>


                                  
                                    <input type="text" required placeholder='Ingrese Modelo' name="model" onChange={handleChangeData} />
                                    <input type="text" required placeholder='Ingrese Descripcion' name="description" onChange={handleChangeData} />
                                    <input type="number" required placeholder='Ingrese QTY' name="qty" onChange={handleChangeData} />
                                    <input type="text" required placeholder='Ingrese # Orden' name="wo" onChange={handleChangeData} />
                                    <input type="date" required placeholder='Date' name="date" onChange={handleChangeData} />
                                    <input type="text" required placeholder='Ingrese # Empleados' name="employe" onChange={handleChangeData} />
                                    <input type="text" placeholder='Ingrese Turno' name="turn" onChange={handleChangeData} />

                                </div>

                                <form onSubmit={handleDataAdd}>
                                 {/*    Add Type Cable
                                    <input type="text" name='addelement' placeholder='add an element' />
                                    <button>Send!!</button> */}
                                    <button onClick={handlePrint[18]}>Imprimir</button>
                                </form>
                            </div>


                        </div>

                    </>
                }

            </div>
        </>
    )
}

export default FormTicketManual