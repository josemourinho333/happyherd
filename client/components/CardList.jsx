import React, { useEffect } from 'react';
import Card from './card';

const CardList = ({animals, type}) => {

  let animalCards;
  // this needs to be updated so they are dynamic eventually so that one someone adds a new category of animals the code will dynamically render a row of carousel items of the new category.
  if (type === 'all') {
    animalCards = animals.filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
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
  } else if (type.split(',').length === 1) {
    animalCards = animals.filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && animal._embedded["wp:term"][1][0].name === type
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
  } else {
    const typeA = type.split(',')[0];
    const typeB = type.split(',')[1];

    animalCards = animals.filter((animal) => 
      animal._embedded["wp:term"][0][0].name === "alive"
      && (animal._embedded["wp:term"][1][0].name === typeA
      || animal._embedded["wp:term"][1][0].name === typeB)
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
  };

  // click handlers for buttons
  // const scrollRight = () => {
  //   console.log('scrolling right');
  // };

  // const scrollLeft = () => {
  //   console.log('scroll left');
  // }

  useEffect(() => {
    const scrollRight = () => {
      console.log('windowx', window.scrollY);
      window.scroll(0, window.scrollX - 50);
    };

    const scrollLeft = () => {

    };

    document.getElementById('right').addEventListener('click', scrollRight);


    return () => {
      document.getElementById('left').removeEventListener('click', scrollLeft);
      document.getElementById('right').removeEventListener('click', scrollRight);
    }
  }, [])

  return (
    <div className="relative flex flex-col">
      <div className="flex justify-between absolute transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
        <button id="left" className="bg-green-500 p-5 rounded-full">Hello</button>
        <button id="right" className="bg-blue-500 p-5 rounded-full">Hello</button>
      </div>
        
      <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10 relative">
        <Card base={true}/>
        {animalCards}
      </div>
    </div>
  )
}

export default CardList;