import Carousel from '../components/carousel';
import WhoWeAre from '../components/whoweare';
import HowToHelp from '../components/howtohelp';
import LatestNews from '../components/latestnews';
import {request} from 'graphql-request';

function Home({ data }) {
  return (
    <>
      <Carousel />
      <WhoWeAre data={data}/>
      <HowToHelp />
      <LatestNews />
    </>
  )
};

export async function getServerSideProps() {
  const query = `{
    mediaItems(where: {title: "whoweare"}) {
      edges {
        node {
          id
          sourceUrl
        }
      }
    }
  }`;

  const res = await request(process.env.happyHerdApi, query);
  const data = await res;

  return { props: { data } };
};

export default Home;
