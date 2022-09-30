import {request} from 'graphql-request';
import Carousel from '../components/carousel';
import styles from '../styles/Home.module.scss';

function Home({ data }) {

  const imgs = data.mediaItems.edges?.map((img) => {
    return (
      <div className="context-img-container" key={img.node.id}>
        <img src={img.node.sourceUrl} alt="..." className="w-full context-img rounded-lg shadow-lg" />
      </div>
    )
  })

  return (
    <>
      <Carousel />
      <section className="who-we-are-container flex items-center p-10 h-[100vh]">

        <div className="content-container flex flex-col items-center basis-1/2">
          <h1 className="font-semibold text-3xl p-5">Who We Are</h1>
          <div className="h-[1px] w-[50%] bg-black"></div>
          <p className="font-light italic p-5">
            The Happy Herd is a <strong>farm animal sanctuary</strong> for animals either abused or at risk.
          </p>
          <p className="font-light text-center">
            On 4 wonderful acres, you can find the many animals we have rescued roaming freely. We have several goats, sheep, chickens, cows, pigs, turkeys, ducks, cats, a dog, and a wonderful friendly donkey! Each with their <strong>own identity and personality</strong>, you can find out more about them by clicking below. We became official in August 2018, when we became a registered charity.
          </p>
          <button className="bg-emerald-200 rounded-lg my-5 px-5 py-2 mx-5 self-center hover:bg-emerald-400 text-black">
            Rescued Animals
          </button>
        </div>

        <div className={`${styles["context-imgs"]} basis-1/2`}>
          {imgs}
        </div>

      </section>
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
}

export default Home;
