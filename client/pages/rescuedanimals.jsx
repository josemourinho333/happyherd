import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import styles from '../styles/Rescuedanimals.module.scss';
import Card from '../components/card';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const rescuedanimals = () => {
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

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log('animals', data.animals.edges);

  const animalCards = data.animals.edges.map((animal) => {
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
  })

   
  return (
    <section className={styles.rescued}>
      <h1>Meet our residents</h1>
      <p>Here is our most up to date directory of family members. The following friends are current residents and call the Happy Herd Farm Sanctuary their home. With the freedom to roam and taken care of with the assistance of the founders and volunteers, our family is very happy.</p>
      <div>
        {animalCards}
      </div>
    </section>
  )
}

export default rescuedanimals;