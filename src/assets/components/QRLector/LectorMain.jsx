import React, { useEffect, useState } from 'react'
import '../../Styles/Lector.css'
const LectorMain = () => {

    const [inputScan, setInputScan] = useState([])
    const [activeForm, setActiveForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()


        const data = e.target.datas.value.split(" ").filter(e => e != "" && e)
        console.log(data)
        if (data.length === 18) {

            const dataGral = {
                name: data[0],
                description: data[1],
                lote: data[11],
                qty: data[13].split(" ").flatMap(e => e.match(/\d+/g)).map(Number),
                wo: data[16],
            }
            e.target.datas.value = ""
            return setInputScan([...inputScan, dataGral])
        } if (data.length === 8) {

            const dataGral = {
                name: data[0],
                /* description: data[1], */
                lote: data[5],
                qty: data[2].split(" ").flatMap(e => e.match(/\d+/g)).map(Number),
                wo: data[4],
            }
            e.target.datas.value = ""
            return setInputScan([...inputScan, dataGral])
        }
        if (data.length === 7) {
            const dataGral = {
                name: data[0].slice(4, 26),
                /*  description: data[1], */
                lote: data[6],
                qty: data[2].split(" ").flatMap(e => e.match(/\d+/g)).map(Number),
                wo: data[4],
            }
            e.target.datas.value = ""
            return setInputScan([...inputScan, dataGral])
        }
        if (data.length === 6) {
            const dataGral = {
                name: data[0].slice(4, 26),
                /*  description: data[1], */
                lote: data[5],
                qty: data[2].split(" ").flatMap(e => e.match(/\d+/g)).map(Number),
                wo: data[4],
            }
            e.target.datas.value = ""
            return setInputScan([...inputScan, dataGral])
        }
        if (data.length === 5) {
            const dataGral = {
                name: data[0].at(-1) == "b" ? data[0].slice(4, 22) : data[0].slice(4),
                /*   description : data[1], */
                lote: data[4],
                qty: data[0].at(-1) == "b" ? data[1].split(" ").flatMap(e => e.match(/\d+/g)).map(Number) : data[2].split(" ").flatMap(e => e.match(/\d+/g)).map(Number),
                wo: data[3].slice(0, 10),
            }
            e.target.datas.value = ""
            return setInputScan([...inputScan, dataGral])
        }

        else { alert("Not Data") }




    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            lote: e.target.lote.value,
            qty: e.target.qty.value,
            wo: e.target.qty.value,
        }

        e.target.name.value = ""
        e.target.lote.value = ""
        e.target.qty.value = ""
        e.target.wo.value = ""
        setInputScan([...inputScan, data])
    }
    console.log(inputScan)

    return (
        <div className='containerLector'>
            <div className='lectorMain'>
                <div>  Scan Ticket
                    <form onSubmit={handleSubmit}>
                        Scan <input type="text" required name='datas' />


                        <button>Send</button>

                    </form>
                    <button onClick={() => activeForm ? setActiveForm(false) : setActiveForm(true)}>Add Manual</button>
                    {activeForm &&
                        <form onSubmit={handleSubmit2}>
                            Model <input type="text" required name='name' />
                            Lote  <input type="text" required name='lote' />
                            QTY   <input type="text" required name='qty' />
                            WO    <input type="text" required name='wo' />
                            <button>Save</button>
                        </form>
                    }

                </div>

                <div>
                    <table className='tableLector' >
                        <tr>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Lote</th>
                            <th>QTY</th>
                            <th>Wo/Po</th>
                            {/*   <th>PO</th> */}

                        </tr>
                        {
                            inputScan && inputScan.map(e =>
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.description}</td>
                                    <td>{e.lote}</td>
                                    <td>{e.qty}</td>
                                    <td>{e.wo}</td>


                                </tr>)
                        }

                    </table>
                </div>

            </div>

        </div>
    )
}

export default LectorMain