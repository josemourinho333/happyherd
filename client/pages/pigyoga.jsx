import React from 'react';
import Hero from '../components/hero';
import { request } from 'graphql-request';
import useSWR from 'swr';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const PigYoga = () => {
  const { data, error } = useSWR(
    `
      {
        mediaItems(where: {title: "pigyoga"}, first: 100) {
          nodes {
            sourceUrl(size: LARGE)
            id
          }
        }
      }
    `, fetcher
  );

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log('data', data.mediaItems.nodes);
  const yogaPics = data.mediaItems.nodes.map((yogaPic) => {
    return (
      <div key={yogaPic.id} className="basis-1/4 flex">
        <img src={yogaPic.sourceUrl} alt={`pig-yoga-${yogaPic.id}`} className="w-full rounded-xl shadow-xl"/>
      </div>
    )
  })

  return (
    <section className="flex flex-col items-center">
      <div className="hero h-[90vh] bg-base-200">
        <div className="hero-content flex-col items-center justify-center lg:flex-row-reverse">
          <iframe className="basis-1/2 px-5" width="100%" height="400px" src="https://www.youtube.com/embed/DhSHtNXpzss" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="basis-1/2 px-5">
            <h1 className="text-5xl font-bold">Pig & Turkey Yoga</h1>
            <p className="py-6 whitespace-pre-wrap">
            Need a break from the craziness of the day to day? 
            <br/>
            Get ready for this unique experience! No matter your skill level, you will love this relaxing yoga class accompanied by pigs and turkeys, and will leave the class feeling lighter, and happier.
            <br/>
            Benefits of this class include relaxation, laughter, increased mood, and truly adorable photos!
            </p>
            <button className="btn btn-primary">Join a class</button>
            <p className="py-6 whitespace-pre-wrap text-xs italic">
              All funds from ticket purchases go towards the sanctuary operating costs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center my-5 gap-5">
        {yogaPics}
      </div>

    </section>

  )
}

export default PigYoga;