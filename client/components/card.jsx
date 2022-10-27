import styles from '../styles/Card.module.scss';
import { HiOutlineArrowRight, HiOutlineChevronDoubleUp } from "react-icons/hi";
import moment from 'moment';
import Modal from './modal';
import { makeSingular } from '../helpers/makeSingular';

const Card = (props) => {

  if (props.items) {
    return (
    <div className="card card-compact w-80 h-[400px] bg-base-100 drop-shadow-xl px-3">
      <figure className="h-1/2"><img src={props.img} alt={props.slug} className="h-full w-auto"/></figure>
      <div className="card-body justify-evenly">
        <h2 className="card-title font-normal text-lg">{props.name}</h2>
        <div className="card-actions justify-between items-end">
          <div className="text-2xl font-bold">${props.price[0].name}</div>
          <button className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm"><a href={`/garthsgiftshop/${props.name}`}>Buy Now</a></button>
        </div>
      </div>
    </div>
    )
  }

  if (props.blogs) {
    return (
      <article className={`${styles.cardBlog} bg-white mx-2 shadow-lg`}>
        <img src={props.data.featuredImage?.node.sourceUrl ? props.data.featuredImage?.node.sourceUrl : `https://happyherd.org/wp-content/uploads/2020/06/lincoln-lola-e1624407341856.jpg`} alt="" className={`${styles.img}`}/>
        <div className={`${styles.content}`}>
          <h1 className="text-2xl">{props.data.title}</h1>
          <a href={`/${props.data.slug}`} className={`${styles.readmore}`}>
            Read More
            <HiOutlineArrowRight className="ml-2 mt-1.5"/>
          </a>
          <p className="text-xs">{moment(props.data.date).format('dddd, MMM Do, YYYY')}</p>
        </div>
      </article>
    );
  };

  if (!props.blogs) {
    return (
      <>
        <div className="card w-96 h-[500px] bg-base-100 shadow-xl image-full">
          <figure><img src={props.img} alt={`${props.name}-img`} /></figure>
          <div className="card-body h-[500px]">
            <h2 className="card-title text-primary">{props.name}</h2>
            <div className="badge badge-secondary">{makeSingular(props.tags)}</div>
            <p></p>
            <div className="card-actions justify-between">
              <label htmlFor={`my-modal-${props.slug}`} className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm modal-button">Learn More</label>
              {props.dead
                ? <></>
                : <button className="btn btn-outline btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Sponsor Me</button>
              }
            </div>
          </div>
        </div>
        <Modal name={props.name} bio={props.bio} img={props.img} slug={props.slug} dead={props.dead}/>
      </>
    )
  }
};

export default Card;