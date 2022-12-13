import React from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import axios from '../components/Axios';
import { HiChevronRight } from "react-icons/hi";

const InLovingMemory = ({allAnimals}) => {
  
  const animalCards = allAnimals.filter((animal) => 
    animal._embedded["wp:term"][0][0].name === "dead")
  .map((animal) => {
    return (
      <Card 
        key={animal.id}
        id={animal.id}
        title={animal.title.raw}
        content={animal.content.raw}
        img={animal._embedded["wp:featuredmedia"][0].source_url}
        category={animal._embedded["wp:term"][1][0].name}
        dead={true}
      />
    )
  });

  return (
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-primary-content">
      <div className="after:content relative col-span-1 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-zinc-900 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-2 lg:row-span-1 lg:pt-0">
        <div className="absolute inset-0 flex items-start justify-center opacity-20">
          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>
        <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">
          In Loving Memory
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Gone but never forgotten. You can help the animals at our farm and enrich their lives.
          <br/><br/>
          Benefits of this class include relaxation, laughter, increased mood, and truly adorable photos!
        </p>
        <a
          className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          href="/donate"
        >
          Donate
        </a>
      </div>
      {animalCards}
    </section>
  )
};

export default InLovingMemory;