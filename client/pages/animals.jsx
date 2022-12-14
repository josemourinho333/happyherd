import React from 'react';
import Card from '../components/card';
import axios from '../components/Axios';
import HeroCard from '../components/HeroCard';

const animals = ({allAnimals}) => {

  const animalCards = allAnimals.filter((animal) => animal._embedded["wp:term"][0][0].name === "alive").map((animal) => {
    return (
      <Card 
        key={animal.id}
        id={animal.id}
        title={animal.title.raw}
        content={animal.content.raw}
        img={animal._embedded["wp:featuredmedia"][0].source_url}
        category={animal._embedded["wp:term"][1][0].name}
        dead={false}
      />
    )
  });

  return (
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-primary-content">
      <HeroCard 
        title="Meet Our Residents" 
        cta="Donate" 
        path="/donate"
        defCol=""
        defRow=""
        smCol=""
        smRow=""
        mdCol=""
        mdRow=""
        lgCol=""
        lgRow="lg:row-start-1 lg:row-end-3"
        xlCol=""
        xlRow=""
      >
        With the freedom to roam and taken care of with the help of the founders and volunteers, our family is very happy.
      </HeroCard>
      {animalCards}
    </section>
  )
};

export default animals;