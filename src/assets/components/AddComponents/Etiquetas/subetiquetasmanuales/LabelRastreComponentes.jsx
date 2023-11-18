import React, { useEffect, useState } from 'react'
import "../../../../Styles/LabelRastreComponents.css"
import QRCode from 'react-qr-code';

const LabelRastreComponentes = ({ datosE }) => {


  const [QRCodes, setQRCode] = useState([])


  useEffect(() => {
    if (Object.keys(datosE ?? {})) {
      setQRCode([datosE?.[35], datosE?.[36],datosE?.[37]]
        .join(",").replace(/,/g, '')
      );
    }
  }, [datosE]);


  return (
    <>

      {
        <svg width="101.5mm" height="63.5mm" viewBox="0 0 101.5 63.5">
          <g>



            <text className='lcOne' x="5%" y="12%" > Article Label</text>



            <text className='icTwo' x="5%" y="20%" >Desc. </text>
            <text className='icTwo' x="25%" y="20%" >{datosE?.[1]} </text>

            <text className='icTwo' x="5%" y="31%" >Item No.</text>
            <text className='icTwo' x="25%" y="31%" >{datosE?.[0]}</text>


            <text className='icTwo' x="5%" y="38%" >Dwg No.</text>
            <text className='icTwo' x="25%" y="38%" >{datosE?.[4]}</text>


            <text className='icTwo' x="5%" y="45%" >Qty.</text>
            <text className='icTwo' x="29%" y="45%" >{datosE?.[8]}</text>

            <text className='icTwo' x="5%" y="52%" >Lot No.</text>
            <text className='icTwoo' x="29%" y="52%" >{datosE?.[16]}</text>

            <text className='icTwo' x="5%" y="59%" >W/O No.</text>
            <text className='icTwo' x="29%" y="59%" >{datosE?.[15]}</text>



            <text className='icTr' x="4%" y="95%" >JAE Oregon,Inc</text>

            <text className='icTr' x="34%" y="95%" >Made In </text>
            <text className='icTr' x="47%" y="95%" >{datosE?.[49]} </text>

            <text className='icTr' x="67%" y="95%" >{datosE?.[48]}</text>
            <QRCode x={"72%"} y={"40%"} size={12} value={QRCodes} />



          </g>
        </svg>
      }
    </>
  )
}

export default LabelRastreComponentes