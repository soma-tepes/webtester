import React, { useState } from 'react';
import '../../Styles/Dashboard.css';
import CaptureHores from '../AddComponents/CaptureHores';
import LectorMain from '../QRLector/LectorMain';
import AddLink from '../AddComponents/AddLink';
import EtiquetasPrint from '../EtiquetasPrint';

const Dashboard = () => {


    const [showModal, setShowModal] = useState(false);

    const handleMouseEnter = () => {
        setShowModal(true);
    }

    const handleMouseLeave = () => {
        setShowModal(false);
    }



    const [frameData, setFrameData] = useState({
        frameOne: false,
        frameTwo: false,
        frame3: false,
        frame4:false
    })

    const { frameOne, frameTwo, frame3,frame4 } = frameData

    const [hiddenDash, setHiddenDash] = useState(false)

    const updatingDatas = (datas) => {
        setFrameData(e => ({ ...e, ...datas }))
    }

    const handleClick = (parameter) => {
        updatingDatas({
            frameOne: parameter === 'admin',
            frameTwo: parameter === 'capture',
            frame3: parameter === 'lector',
            frame4: parameter === 'hoja'
        })
    };

    
    const dataForm = {
        a: <div className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick('admin')}>{`${hiddenDash ? "Admin" : "🦓"}`}  </div>,
        b: <div className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick('capture')}>{`${hiddenDash ? "Capture Hours" : "⌚"}`}</div>,
        c: <div className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick('lector')} >{`${hiddenDash ? "Lector QR" : "🚧"}`} </div>,
        d: <div className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick('hoja')} >{`${hiddenDash ? "Printer" : "📝"}`} </div>,
    }

    return (
        <div className={`containerDash ${hiddenDash ? "showSidebar" : "hideSidebar"}`} >

            <div className='posi'>

                <p> Dash</p>


                {<>
                {
                            Object.values(dataForm).map((element, index) => (
                                <div key={index}>
                                    {element}
                                </div>
                            ))
                        }
                         </>

                }
                {showModal && (
                    <div className="modal">
                        <p>Contenido del modal</p>
                    </div>
                )}
                {/*  <i onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)} className='icono_dash'>📦</i> */}
            </div>



            <div className='div2'>
                <div onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)}>📩</div>
              
              
                { frameOne ? <AddLink /> : frameTwo ?  <CaptureHores /> : frame3 ? <LectorMain /> :  frame4 ? <EtiquetasPrint /> : "" }
              
              
            </div>

        </div>
    );
};

export default Dashboard;
