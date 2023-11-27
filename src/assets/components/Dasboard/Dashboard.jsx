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



    const { changeColor } = useContext(AppContext);
    const [frameData, setFrameData] = useState([])
    const [hiddenDash, setHiddenDash] = useState(false)

    const addList =
        [
            { Mode: "Admin", SubMode: "Ⓜ", page: <AddLink /> },
            { Mode: "Capture Hours", SubMode: "⌚", page: <CaptureHores /> },
            { Mode: "Scanner ", SubMode: "🖨", page: <LectorMain /> },
            { Mode: "Label", SubMode: "📝", page: <EtiquetasPrint /> },
            { Mode: "Json to Excel", SubMode: "🔁", page: <ConverterJson /> },
        ]
  

    const handleClick = (parameter) => {
        const data = addList.filter(e => (e.Mode == parameter))
        setFrameData(data)

    };
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className={`containerDash ${hiddenDash ? "showSidebar" : "hideSidebar"}`} style={changeColor ? { background: 'black' } : {}} >

            <div className='posi'>

                <p> Dash</p>
                {
                    addList?.map((e) =>
                        <div  onMouseEnter={() => setIsHovering(true)} 
                        onMouseLeave={() => setIsHovering(false)} className={`${hiddenDash ? "" : "icona"}`} onClick={() => handleClick(e?.Mode)}>{hiddenDash ? e?.Mode : e?.SubMode}</div>
                    )
                }
                {/*  <i onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)} className='icono_dash'>📦</i> */}
            </div>



            <div className='div2'>
                <div onClick={() => hiddenDash ? setHiddenDash(false) : setHiddenDash(true)}>📩</div>
                { frameData?.map(e => e.page) }
            </div>
            {isHovering && (
        <div>
    
        </div>
      )}
        </div>
    );
};

export default Dashboard;
