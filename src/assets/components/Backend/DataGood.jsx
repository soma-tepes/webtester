import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const DataGood = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "Access-Control-Allow-Origin": "http://localhost:5173" // Reemplaza con la URL de tu frontend
      }
    });

    socket.on('actualizarDatos', (nuevosDatos) => {
      console.log('Datos actualizados:', nuevosDatos);
      setDatos(nuevosDatos);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <div>DataGood</div>
      <div>Datos del servidor: {JSON.stringify(datos)}</div>
    </div>
  );
}

export default DataGood;
