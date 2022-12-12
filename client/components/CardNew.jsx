import React from 'react';

const CardNew = ({src}) => {
  return (
    <div className="w-full h-[300px] md:h-[600px] shadow-lg rounded-2xl">
      <img src={src} alt="img" className="w-full rounded-2xl h-full object-cover object-center"/>
    </div>
  )
}

export default CardNew;