import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import parse from 'html-react-parser';
import Hero from '../components/hero';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const Supporters = () => {
  const { data, error } = useSWR(`
    {
      mediaItems(where: {title: "supporters"}, first: 100) {
        nodes {
          altText
          sourceUrl(size: LARGE)
          caption(format: RENDERED)
          id
        }
      }
    }
  `, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log('data', data.mediaItems.nodes);

  const supporters = data.mediaItems.nodes.map((supporter) => {
    return (
      <div key={supporter.id} className="card w-[25%] h-[500px] bg-base-100 drop-shadow-xl">
        <figure className="px-10 pt-10 items-center justify-center basis-[60%]">
          <img src={supporter.sourceUrl} alt={supporter.altText} className="rounded-xl w-[300px]" />
        </figure>
        <div className="card-body items-center text-center justify-center">
          <h2 className="card-title">{parse(supporter.caption)}</h2>
        </div>
      </div>
    )
  })

  return (
    <>
      <Hero title="Our Supporters" cta="Donate">
        The Happy Herd is very lucky to have so many amazing supporters, including local businesses, vegan companies and other animal rescues. Thank you as well to individual contributors, we greatly appreciate your support!
      </Hero>
      <section className="flex flex-wrap justify-center gap-10 my-5">
        {supporters}
      </section>
    </>

  )
};

export default Supporters;