import React from 'react'
import '../../Styles/Dashboard.css'
import { useState } from 'react'
const Dashboard = () => {

    const [frameOne, setFrameOne] = useState(false)
    const [frameTwo, setFrameTwo] = useState(false)
    return (
        <div className='containerDash'>

            <div>Dash
                <div onClick={() => frameOne ? setFrameOne(false) : setFrameOne(true)}>Admin</div>
                <div onClick={() => frameTwo ? setFrameTwo(false) : setFrameTwo(true)}>Capture Hours</div>
                <div>Lector QR</div>

            </div>
            <div>

                Page

                {frameTwo ? frameOne = false : frameOne ?
                    <iframe src="http://localhost:5173/capturehours" height="100%" width="100%"></iframe>
                    : null
                }
                {frameOne? frameTwo = false: frameTwo ?
                    <iframe src="http://localhost:5173/lector" height="100%" width="100%"></iframe>
                              :null
                }
            </div>


        </div>
    )
}

export default Dashboard