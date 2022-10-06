import React from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import styles from '../styles/Rescuedanimals.module.scss';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const rescuedanimals = () => {
  const { data, error } = useSWR(
  `
  {
    pages(where: {parent: "rescued-animals"}, first: 100) {
      edges {
        node {
          id
          slug
          title
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
          status
          content(format: RENDERED)
        }
      }
    }
  }
  `, fetcher
  );

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const animalsList = data.pages.edges.filter((item) => {
    return item.node.featuredImage !== null && item.node.status === 'publish'
  });

  const animalCards = animalsList.map((animal) => {
    return (
      <div key={animal.node.id} className={`${styles.card} shadow-lg`}>
        <img src={animal.node.featuredImage.node.sourceUrl} alt="featured-img" />
        {/* {animal.node.title} */}
      </div>
    )
  })

  console.log('animals?', animalsList);
   
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