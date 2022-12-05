import React from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import axios from '../components/Axios';
import { HiChevronRight } from "react-icons/hi";

const InLovingMemory = ({animals}) => {
  
  const animalCards = animals.filter((animal) => animal._embedded["wp:term"][0][0].name === "dead").map((animal) => {
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
    <section className="flex flex-col">
      <Hero title="In Loving Memory" cta="Donate" path="/donate">
        Gone but never forgotten. You can help the animals at our farm and enrich their lives.
      </Hero>
      <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
        <Card base={true}/>
        {animalCards}
      </div>
    </section>
  )
};

export default InLovingMemory;