import React, { useState } from 'react';
import '../../Styles/Dashboard.css';
import CaptureHores from '../AddComponents/CaptureHores';

const Dashboard = () => {
    const [frameOne, setFrameOne] = useState(false);
    const [frameTwo, setFrameTwo] = useState(false);

    const [hiddenDash, setHiddenDash] = useState(true)

    const handleClick = (parameter) => {
        if (parameter == 'admin') {
            setFrameTwo(true);
            setFrameOne(false);
        }
        if (parameter == 'capture') {
            setFrameTwo(false);
            setFrameOne(true);
        }
    };


    return (
        <div className= {`containerDash ${hiddenDash ? "showSidebar" : "hideSidebar"}`} >

            <div className='posi'>
                Dash
                {
                   hiddenDash &&
                    <>
                        <div onClick={() => handleClick('admin')}>Admin</div>
                        <div onClick={() => handleClick('capture')}>Capture Hours</div>
                        <div>Lector QR</div>
                    </>

                }

                <i onClick={()=>hiddenDash ?setHiddenDash(false): setHiddenDash(true)} className='icono_dash'>📦</i>
            </div>



            <div className='div2'>
                Page
                {frameOne && (
                    <iframe src="http://localhost:5173/capturehours" height="100%" width="100%"></iframe>
                )}
                {frameTwo && (
                   <CaptureHores/>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
