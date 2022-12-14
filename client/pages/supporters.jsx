import React from 'react';
import axios from '../components/Axios';
import HeroCard from '../components/HeroCard';

const Supporters = ({supporterItems}) => {

  const allSupporters = supporterItems.map((supporter) => {
    return (
      <div key={supporter.id} className="col-span-1 row-span-1 bg-base-100 shadow-lg flex items-center p-10 h-[500px] sm:h-[300px] md:h-[250px] lg:h-full">
        <img src={supporter._embedded["wp:featuredmedia"][0].source_url} alt={supporter.title.raw} className="w-full" />
      </div>
    )
  });

  return (
    <section className="grid grid-cols-2 p-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-primary-content">
      <HeroCard 
        title="Supporters" 
        cta="Donate" 
        path="/donate"
        defCol={2}
        defRow=""
        smCol="sm:col-start-1 sm:col-end-4"
        smRow=""
        mdCol="md:col-start-1 md:col-end-5"
        mdRow=""
        lgCol="lg:col-start-1 lg:col-end-6"
        lgRow=""
        xlCol="xl:col-start-1 xl:col-end-7"
        xlRow=""
      >
        The Happy Herd is very lucky to have so many amazing supporters, including local businesses, vegan companies and other animal rescues. Thank you as well to individual contributors, we greatly appreciate your support!
      </HeroCard>
      
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