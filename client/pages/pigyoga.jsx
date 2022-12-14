import React from 'react';
import axios from '../components/Axios';
import HeroCard from '../components/HeroCard';

const PigYoga = ({pigyogaItems}) => {
  
  const yogaPics = pigyogaItems.map((item) => {
    if (item.title.raw.includes('video')) {
      return (
        <div className="relative col-span-1 overflow-hidden w-full pt-[56.25%]">
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
    <section className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 bg-primary-content">
      <HeroCard 
        title="Pig & Turkey Yoga" 
        cta="Join a class" 
        path="https://www.eventbrite.ca/o/the-happy-herd-farm-sanctuary-17549758348" 
        external={true}
        defCol=""
        defRow=""
        smCol=""
        smRow=""
        mdCol=""
        mdRow=""
        lgCol=""
        lgRow="lg:row-start-1 lg:row-end-3"
        xlCol=""
        xlRow=""
      >
        Get ready for this unique experience! No matter your skill level, you will love this relaxing yoga class accompanied by pigs and turkeys, and will leave the class feeling lighter, and happier.
        <br/><br/>
        Benefits of this class include relaxation, laughter, increased mood, and truly adorable photos!      
      </HeroCard>
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