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
        dead={false}
      />
    )
  });

  return (
    <section className="flex flex-col">
      <Hero title="In Loving Memory" cta="Donate" path="/donate">
        Gone but never forgotten. You can help us these animals and enrich their lives.
      </Hero>
      <div className="min-h-screen bg-base-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">All animals</h1>
          <p className="text-xl text-gray-500 mt-2">Come meet our residents. <span className="inline-block"><a to="/projects" className={`text-[#2997ff] flex items-center m-2`}>Book a tour<HiChevronRight className="pt-0.5 w-5 h-5"/></a></span></p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true}/>
          {animalCards}
        </div>
      </div>
    </section>
  )
};

export async function getStaticProps() {
  try {
    const response = await axios.get('/animals', { 
      params: {
        context: "edit", 
        _embed: true,
        per_page: 100
      }
    });

    const animals = await response.data;

    return {
      props: {
        animals
      }
    }
  } catch (error) {
    console.log('error', error);
  }
};

export default InLovingMemory;