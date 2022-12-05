import Carousel from '../components/carousel';
import WhoWeAre from '../components/whoweare';
import HowToHelp from '../components/howtohelp';
import LatestNews from '../components/latestnews';
import Subscribe from '../components/subscribe';
import HomeHero from '../components/HomeHero';
import axios from '../components/Axios';
import { subscribe } from 'graphql';

function Home({ heroItems, aboutItems, helpItems, subscribeItems }) {
  return (
    <> 
      <HomeHero heroItems={heroItems}/>
      <WhoWeAre aboutItems={aboutItems}/>
      <HowToHelp helpItems={helpItems}/>
      {/* <LatestNews /> */}
      <Subscribe subscribeItems={subscribeItems[0]}/>
    </>
  )
};

// export async function getStaticProps() {
//   try {
//     const [hero, about, help, subscribe] = await Promise.all([
//       axios.get('/hero-items', { params: {context: "edit", _embed: true}}),
//       axios.get('/about-items', { params: {context: "edit", _embed: true}}),
//       axios.get('/help-items', {params: {context: "edit", _embed: true}}),
//       axios.get('/subscribe-items', {params: {context: "edit", _embed: true}})
//     ])

//     return {
//       props: {
//         heroItems: hero.data,
//         aboutItems: about.data,
//         helpItems: help.data,
//         subscribeItems: subscribe.data
//       }
//     }
//   } catch (error) {
//     console.log('error', error);
//   }
// };

export default Home;
