import React from 'react'
import { useState } from 'react';
import QrReader from 'react-qr-scanner';
const LectorQRComponent = () => {

  const [inputScan, setInputScan] = useState([]);

  const handleError = (error) => {
    console.error(error);
  };
  
  const handleScan = (data) => {
    if (data) {
      // Aquí puedes procesar el dato escaneado, por ejemplo:
      setInputScan([...inputScan, { qrData: data }]);
    }
  };

  return (
    <>
     <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%',border:'1px solid black' }}
          facingMode="environment"
        />
        <div>{inputScan && inputScan.map}</div>
    </>
   
        
  )
}

export default LectorQRComponent