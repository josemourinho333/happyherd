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
    <div className="hero min-h-[70vh] bg-neutral rounded-lg">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">Stay Connected</h1>
          <p className="py-6 text-neutral-content">Sign up for our newsletter and stay up to date with the Happy Herd.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;