import {request} from 'graphql-request';
import useSWR from 'swr';
import styles from '../styles/HowToHelp.module.scss';
import Card from './card';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const HowToHelp = () => {
  const { data, error } = useSWR(`
  {
    mediaItems(where: {title: "howtohelp"}) {
      edges {
        node {
          id
          sourceUrl
          altText
          caption(format: RENDERED)
        }
      }
    }
  }
  `, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const howToHelp = data?.mediaItems.edges.map((item) => {
    return(
      <Card 
        key={item.node.id}
        data={item.node}
        blogs={false}
      />
    )
  })

  return (
    <section className={`${styles["howtohelp-container"]} text-slate-800 p-10 w-full`}>

      <div className="intro items-center flex flex-col w-2/3">
        <h1 className={`${styles.title} font-semibold text-3xl text-white bg-slate-800 p-6 rounded-b-2xl`}>How You Can Help</h1>
        <p className="intro-content my-8 font-light text-xl text-center">
        <i>As one of the first farm animal sanctuaries on Canada's West Coast,</i>
        <br/><br/>
        we are always seeking assistance through volunteers or donations, monetary or in kind. We regularly greet visitors for scheduled tours so people can meet our ever-growing family.
        </p>
      </div>

      <div className="options flex w-1/2">
        {howToHelp}
      </div>

    </section>
  )
};

export default HowToHelp;