import styles from '../styles/Subscribe.module.scss';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { HiOutlineArrowRight } from "react-icons/hi";


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

      <h1 className="font-semibold text-5xl text-black">Stay connected with us</h1>

      <div className="flex items-center my-10">
      
        <form action="POST" className="basis-1/2 flex flex-col px-[1rem]">
          <p className="mt-3 mb-8 font-light text-xl">Sign up for our newsletter.</p>
          <label className="font-semibold my-2">What's your email?</label>
          <input type="email" className="py-3 text-3xl my-2 border-b-2 border-black" placeholder="youremail@email.com"/>
          <button className="my-2 bg-black border border-black text-white rounded-full px-5 py-2 self-start hover:bg-white hover:border hover:text-black flex align-center">
            Subscribe
            <HiOutlineArrowRight className="ml-2 mt-1.5"/>
          </button>
        </form>
        <div className="basis-1/2 self-center px-[1rem]">
          <img src="https://happyherd.org/wp-content/uploads/2021/04/IMG_3829.jpg" alt="newsletter-img" className="rounded-xl h-[500px] w-full object-cover object-top"/>
        </div>
      </div>


    </section>
  )
}

export default Subscribe;