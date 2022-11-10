import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Tour = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-center">
      <Calendar onChange={onChange} value={value} minDate={new Date()}/>
    </div>
  )
}

export default Tour;