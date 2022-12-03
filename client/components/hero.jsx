import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const Hero = ({title, children, cta, link, path, bg}) => {
  return (
    <div className={`hero h-[60vh] ${bg ? bg : 'bg-base-100'}`}>
      <div className="hero-content text-center">
        <div className={`max-w-2xl ${bg ? "text-neutral-content" : "text-black"}`}>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{children}</p>
          {
            !cta
              ? <></>
              : <div className="flex flex-col justify-center items-center text-lg md:flex-row ">
                  <a to={path} className="text-[#2997ff] flex items-center m-2">{cta}<HiChevronRight className="pt-0.5 w-5 h-5"/></a>
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Hero;