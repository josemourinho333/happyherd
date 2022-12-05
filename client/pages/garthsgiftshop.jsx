import React from 'react';
import Hero from '../components/hero';
import Card from '../components/card';

const GarthsGiftShop = ({items}) => {

  // clothing
  const clothingCards = items?.filter((item) => 
    item._embedded["wp:term"][0][0].name === "clothing"
    &&
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

  // accessories
  const accessoriesCards = items?.filter((item) => 
    item._embedded["wp:term"][0][0].name === "accessories"
    &&
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

  // bags
  const bagsCards = items?.filter((item) => 
    item._embedded["wp:term"][0][0].name === "bags"
    &&
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

  // print
  const printCards = items?.filter((item) => 
    item._embedded["wp:term"][0][0].name === "print"
    &&
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
  })

  return (
    <section className="flex flex-col">
      <Hero title="Garth's Gift Shop" bg="bg-zinc-100">
        Our Happy Herd items make great gifts. All funds from gift shop sales go to support the farm.
      </Hero>
      <div className="min-h-screen bg-zinc-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">Clothing</h1>
          <p className="text-xl text-gray-500 mt-2">Come Rock our clothes.</p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true} item={true}/>
          {clothingCards.reverse()}
        </div>
      </div>
      <div className="min-h-screen bg-zinc-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">Accessories</h1>
          <p className="text-xl text-gray-500 mt-2">Support our farm and accessorize your life.</p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true} item={true}/>
          {accessoriesCards.reverse()}
        </div>
      </div>
      <div className="min-h-screen bg-zinc-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">Bags</h1>
          <p className="text-xl text-gray-500 mt-2">Go green and help support our residents.</p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true} item={true}/>
          {bagsCards}
        </div>
      </div>
      <div className="min-h-screen bg-zinc-100 flex flex-col justify-center">
        <div className="w-4/5 sm:w-2/4 self-center">
          <h1 className="text-5xl font-bold">Print</h1>
          <p className="text-xl text-gray-500 mt-2">Decorate your living.</p>
        </div>
        <div className="carousel carousel-center max-w-screen space-x-4 rounded-box bg-inherit p-10">
          <Card base={true} item={true}/>
          {printCards}
        </div>
      </div>
    </section>
  )
}

export default GarthsGiftShop;