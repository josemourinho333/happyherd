import React from 'react';
import Hero from '../components/hero';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Card from '../components/card';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const GarthsGiftShop = () => {
  const { data, error } = useSWR(
    `
      {
        items {
          nodes {
            featuredImage {
              node {
                sourceUrl(size: LARGE)
              }
            }
            title(format: RENDERED)
            slug
            content(format: RENDERED)
            availability {
              nodes {
                name
              }
            }
            colors {
              nodes {
                name
              }
            }
            sizes {
              nodes {
                name
              }
            }
            prices {
              nodes {
                name
              }
            }
            id
          }
        }
      }
    `, fetcher
  );

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const itemCards = data.items.nodes.map((item) => {

    let colorOptions;
    const colors = item.colors.nodes;
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
            <div className={`${displayColor} rounded-full w-3`}>
              <span className="text-xs"></span>
            </div>
          </div>
        )
      })
    } else {
      colorOptions = <></>;
    }

    return (
        <div key={item.id} className="flex flex-col basis-1/4 cursor-pointer">
          <a href={`/garthsgiftshop/${item.title}`}>
            <div className="product-img">
              <img src={item.featuredImage?.node.sourceUrl} alt={item.slug} className=" h-[400px] w-full object-cover"/>
            </div>
            <div className="flex flex-col gap-y-2 my-3">
              <h2 className="text-md hover:font-semibold">{item.title}</h2>
              <p className="font-bold text-xl">${item.prices.nodes[0].name}</p>
              <div className="flex gap-1">
                {colorOptions}
              </div>
            </div>
          </a>
        </div>
    )
  })

  return (
    <section className="flex flex-col items-center">
      <Hero title="Garth's Gift Shop">
        Our Happy Herd items make great gifts. All funds from gift shop sales go to support the farm.
      </Hero>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        {itemCards}
      </div>
    </section>
  )
}

export default GarthsGiftShop;