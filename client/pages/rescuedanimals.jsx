import React, { useState, useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Card from '../components/card';
import { GiCow, GiGoat, GiSheep, GiSittingDog, GiCat, GiPig } from 'react-icons/gi';
import Hero from '../components/hero';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const rescuedanimals = () => {
  const [animals, setAnimals] = useState(null);
  const [currentSelect, setCurrentSelect] = useState('');
  const { data, error } = useSWR(
  `
  {
    animals(first: 100, where: {categoryName: "alive"}) {
      edges {
        node {
          id
          title(format: RENDERED)
          content(format: RENDERED)
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          tags {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
  `, fetcher
  );

  useEffect(() => {
    if (!data) return;

    if (data) {
      setAnimals(data.animals.edges);
    }
  }, [data]);

  const cards = useMemo(() => {
    const animalCards = animals?.filter(
      (animal) => {
          if (!currentSelect) return animal;

          const type = animal.node.tags.nodes[0].slug;

          if (currentSelect === 'goats') {
            return type === currentSelect || type === 'mini-goats'
          };

          return type === currentSelect;
        }
      ).map((animal) => {
        return (
          <Card 
            key={animal.node.id}
            name={animal.node.title}
            bio={animal.node.content}
            img={animal.node.featuredImage.node.sourceUrl}
            slug={animal.node.slug}
            tags={animal.node.tags.nodes[0].name}
            tagSlug={animal.node.tags.nodes[0].slug}
          />
        )
    });

    return animalCards;

  }, [animals, currentSelect]);

  const typeFilter = (type) => {
    if (currentSelect === type) {
      setCurrentSelect('');
    } else {
      setCurrentSelect(type);
    }
  };

  const btnStyle = 'flex flex-col items-center px-5';

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
   
  return (
    <section className="flex flex-col items-center">
      <Hero title="Meet Our Residents" cta="donate">
        Here is our most up to date directory of family members. The following friends are current residents and call the Happy Herd Farm Sanctuary their home. With the freedom to roam and taken care of with the assistance of the founders and volunteers, our family is very happy.
      </Hero>
      {/* <h1 className="text-primary text-5xl font-semibold">Meet our residents</h1>
      <p className="m-[1rem] text-center w-[70%]">Here is our most up to date directory of family members. The following friends are current residents and call the Happy Herd Farm Sanctuary their home. With the freedom to roam and taken care of with the assistance of the founders and volunteers, our family is very happy.</p> */}
      <div className="my-10 flex text-neutral">
        <button 
          onClick={() => typeFilter('cows')}
          className={currentSelect === 'cows' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiCow size={"4em"} className="my-2"/>
          Cows
        </button>
        <button 
          onClick={() => typeFilter('pigs')}
          className={currentSelect === 'pigs' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiPig size={"4em"} className="my-2"/>
          Pigs
        </button>
        <button 
          onClick={() => typeFilter('goats')}        
          className={currentSelect === 'goats' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiGoat size={"4em"} className="my-2"/>
          Goats
        </button>
        <button 
          onClick={() => typeFilter('sheep')}
          className={currentSelect === 'sheep' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiSheep size={"4em"} className="my-2"/>
          Sheep
        </button>
        <button 
          onClick={() => typeFilter('cats')}
          className={currentSelect === 'cats' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiCat size={"4em"} className="my-2"/>
          Cats
        </button>
        <button 
          onClick={() => typeFilter('dogs')}
          className={currentSelect === 'dogs' ? `${btnStyle} text-primary` : `${btnStyle}`}>
          <GiSittingDog size={"4em"} className="my-2"/>
          Dogs
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-[2rem]">
        {cards}
      </div>
    </section>
  )
}

export default rescuedanimals;