import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { request } from 'graphql-request';
import parse from 'html-react-parser';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const GarthsGiftShop = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { data, error } = useSWR(
    `
    {
      items(where: {title: "${pid}"}) {
        nodes {
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
          content(format: RENDERED)
          prices {
            nodes {
              name
            }
          }
          sizes {
            nodes {
              name
            }
          }
          title(format: RENDERED)
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
    `, fetcher
  );
  
  const [ selectedProduct, setSelectedProduct ] = useState({
    color: '',
    size: ''
  })

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // click handler for colors and sizes
  const selectOptions = (option, selected) => {
    console.log('you selected', option, selected);
    if (option === "color") {
      setSelectedProduct(prev => ({
        ...prev,
        color: selected
      }))
    };

    if (option === "size") {
      setSelectedProduct(prev => ({
        ...prev,
        size: selected
      }))
    };
  }


  const productInfo = data.items.nodes[0];

  const colors = productInfo.colors.nodes;
  let colorOptions;

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
        <div className="avatar placeholder" key={index} onClick={() => selectOptions("color", color.name)}>
          <div className={`
            ${displayColor} 
            mr-2 mt-1 rounded-full w-3 
            ${
              index === 0 && !selectedProduct.color 
                ? "ring ring-primary ring-offset-base-100 ring-offset-2" 
                : selectedProduct.color === color.name
                ? "ring ring-primary ring-offset-base-100 ring-offset-2"
                : ""
            }`}>
            <span className="text-xs"></span>
          </div>
        </div>
      )
    })
  } else {
    colorOptions = <></>;
  };

  const sizes = productInfo.sizes.nodes;
  let sizeOptions;

  if (sizes.length > 0) {
    sizeOptions = sizes.map((size, index) => {
      return (
        <div key={index} className={`
          badge mr-2 cursor-pointer
          ${
            index === 0 && !selectedProduct.size
              ? "ring ring-primary ring-offset-base-100 ring-offset-2" 
              : selectedProduct.size === size.name
              ? "ring ring-primary ring-offset-base-100 ring-offset-2" 
              : ""
          }
        `} onClick={() => selectOptions("size", size.name)}>{size.name}</div>
      )
    })
  }

  return (
    <section className="p-5 flex justify-center sm:flex-col md:flex-col lg:flex-row">
      <div className="basis-1/2">
        <img src={productInfo.featuredImage?.node.sourceUrl} alt={productInfo.title} className="h-[700px] w-full object-cover"/>
      </div>
      <div className="basis-1/2 flex flex-col items-start justify-center p-10 sm:p-2 md:p-2 lg:p-10">
        <h1 className="font-bold text-2xl my-2">{productInfo.title}</h1>
        <div className="text-lg my-3">
          {parse(productInfo.content)}     
        </div>
        <div className="text-sm my-1">Available in:</div>
        <div className="flex gap-1 mb-3">
          {colorOptions}
        </div>
        <div className="text-sm my-1">Size:</div>
        <div className="flex">
          {sizeOptions}
        </div>
        <div className="font-bold text-4xl my-5">${productInfo.prices.nodes[0].name}</div>
        <button className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Send Email</button> 
      </div>
    </section>
  )
}

export default GarthsGiftShop;