import React from 'react';
import Hero from '../components/hero';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Card from '../components/card';
import { data } from 'autoprefixer';

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

  console.log('data', data.items.nodes);

  const itemCards = data.items.nodes.map((item) => {
    return (
      <Card 
        key={item.id}
        id={item.id}
        items={true}
        name={item.title}
        content={item.content}
        slug={item.slug}
        price={item.prices.nodes}
        sizes={item.sizes.nodes}
        colors={item.colors.nodes}
        img={item.featuredImage?.node.sourceUrl}
      />
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