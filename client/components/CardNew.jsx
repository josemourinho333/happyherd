import React from 'react';

const CardNew = ({src}) => {
  return (
    <div className="w-4/5 lg:w-3/5 h-[60vh]">
      <img src={src} alt="img" className="w-full rounded-xl h-full object-cover object-center"/>
    </div>
  )
}

export default CardNew;