import React from 'react';
import Card from '../components/card';
import axios from '../components/Axios';
import HeroCard from '../components/HeroCard';

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
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-primary-content">
      <HeroCard 
        title="In Loving Memory" 
        cta="Donate" 
        path="/donate"
        defCol={1}
        defRow={2}
        smCol=""
        smRow=""
        mdCol=""
        mdRow=""
        lgCol="lg:col-start-1 lg:col-end-4"
        lgRow=""
        xlCol="xl:col-start-1 xl:col-end-5"
        xlRow=""
      >
        Gone but never forgotten. You can help the animals at our farm and enrich their lives with your donation.
      </HeroCard>
      {animalCards}
    </section>
  )
};

export default InLovingMemory;