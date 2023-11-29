import React, { useEffect, useRef, useState } from 'react'
import "../../../Styles/FormTicketManual.css"
import "../../../Styles/EtiquetasPrint.css"
import { useStore2 } from '../../../../utils/store'
import LabelRemacheManual from './subetiquetasmanuales/LabelRemacheManual'
import LabelManualBasic from './subetiquetasmanuales/LabelManualBasic'
import LabelBasicEditable from './subetiquetasmanuales/LabelBasicEditable'
import SubFormLabelEditable from './subetiquetasmanuales/SubFormLabelEditable'
import LabelGood from './subetiquetasmanuales/LabelGood'
import LabelRastre from './subetiquetasmanuales/LabelRastre'
import LabelRastreComponentes from './subetiquetasmanuales/LabelRastreComponentes'
import LabelGenerateBarcode from './subetiquetasmanuales/LabelGenerateBarcode'
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import LabelFat from './subetiquetasmanuales/LabelFat'



const FormTicketManual = ({ handleChange, changeText, handlePrint, waterMark, componentRefs }) => {
    const { data } = useStore2()
    const modelBD = { data }
    
    const [datasForm, setDatasForm] = useState({

        model: null, description: null, qty: null,
        wo: null, date: null, employe: null,
        turn: null, selectA: null, line: null, nbox: null,
        fontSizeModel: null, hour: null, barcodeB: null,
        optionTypeCables: ["KOMAX CABLE REMACHADO", "KOMAX CABLE PROCESADO", "KOMAX CABLE TWISTEADO"],
        optionTurn: ["Turno 1", "Turno 2", "Turno 3", "Turno 4"],

        prodTitle1: "PRODUCT CONTROL LABEL",
        googReceived: "Goods Received Label"
    })
    
    const [LabelMenu, setLabelMenu] = useState
        (["Label Quick", "Label Remache/Twis/Process", "Label Identificator", "LabelGood", "LabelRastreabilidad1",
            "LabelRastreComponentes", "CreateBarcode", "LabelFat"])
    const [menuLabel, setMenuLabel] = useState(Array(LabelMenu.length).fill(false))
    const [dataQr, setSavedArray] = useState([])  
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


    const comparative = modelBD.data.filter(e => e.__EMPTY_4).find(e => e.__EMPTY_4 == datasForm?.model?.toUpperCase())


    const [dataLabel, setDataLabel] = useState(51)
    const handleLa = (e) => {
        e.preventDefault()
        const data = e.target.value
        setDataLabel(data)
    }
    const [rastreSaveComponents, setRastreSaveComponents] = useState()
    const [whiteDat, setWhiteDat] = useState(null)

    const handleFile = (e) => {
        
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const contect = e.target.result
                setWhiteDat(contect)
                 e.target.value = "";
               
            }
            reader.readAsText(file)
           
        } else {
            setWhiteDat(null)
        }

    }


    const [finalLabelSeparator, setFinalLabelSeparator] = useState()

    const handleSeparatorLabel = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        const separatorLabelObjet = {};
        const separatorLabel = whiteDat?.split("\n");
  
        for (const key in separatorLabel) {
            separatorLabelObjet[key] = separatorLabel[key].split(",");
        }


        const newObject = Object.keys(separatorLabelObjet).reduce((acc, key) => {
            const value = separatorLabelObjet[key];
            acc[key] = value.reduce((obj, item, index) => {
                obj[index] = item.replace(/"/g, '');

                return obj;
            }, {});
            return acc;
        }, {});

        const dataArray = Object.entries(newObject).map(([key, value]) => value);
        setFinalLabelSeparator(dataArray)
     
    }
    const componentRef = useRef();
    const handlePrintAll = useReactToPrint({
        content: () => componentRef.current.print(),
    });
    /*  useEffect(() => {
       handlePrintAll();
     }, [finalLabelSeparator]); */

    /*  const handlePrint = () => {
        componentRef.current.print();
      };
       */

      
    return (
        <>
            <div className='typeTicketMenu'>
                <div><span className='typeLabelMenuTittle'>Label Manual Submenu</span></div>
                <div className='btnMenuLabel' key={LabelMenu}>
                    {
                        LabelMenu.map((e, i) => <button className={`${menuLabel[i] ? "onnMenuTicket" : ""} labelMenuButton`} onClick={() => handleLabelMenu(i)}>{e}</button>)
                    }
                </div>

            </div>
            <div className="containerTicket2" >
                <div className='SubContainerLabel'>
                    {menuLabel[0] &&
                        <LabelManualBasic handleChange={handleChange} changeText={changeText} handlePrint={handlePrint}
                            componentRefs={componentRefs} waterMark={waterMark}
                        />}
                </div>

                {/* Label Remache/Twist/Process */}
                <div >
                    {menuLabel[1] &&
                        <>
                            <LabelRemacheManual handlePrint={handlePrint} changeText={changeText} datasForm={datasForm} componentRefs={componentRefs}
                                waterMark={waterMark} handleChangeData={handleChangeData} comparative={comparative} handleDataAdd={handleDataAdd}
                            />

                        </>
                    }
                </div>
                { /* End Label Remache/Twist/Process */}

                {/* Information Label Provitional Manual */}
                <div className='labelEditManualTester2'>
                    {menuLabel[2] &&
                        <>
                            <div className='sublabelEditManualTester2'>


                                <LabelBasicEditable dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                    handlePrint={handlePrint} comparative={comparative}
                                    componentRefs={componentRefs}
                                />
                            </div>

                            <>
                                <div>
                                    <SubFormLabelEditable dataLabel={dataLabel} handleLa={handleLa} handleChangeData={handleChangeData} />
                                </div>

                            </>
                        </>


                    }
                </div>
                {/* End  Information Label Provitional Manual */}

                {/* Information data Label Good! */}
                <div className='subGoodLabel'>
                    {
                        menuLabel[3] &&


                        <>
                            <div ref={componentRef} className='goodCss'>
                                <div className='labelEditManualTester'>

                                    {finalLabelSeparator?.map((datosE, i) =>
                                        !datosE?.[0] ? "" :

                                            <>
                                                <div className='boxDad'>
                                                    <div className='boxiii' onClick={handlePrint[i]} ref={componentRefs[i]}>
                                                        <LabelGood datosE={datosE} dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                                            handlePrint={handlePrint} comparative={comparative}
                                                            componentRefs={componentRefs} finalLabelSeparator={finalLabelSeparator}
                                                            dataQr={dataQr} setSavedArray ={setSavedArray}
                                                        />

                                                    </div>
                                                </div>

                                            </>

                                    )}
                                </div>
                                
                            </div>

                            <>
                              <div>
                             <form onSubmit={handleSeparatorLabel}>
                                        <p className='inputTitle'>Label Provitional  -Finish Goods!-</p>
                                        <input type="text" className='inputLabelEdit2' value={whiteDat} /* name='dateA' */ placeholder='Introducir Data' />
                                    </form>
                                    <input type="file" onChange={handleFile} />
                                   {/*  <button onClick={handlePrinter}>Tester Print Direct</button> */}
                                    <ReactToPrint trigger={() => <button>Imprimir</button>} content={() => componentRef.current} />
                              </div>
                                   
                           

                            </>
                        </>
                    }
                </div>
                {/* End Information data Label Good! */}

                <div>
                    {/* {
                    menuLabel[4] &&
                    <>
                          <div className='labelEditManualTester'>


                            <LabelRastre dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                handlePrint={handlePrint} comparative={comparative}
                                componentRefs={componentRefs} arraySave={arraySave}
                            />
                        </div>

                        <>
                            <SubFormLabelEditable dataLabel={dataLabel} handleLa={handleLa} handleChangeData={handleChangeData} />

                              <form onSubmit={handleSave}>
                                <input type="text" name='dateA' placeholder='ingrese el valor de bloc de notas' />Lector de etiqueta
                            </form>
                        </>
                    </>
                } */}
                </div>
                <div>
                    {
                        menuLabel[5] &&
                        <>
                            <div ref={componentRef}>
                                <div className='labelEditManualTester'>
                                    <div className='subContainerTiquetManualtrees'>
                                        {finalLabelSeparator?.map((datosE, i) =>
                                            !datosE?.[0] ? "" :

                                                <>

                                                    <div className='boxiii' onClick={handlePrint[i]} ref={componentRefs[i]}>
                                                        <LabelRastreComponentes datosE={datosE} dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                                            handlePrint={handlePrint} comparative={comparative}
                                                            componentRefs={componentRefs} finalLabelSeparator={finalLabelSeparator}
                                                        />

                                                    </div>
                                                </>

                                        )}
                                    </div>
                                </div>
                            </div>

                            <>


                                <form onSubmit={handleSeparatorLabel}>
                                    <p className='inputTitle'>Lector de etiqueta</p>
                                    <input type="text" className='inputLabelEdit2' value={whiteDat} /* name='dateA' */ placeholder='Introducir Data' />
                                </form>
                                <input type="file" onChange={handleFile} />
                                <button onClick={handlePrintAll}>Imprimir todo</button>
                            </>
                        </>

                    }

                </div>
                <div>
                    {
                        menuLabel[6] &&
                        <>
                            <div className='labelEditManualTester'>


                                <LabelGenerateBarcode dataLabel={dataLabel} handleChangeData={handleChangeData} datasForm={datasForm}
                                    handlePrint={handlePrint} comparative={comparative}
                                    componentRefs={componentRefs} rastreSaveComponents={rastreSaveComponents}
                                />
                            </div>

                            <>



                                <input type="text" className='inputLabelEdit' name='barcodeB' onChange={handleChangeData} placeholder='ingrese el valor de bloc de notas' />Lector de etiqueta

                            </>
                        </>

                    }
                </div>
                <div>
                    {
                        menuLabel[7] &&
                        <>
                            <div className='labelFatSize'>
                                <div className='labelFatSubContainer'>
                                    <LabelFat componentRefs={componentRefs} handlePrint={handlePrint} />
                                </div>
                            </div>


                        </>
                    }
                </div>










            </div>
        </>
    )
}

export default FormTicketManual