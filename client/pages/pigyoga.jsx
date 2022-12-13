import React from 'react';
import axios from '../components/Axios';

const PigYoga = ({pigyogaItems}) => {
  
  const yogaPics = pigyogaItems.map((item) => {
    if (item.title.raw.includes('video')) {
      return (
        <div className="relative col-span-2 overflow-hidden w-full pt-[56.25%]">
          <iframe className="rounded-lg absolute inset-0" width="100%" height="100%" src={item.content.raw} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )
    } else {
      return (
        <div key={item.id} className="flex">
          <img src={item._embedded["wp:featuredmedia"][0].source_url} alt={`pig-yoga-${item.id}`} className="w-full rounded-xl shadow-xl object-cover"/>
        </div>
      )
    }
  })

  return (
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-primary-content">
      <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-zinc-900 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
        <div className="absolute inset-0 flex items-start justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center">
            <img src="https://happyherd.org/wp-content/uploads/2022/12/Gerald_G_Yoga_Poses_stylized_1.png" alt="yoga" />
          </span>
          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>
        <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">
          Pig & Turkey Yoga
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Get ready for this unique experience! No matter your skill level, you will love this relaxing yoga class accompanied by pigs and turkeys, and will leave the class feeling lighter, and happier.
          <br/><br/>
          Benefits of this class include relaxation, laughter, increased mood, and truly adorable photos!
        </p>
        <a
          className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          href="https://www.eventbrite.ca/o/the-happy-herd-farm-sanctuary-17549758348"
          target="_blank"
          rel="noreferrer"
        >
          Join a class
        </a>
        <p className="py-6 whitespace-pre-wrap text-xs italic">
          All funds from ticket purchases go towards the sanctuary operating costs.
        </p>
      </div>
      {yogaPics.reverse()}
    </section>

  )
};

export async function getStaticProps() {
  try {
    const res = await axios.get('/pigyoga-items', { params: {context: "edit", _embed: true}});
    const pigyogaItems = await res.data;

    return {
      props: {
        pigyogaItems: pigyogaItems,
      }
    }
  } catch (err) {
    console.log('err', err);
  }
}

export default PigYoga;