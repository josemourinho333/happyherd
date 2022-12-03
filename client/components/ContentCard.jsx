import React from 'react';
import { HiChevronRight } from "react-icons/hi";

const ContentCard = ({base, bg, title, content, textColor, index}) => {
  return (
    <div className="carousel-item cursor-pointer">
      <div className={`card h-[30rem] ${base ? "bg-transparent shadow-none w-0 md:w-[4rem] lg:w-[12rem] xl:w-[20rem] 2xl:w-[28rem]" : `${bg} shadow-lg w-[22rem] md:w-[26rem] lg:w-[30rem]`} rounded-2xl`}>
        {
          base
            ? <div className="card-body"></div>
            : <>
                <div className={`card-body ${bg === "bg-base-100" ? "" : 'text-neutral-content'} gap-y-5`}>
                  {/* <h3 className={`uppercase font-bold text-sm ${bg === "bg-base-100" ? 'text-gray-500' : ''}`}>{title.raw}</h3> */}
                  <h2 className="card-title font-black text-6xl">{title.raw}</h2>
                  <p className={`${index === 2 ? "text-xl" : "text-3xl font-semibold"}`}>{content.raw}</p>
                  {
                    index === 2
                      ? <></>
                      : <a to="/projects" className={`${textColor ? textColor : "text-[#2997ff]"} flex items-center m-2 text-2xl font-bold`}>{title.raw}<HiChevronRight className="pt-0.5 w-8 h-8"/></a>
                  }
                </div>
              </>
        }
      </div>
    </div>
  )
}

export default ContentCard