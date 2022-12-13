import React from 'react';
import axios from '../components/Axios';
import Hero from '../components/hero';

const Supporters = ({supporterItems}) => {

  const allSupporters = supporterItems.map((supporter) => {
    return (
      <div key={supporter.id} className="col-span-1 row-span-1 bg-base-100 shadow-lg flex items-center p-10 h-[500px] sm:h-[300px] md:h-[250px] lg:h-full">
        <img src={supporter._embedded["wp:featuredmedia"][0].source_url} alt={supporter.title.raw} className="w-full" />
      </div>
    )
  });

  return (
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-primary-content">
      <div className="after:content relative col-span-1 row-span-1 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-accent px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 md:col-span-4 md:row-span-1 lg:col-span-5 lg:row-span-1 xl:col-span-6 lg:pt-0">
        <h1 className="mt-8 mb-4 text-3xl font-bold uppercase tracking-widest">
          Supporters
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          The Happy Herd is very lucky to have so many amazing supporters, including local businesses, vegan companies and other animal rescues. Thank you as well to individual contributors, we greatly appreciate your support!
        </p>
        <a
          className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          href="/donate"
        >
          Donate
        </a>
      </div>
      {allSupporters.reverse()}
    </section>
  )
};

export async function getStaticProps() {
  try {
    const res = await axios.get('/supporter-items', {
      params: {
        context: "edit",
        _embed: true,
        per_page: 100
      }
    });

    const supporterItems = await res.data;

    return {
      props: {
        supporterItems:supporterItems
      }
    }
  } catch (err) {
    console.log('err', err);
  }
}

export default Supporters;