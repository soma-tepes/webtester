import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import '../../Styles/CaptureHours.css';

const SubDataPicker = () => {
  const [time, setTime] = useState('00:00');
  const [time2, setTime2] = useState('00:00');
  const [input, setinput] = useState(0)

  let rangeTime = (21 / 24) * 100;



  const getTimeDifference = () => {
    const startTime = moment(time, 'HH:mm');
    let endTime = moment(time2, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime = endTime.add(1, 'day');
    }

    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();

    if (hours > 12) {
      rangeTime = "No exceder 12 Hours"
    }

    return hours * rangeTime / 100;
  };

  const dataFinal = getTimeDifference() * input

  
  return (
    <div className='datapicker'>
      <div className='range'>
        <h3 className='tittleCaptureHors'>-- Hours Data -- </h3>

        <p className={rangeTime == "No exceder 12 Hours" ? "exceded" : ""}> {`Efective Time: [${rangeTime}%]`}</p>
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

      <div className='spanInput'>
        <span>Capture Employe!</span>
        <input className='inputNumber' min="0" type="number" value={input} onChange={e => setinput(e.target.value)} />
      </div>

      <span>Time data capturate</span>   {input && input < 0 ? "No se aceptan datos negativos" : dataFinal.toFixed(2) == 'NaN' ? "Not Processable" :
        <span className='captureResult'> {dataFinal.toFixed(2)}</span>
      }
    </div>
  )
}

export default SubDataPicker;