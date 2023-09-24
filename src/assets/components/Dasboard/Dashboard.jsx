import React, { useState } from 'react';
import '../../Styles/Dashboard.css';
import CaptureHores from '../AddComponents/CaptureHores';
import LectorMain from '../QRLector/LectorMain';
import AddLink from '../AddComponents/AddLink';

const Dashboard = () => {

    const [frameData, setFrameData] = useState({
        frameOne: false,
        frameTwo: false,
        frame3: false
    })

    const { frameOne, frameTwo, frame3 } = frameData

    const [hiddenDash, setHiddenDash] = useState(true)

   const updatingDatas = (datas)=>{
    setFrameData(e=>({...e,...datas}))
   }

    const handleClick = (parameter) => {
          updatingDatas({
            frameOne: parameter === 'capture',
            frameTwo: parameter === 'admin',
            frame3: parameter === 'lector'
          })
    };


    return (
        <div className={`containerDash ${hiddenDash ? "showSidebar" : "hideSidebar"}`} >

            <div className='posi'>
           <p> Dash</p>    
                {
                    hiddenDash &&
                    <>
                        <div onClick={() => handleClick('admin')}>Admin</div>
                        <div onClick={() => handleClick('capture')}>Capture Hours</div>
                        <div onClick={() => handleClick('lector')} >Lector QR</div>
                        <div></div>
                    </>

                }

               {/*  <i onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)} className='icono_dash'>📦</i> */}
            </div>



            <div className='div2'>
             <div onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)}>📩</div>
                {frameOne && (
                   <AddLink/>
                )}
                {frameTwo && (
                    (<CaptureHores />)
                    
                )}

                {
                    frame3 && <LectorMain />
                }
            </div>
        </div>
    );
};

export default Dashboard;
