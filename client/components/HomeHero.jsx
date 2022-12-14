import React from 'react';
import Link from 'next/link';

const HomeHero = ({ heroItems }) => {

  const heroSections = heroItems.reverse().map((hero, index) => {
    const info = hero.content.raw.split('|')[0];
    const cta = hero.content.raw.split('|')[1];
    const link = hero.content.raw.split('|')[2];
    const extra = hero.content.raw.split('|')[3] || ''; 

    return (
      <div key={hero.id} className="hero min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[85vh] rounded-2xl" style={{ backgroundImage: `url(${hero._embedded["wp:featuredmedia"][0].source_url})` }}>
        <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-2xl">
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold">{hero.title.raw}</h1>
            <p className="mb-5 text-lg sm:text-2xl">{info}</p>
            <Link href={link}><button className="btn btn-primary">{cta}</button></Link>
            <p className="italic font-light">{extra ? extra : ''}</p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="flex p-5 gap-5 flex-col lg:flex-row">
      {heroSections}
    </div>
  )
};

export default HomeHero;