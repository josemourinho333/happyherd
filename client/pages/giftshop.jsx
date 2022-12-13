import React from 'react';
import Hero from '../components/hero';
import Card from '../components/card';

const GarthsGiftShop = ({items}) => {

  // all
  const allCards = items?.filter((item) => 
    item._embedded["wp:term"][1][0].name === "true"
  ).map((item) => {
    let colorOptions;
    const colors = item._embedded["wp:term"][2];
    if (colors.length > 0) {
      colorOptions = colors.map((color, index) => {
        let displayColor;
        switch(color.name) {

          case "Light Blue":
            displayColor = "bg-blue-300";
            break;
          
          case "Pink":
            displayColor = "bg-pink-300";
            break;
          
          case "Blue":
            displayColor = "bg-blue-500";
            break;

          case "Green":
            displayColor = "bg-green-600";
            break;

          case "Grey":
            displayColor = "bg-gray-500";
            break;

          case "Red":
            displayColor = "bg-red-500";
            break;
          
          case "White":
            displayColor = "bg-white border border-black";
            break;

          case "Black":
            displayColor = "bg-black";
            break;

          case "Burgundy":
            displayColor = "bg-rose-900";
            break;

          case "Charcoal":
            displayColor = "bg-zinc-800";
            break;

          case "Navy":
            displayColor = "bg-blue-900";
            break;

          case "Red/Grey":
            displayColor = "bg-gradient-to-r from-red-500 to-gray-500";
            break;

          default:
            displayColor = "bg-slate-700"
        }
        return (
          <div className="avatar placeholder" key={index}>
            <div className={`${displayColor} rounded-full w-4`}>
              <span className="text-xs"></span>
            </div>
          </div>
        )
      })
    } else {
      colorOptions = <></>;
    }

    return (
        <Card 
          item={true}
          title={item.title.raw}
          img={item._embedded["wp:featuredmedia"][0].source_url}
          price={item._embedded["wp:term"][4][0].name}
          colors={colorOptions}
        />
    )
  });

  return (
    <section className="flex flex-col justify-center w-3/4 m-auto">
      <Hero title="Garth's Gift Shop">
        Our Happy Herd items make great gifts. All funds from gift shop sales go to support the farm.
      </Hero>
      <div className="self-center grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-primary-content">
        {allCards.reverse()}
      </div>
    </section>

  )
}

export default GarthsGiftShop;