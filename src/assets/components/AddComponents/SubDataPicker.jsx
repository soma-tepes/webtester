import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import '../../Styles/CaptureHours.css';

const SubDataPicker = () => {
  const [time, setTime] = useState('00:00');
  const [time2, setTime2] = useState('00:00');
  const [input, setinput] = useState()

  let rangeTime = (21 / 24) * 100;



  const getTimeDifference = () => {
    const startTime = moment(time, 'HH:mm');
    const endTime = moment(time2, 'HH:mm');
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();
    return hours * rangeTime / 100
    ;
  };

  const dataFinal = getTimeDifference() * input
  return (
    <div className='datapicker'>
      <div className='range'>
        <h3>-- CaptureHores -- </h3>
        <p>{`Product Time: ${rangeTime}%`}</p>
        <p>{`Time Range: ${getTimeDifference().toFixed(2)} hours`}</p>
      </div>

      <div className='datetime'>
        <TimePicker className="ran"
          format="HH:mm"
          value={time}
          onChange={setTime}
        />
        
        <TimePicker
          format="HH:mm"
          value={time2}
          onChange={setTime2}
        />
      </div>

      <div>
        <span>Capture Employe!</span>
        <input type="number"  value={input} onChange={e=>setinput(e.target.value)}/>
      </div>
      {}
      Time data capturate {input && dataFinal.toFixed(2)}
    </div>
  )
}

export default SubDataPicker;