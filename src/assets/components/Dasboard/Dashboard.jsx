import React, { useState } from 'react';
import '../../Styles/Dashboard.css';
import CaptureHores from '../AddComponents/CaptureHores';
import LectorMain from '../QRLector/LectorMain';
import AddLink from '../AddComponents/AddLink';
import EtiquetasPrint from '../EtiquetasPrint';
import ConverterJson from '../ConverterJSON/ConverterJson';
import AppContext from '../../../Context/AppContext';
import { useContext } from 'react';



const Dashboard = () => {


    const [showModal, setShowModal] = useState(false);

    const { changeColor } = useContext(AppContext);
   /*  const handleMouseEnter = () => {
        setShowModal(true);
    }

    const handleMouseLeave = () => {
        setShowModal(false);
    }
 */

const [menuDasboard, setMenuDasboard] = useState(Array(4).fill(null))



    const [frameData, setFrameData] = useState({})

    const { frameOne , frameTwo, frame3, frame4, frame5 } = frameData

    const [hiddenDash, setHiddenDash] = useState(false)

    const updatingDatas = (datas) => {
        setFrameData(e => ({ ...e, ...datas }))
    }

    const handleClick = (parameter) => {
        updatingDatas({
            frameOne: parameter === 'admin',
            frameTwo: parameter === 'capture',
            frame3: parameter === 'lector',
            frame4: parameter === 'hoja',
            frame5: parameter === 'converter'
        })
    };

   
    const dataForm = {};

    const icons = {
      admin: hiddenDash ? "Admin" : "🦓",
      capture: hiddenDash ? "Capture Hours" : "⌚",
      lector: hiddenDash ? "Lector QR" : "🚧",
      hoja: hiddenDash ? "Printer" : "📝",
      converter: hiddenDash ? "Converter" : "🔁",
    };
    
    Object.keys(icons).forEach((key) => {
      dataForm[key] = (
        <div className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick(key)}>
          {icons[key]}
        </div>
      );
    });

    return (
        <div className={`containerDash ${hiddenDash ? "showSidebar" : "hideSidebar"}`} style={changeColor ? {background: 'black'} :{}} >

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
              
              
                { frameOne ? <AddLink /> : frameTwo ?  <CaptureHores /> : frame3 ? <LectorMain /> :  frame4 ? <EtiquetasPrint /> : frame5 ? <ConverterJson/> :""}
              
              
            </div>

        </div>
    );
};

export default Dashboard;
