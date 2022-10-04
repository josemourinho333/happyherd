import styles from '../styles/Subscribe.module.scss';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Image from 'next/image'

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const Subscribe = () => {
  const { data, error } = useSWR(
  `
  {
    mediaItems(where: {title: "subscribe"}) {
      nodes {
        sourceUrl(size: LARGE)
        id
        title(format: RENDERED)
      }
    }
  }
  `, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log('data', data.mediaItems.nodes[0].sourceUrl);

  const src = data.mediaItems.nodes[0].sourceUrl;

  return (
    <section className={`${styles.container}`}>
      <div 
        style={{ backgroundImage: `url(${src})`}}
        className={`${styles.bg}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure explicabo minima natus, repellendus sed nam amet harum facilis dignissimos asperiores similique dicta consectetur error soluta veritatis optio autem voluptas rerum laboriosam molestiae eligendi iste perspiciatis. Non, adipisci id veniam dignissimos suscipit sed aliquid, vel ut saepe voluptate, repellendus fugit vero?
      </div>

    </section>
  )
}

export default Subscribe;