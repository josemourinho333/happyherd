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

export default Home;
