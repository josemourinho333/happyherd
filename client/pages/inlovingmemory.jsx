import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Card from '../components/card';
import Hero from '../components/hero';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const InLovingMemory = () => {
  const { data, error } = useSWR(
    `
      {
        animals(first: 100, where: {categoryName: "dead"}) {
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

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const cards = data.animals.edges.map((animal) => {
    return (
      <Card 
        key={animal.node.id}
        name={animal.node.title}
        bio={animal.node.content}
        img={animal.node.featuredImage.node.sourceUrl}
        slug={animal.node.slug}
        tags={animal.node.tags.nodes[0].name}
        tagSlug={animal.node.tags.nodes[0].slug}
        dead={true}
      />
    )
  });

  return (
    <section className="flex flex-col items-center">
      <Hero title="In Loving Memory" cta="Donate">
        Gone but never forgotten. You can help us these animals and enrich their lives.
      </Hero>
      <div className="flex flex-wrap justify-center my-[2rem] gap-[2rem]">
        {cards}
      </div>
    </section>
  )
}

export default InLovingMemory;