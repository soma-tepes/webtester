import React, { useState } from 'react'
import SubDataPicker from './SubDataPicker'
import Intruccion from './Intruccion'

const CaptureHores = () => {


    return (
        <div className='captureHrs' >

            <div>

                <SubDataPicker />
            </div>
             <div>
                <Intruccion />
            </div>
        </div>
    )
}

export default CaptureHores