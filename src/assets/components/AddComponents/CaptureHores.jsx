import React, { useState } from 'react'
import SubDataPicker from './SubDataPicker'
import Intruccion from './Intruccion'
import '../../Styles/Datapicker.css'
const CaptureHores = () => {


    return (
        <>
            <h2 className='captureh2'>Calculadora de Horas Actuales - SAP Data (0.3v)
            </h2>
            <div className='captureHrs' >

                <div>
                    <SubDataPicker />
                </div>
                <div>
                    <Intruccion />
                </div>
            </div>
        </>

    )
}

export default CaptureHores