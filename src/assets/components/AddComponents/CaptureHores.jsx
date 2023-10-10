import React, { useState } from 'react';
import SubDataPicker from './SubDataPicker';
import Intruccion from './Intruccion';
import '../../Styles/Datapicker.css';

const CaptureHores = () => {
  const [menuData, setmenuData] = useState({ A: false, B: false });
  const [rangeTime, setRangeTime] = useState(null);

  const handleMenu = (option) => {
    setmenuData({ A: option === "product", B: option === "molding" });
    setRangeTime((option === "product" ? (21 / 24)  : (24 / 24))  * 100);
  };

  return (
    <div className='captureIndex'>
      <h2 className='captureh2'>Calculadora de Horas Actuales - SAP Data (0.3v)</h2>
      <div className='captureBotton'>
        <button className={menuData.A ? "off" : "on"} onClick={() => handleMenu("product")}>
          {menuData.A ? "Calculator Production" : "Producto Terminado"}
        </button>
        <button className={menuData.B ? "off" : "on"} onClick={() => handleMenu("molding")}>Capture Hrs Molding</button>
        <button>Help Format hrs</button>
      </div>
      <div className='captureHrs'>
        {(menuData.A || menuData.B) && (
          <div className='timePikers'>
            <SubDataPicker rangeTime={rangeTime} />
          </div>
        )}
        {(menuData.A || menuData.B) && (
          <div>
            <Intruccion />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaptureHores

