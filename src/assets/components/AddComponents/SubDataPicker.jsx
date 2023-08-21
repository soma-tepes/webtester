import React, { useState } from 'react'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import '../../Styles/CaptureHours.css'


const SubDataPicker = () => {
    const [time, setTime] = useState('00:00');
    const [time2, setTime2] = useState('00:00');
  return (

    <div>
            <div>
            <h3>CaptureHores</h3>
            </div>
          
            <div className='datapicker'>
                <TimePicker
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
                Capture Employeeds!
                <input type="number" />
            </div>
            </div>
  )
}

export default SubDataPicker