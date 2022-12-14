import React from 'react'

const VolunteerCard = ({bg, title, children}) => {
  return (
    <div className={`shadow h-[500px] rounded-lg ${bg} text-primary-content px-5 py-16 flex flex-col justify-start text-left gap-y-3
    xl:col-span-2
    `}>
      <h2 className="text-3xl font-bold uppercase tracking-widest">{title}</h2>
      <div className="flex flex-col gap-y-1 justify-start items-start">
        {children}
      </div>
    </div>
  )
}

export default VolunteerCard;