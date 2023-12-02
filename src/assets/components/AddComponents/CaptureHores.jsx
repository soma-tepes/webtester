import React, { useState } from 'react';
import SubDataPicker from './SubDataPicker';
import Intruccion from './Intruccion';
import '../../Styles/Datapicker.css';
import { getTimeData } from '../../js/gettimedata';
import { useCustomState } from '../../js/usestates';



const CaptureHores = () => {

  const { menuData, setmenuData : getData, rangeTime, setRangeTime : timeRange, isHovering, setIsHovering } = useCustomState();

  const handleMenu = (option) => {
    getData({ A: option === "product", B: option === "molding" });
    timeRange((option === "product" ? (21 / 24) : (24 / 24)) * 100);
  };
  const time = getTimeData()

  return (
    <div className='captureIndex'>
      <h2 className='captureh2'>Calculadora de Horas Actuales - SAP Data (0.3v)</h2>
      <div className='captureBotton'>
        <button className={menuData.A ? "off" : "on"} onClick={() => handleMenu("product")}>
          {menuData.A ? "Calculator Production" : "Producto Terminado"}
        </button>

        <button className={menuData.B ? "off" : "on"} onClick={() => handleMenu("molding")}>Capture Hrs Molding</button>

        <button className='btnHoursInfo'
          onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}  >

          Help Format hrs
          {isHovering &&

            <table className='otherDash2'>
              <tr>
                <th>Formato 24 horas</th>
                <th>Formato 12 horas</th>
              </tr>
              {time?.map(e => (
                <>

                  <tr>
                    <td>{e?.a}</td>
                    <td>{e?.b == "0 am" ? "12 am" : e?.b == "0 pm" ? "12 pm" : e?.b}</td>
                  </tr>
                </>
              ))}

            </table>
          }
        </button>
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

