import React, { useEffect, useState } from 'react'
import '../../Styles/Lector.css'
const LectorMain = () => {

    const [inputScan, setInputScan] = useState([])
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = e.target.datas.value.split(" ").filter(e=>e != "" && e )
        
        if(data.length === 18) { 

            const dataGral = {
                name : data[0],
                description : data[1],
                lote : data[11],
                qty : data[13],
                wo : data[16],
            }
            setInputScan(dataGral)
        }
        if(data.length === 5) {
            const dataGral = {
                name : data[0],
              /*   description : data[1], */
                lote : data[4],
                qty : data[2],
                wo : data[3].slice(0,10),
            }
            setInputScan(dataGral)
        } 

       else{ console.log("Not Data")}
        e.target.datas.value = ""
    }
console.log(inputScan)

    return (
        <div className='containerLector'>
            <div className='lectorMain'>
                <div>  Scan Ticket
                    <form onSubmit={handleSubmit}>
                        <input type="text" required  name='datas'  />
                        <button>Send</button>
                    </form>

                </div>
                <div>
                    <table className='tableLector'>
                        <tr>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Lote</th>
                            <th>QTY</th>
                            <th>Wo</th>
                            <th>PO</th>

                        </tr>
                        <tr>
                            <td>{inputScan.name  }</td>
                            <td>{inputScan.description  }</td>
                            <td>{inputScan.lote  }</td>
                            <td>{inputScan.qty  }</td>
                            <td>{inputScan.wo  }</td>
                           

                        </tr>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default LectorMain