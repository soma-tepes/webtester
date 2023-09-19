import React, { useEffect, useState } from 'react'
import '../../Styles/Lector.css'
const LectorMain = () => {

    const [inputScan, setInputScan] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = e.target.datas.value
        inputScan.length == 0 ? setInputScan([data]) : 
        setInputScan([data,...inputScan])
        e.target.datas.value =""
        console.log(inputScan)
    }


    return (
        <div className='containerLector'>
            <div className='lectorMain'>
                <div>  Scan Ticket
                    <form onSubmit={handleSubmit}>
                        <input type="text" required  name='datas'/>
                        <button>Send</button>
                    </form>

                </div>
                <div>
                    <table className='tableLector'>
                        <tr>
                            <th>Model</th>
                            <th>Description</th>
                            <th>QTY</th>
                            <th>PO</th>
                            <th>Lote</th>
                            <th>Date</th>

                        </tr>
                        <tr>
                            <td>Subtitle</td>
                            <td>Subtitle2</td>
                            <td>Subtitle2</td>
                            <td>Subtitle2</td>

                        </tr>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default LectorMain