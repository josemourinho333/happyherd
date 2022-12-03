import React from 'react';
import CardNew from './CardNew';
import { HiChevronRight } from 'react-icons/hi';

const HomeHero = ({ heroItems }) => {

  const heroSections = heroItems.reverse().map((hero, index) => {
    const info = hero.content.raw.split('/')[0];
    const cta = hero.content.raw.split('/')[1];
    const extra = hero.content.raw.split('/')[2];

    return (
      <div key={hero.id} className={`flex flex-col min-h-screen ${index % 2 === 0 ? "bg-base-100" : "bg-zinc-100/70"} justify-center items-center text-center py-10 px-8 gap-y-5`}>
        <div className="basis-1/2 flex flex-col gap-y-5">
          <h2 className="text-6xl font-semibold">{hero.title.raw}</h2>
          <p className="text-3xl font-light">{info}</p>
          <div className="flex flex-col justify-center items-center text-lg md:flex-row ">
            <a to="/projects" className="text-[#2997ff] flex items-center m-2">{cta}<HiChevronRight className="pt-0.5 w-5 h-5"/></a>
          </div>
        </div>

        <CardNew src={hero._embedded["wp:featuredmedia"][0].source_url}/>
        <p className="text-xs italic">{extra ? extra : ''}</p>

      </div>
    )
  });

  return (
    <>
      {heroSections}
    </>
  )
};

export default HomeHero;