import React, { useEffect, useState } from 'react'

const LabelRemacheManual = ({ handlePrint, changeText,
    componentRefs, datasForm, waterMark, handleChangeData, comparative, handleDataAdd }) => {



    const mapeoLabel =
        [
            { title: "Material", data: datasForm?.model },
            { title: "Description", data: datasForm?.description ? datasForm.description : comparative?.__EMPTY_3 },
            { title: "QTY", data: datasForm?.qty },
            { title: "WO/NO", data: datasForm?.wo?.length > 10 ? alert("No exceder 10 Digitos") : datasForm.wo },
            { title: "Fecha", data: datasForm?.date },
            { title: "Empleado", data: datasForm?.employe?.length > 5 ? alert("No se puede") : datasForm.employe },
            { title: "Turno", data: datasForm?.turn },
        ]


    const LabelMx72 = ({ title, data }) => (
        <div>
            <span className='letterTitles'> {title} </span>
            <span className={`${title == "Description" ? "descriptionSize2" : "descriptionSize"}`}>{data}</span>
        </div>
    )
    return (
        <div className='label2menu'>
            <div >
                <div className="containerTicketSubTemplate2" onClick={handlePrint[18]}>
                    <div className="contanerText">
                        <div className={`areaImprimir3  ${changeText && changeText.length >= 7 ? "len7" : "lent6"}`}
                            ref={componentRefs[18]}>
                            <div className='containerTextA'>
                                <div className='letterTicket' onClick={(e) => e.stopPropagation()}>
                                    <div>  <span> {!datasForm.selectA ? "Type of Cable" : datasForm.selectA}</span></div>
                                    {mapeoLabel?.map(e => <LabelMx72 title={e?.title} data={e?.data} />)}
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
                                <option value={e}>{e == 'Seleccione Una Opcion' ? "" : e}</option>
                            )
                        }
                    </select>



                    <input type="text" required placeholder='Ingrese Modelo' name="model" onChange={handleChangeData} />

                    {comparative ? "" : <input type="text" required placeholder='Ingrese Descripcion' name="description" onChange={handleChangeData} />}

                    <input type="number" required placeholder='Ingrese QTY' name="qty" onChange={handleChangeData} />
                    <input type="text" required placeholder='Ingrese # Orden' name="wo" onChange={handleChangeData} />
                    <input type="date" required placeholder='Date' name="date" onChange={handleChangeData} />
                    <input type="number" required placeholder='Ingrese # Empleados' name="employe" onChange={handleChangeData} />
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
    )
}

export default LabelRemacheManual