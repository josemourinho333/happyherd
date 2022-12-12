import React from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import axios from '../components/Axios';
import { HiChevronRight } from "react-icons/hi";

const animals = ({allAnimals}) => {
  // this needs to be updated so they are dynamic eventually so that one someone adds a new category of animals the code will dynamically render a row of carousel items of the new category.
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

  const cowCards = allAnimals
    .filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && animal._embedded["wp:term"][1][0].name === "Cows"
    ).map((animal) => {
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

  const pigCards = allAnimals
    .filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && animal._embedded["wp:term"][1][0].name === "Pigs"
    ).map((animal) => {
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

  const goatCards = allAnimals
    .filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && (
        animal._embedded["wp:term"][1][0].name === "Goats"
        || animal._embedded["wp:term"][1][0].name === "Mini Goats")
    ).map((animal) => {
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
  
  const lambSheepCards = allAnimals
    .filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && (
        animal._embedded["wp:term"][1][0].name === "Lambs"
        || animal._embedded["wp:term"][1][0].name === "Sheep")
    ).map((animal) => {
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

  const etcCards = allAnimals
    .filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && animal._embedded["wp:term"][1][0].name === "Cats"
    ).map((animal) => {
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
    <section className="flex flex-col relative gap-y-5">
      <Hero title="Meet Our Residents" cta="Donate" path="/donate" bg="bg-primary">
        With the freedom to roam and taken care of with the help of the founders and volunteers, our family is very happy.
      </Hero>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">All animals</h1>
          <p className="text-xl text-gray-500 mt-2">Come meet our residents. <span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Book a tour<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {animalCards}
        </div>
      </div>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-2/4 self-center">
          <h1 className="text-5xl font-bold">Cows</h1>
          <p className="text-xl text-gray-500 mt-2">Help cows like Sparky. <span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Donate<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {cowCards}
        </div>
      </div>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-2/4 self-center">
          <h1 className="text-5xl font-bold">Pigs</h1>
          <p className="text-xl text-gray-500 mt-2">Join our pigs in a mud bath.<span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Book a tour<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {pigCards}
        </div>
      </div>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-2/4 self-center">
          <h1 className="text-5xl font-bold">Goats & Mini Goats</h1>
          <p className="text-xl  text-gray-500 mt-2">Sponsor goats like Rusty.<span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Donate<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {goatCards}
        </div>
      </div>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-2/4 self-center">
          <h1 className="text-5xl font-bold">Lambs & Sheep</h1>
          <p className="text-xl text-gray-500 mt-2">Come say hi to our residents.<span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Book a tour<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {lambSheepCards}
        </div>
      </div>
      <div className="min-h-[80vh] bg-base-100 flex flex-col justify-center">
        <div className="w-2/4 self-center">
          <h1 className="text-5xl font-bold">Farm Friends</h1>
          <p className="text-xl text-gray-500 mt-2">Expect to see these guys roaming around the farm.</p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {etcCards}
        </div>
      </div>
    </section>
  )
};

export default animals;