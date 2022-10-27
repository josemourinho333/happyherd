import React from 'react';
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

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log('data', data.items.nodes[0]);
  const productInfo = data.items.nodes[0];

  return (
    <section className="flex h-[90vh] sm:flex-col md:flex-col lg:flex-row">
      <div className="basis-1/2">
        <img src={productInfo.featuredImage?.node.sourceUrl} alt={productInfo.title} className="object-cover h-full w-full"/>
      </div>
      <div className="basis-1/2 flex flex-col items-start justify-center p-10">
        <h1 className="font-bold text-3xl my-5">{productInfo.title}</h1>
        <div className="text-lg my-5">
          {parse(productInfo.content)}     
        </div>
        <div className="w-full flex items-center justify-between my-10">
          <div className="font-bold text-5xl">${productInfo.prices.nodes[0].name}</div> 
          <button className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default GarthsGiftShop;