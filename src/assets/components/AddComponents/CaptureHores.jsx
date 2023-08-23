import React, { useState } from 'react'
import SubDataPicker from './SubDataPicker'
import Intruccion from './Intruccion'
import '../../Styles/Datapicker.css'
const CaptureHores = () => {
    const [interruptor, setInterruptor] = useState(false)

    
    return (
        <>
            <div className='captureIndex'>
                <h2 className='captureh2'>Calculadora de Horas Actuales - SAP Data (0.3v)</h2>
                <div className='captureBotton'>
                    <button className={interruptor ? "on": "off"} onClick={()=>!interruptor ? setInterruptor(true) : setInterruptor(false) } >
                        {interruptor ? "ON": "OFF"}</button>
                    <button>Reset</button>
                    <button>Help Format hrs</button>
                </div>

                <div className='captureHrs' >
                    {interruptor &&
                        <div>
                            <SubDataPicker />
                        </div>
                    }
                    {interruptor &&
                        <div>
                            <Intruccion />
                        </div>
                    }
                </div>
            </div>

        </>

    )
}

export default CaptureHores