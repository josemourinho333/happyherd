import { request } from 'graphql-request';
import useSWR from 'swr';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from '../styles/LatestNews.module.scss';
import Card from './card';

const fetcher = (query) => request(process.env.happyHerdApi, query)
  .then((data) => data)
  .catch((err) => console.log('err', err));

const LatestNews = () => {
  const {data, error} = useSWR(`
    {
      posts {
        nodes {
          id
          date
          title(format: RENDERED)
          content(format: RENDERED)
          slug
          featuredImage {
            node {
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
        }
      }
    }
  `, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  
  const newsList = data?.posts.nodes;
  const newsCards = newsList?.map((news) => {
    return (
      <Card key={news.id} data={news} blogs={true}/>
    )
  });

  return (
    <section className="flex flex-col items-center py-[3rem]">
      <h1 className="title font-semibold text-5xl self-start my-5 text-primary">Latest from Happy Herd</h1>
      {/* <div className="h-[1px] w-1/2 bg-slate-800 my-5"></div> */}
      <div className={`${styles.list}`}>
        {newsCards}
      </div>
    </section>
  )
}

export default LatestNews;