import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const Hero = ({title, children, cta, path, bg}) => {
  return (
    <div className={`min-h-[50vh] ${bg ? `${bg} text-primary-content` : "bg-base-100 text-primary"} flex flex-col justify-center`}>
      <div className="w-4/5 sm:w-2/4 self-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-3xl text-zinc-500 mt-5">{children}</p>
        {
          cta
          ? <a to={path} className={`text-[#2997ff] flex items-center mt-5 text-xl`}>{cta}<HiChevronRight className="pt-0.5 w-5 h-5"/></a>
          : <></>
        }
      </div>
    </div>
  )
}

export default Hero;