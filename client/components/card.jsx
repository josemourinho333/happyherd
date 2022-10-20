import styles from '../styles/Card.module.scss';
import parse from 'html-react-parser';
import { HiOutlineArrowRight, HiOutlineChevronDoubleUp } from "react-icons/hi";
import moment from 'moment';
import Modal from './modal';

const Card = (props) => {
  console.log('dadddd', props); 

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
            <p></p>
            <div className="card-actions justify-between">
              <label htmlFor="my-modal-6" className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm modal-button">open modal</label>
              <button className="btn btn-outline btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Sponsor Me</button>
            </div>
          </div>
        </div>
        <Modal name={props.name} bio={props.bio} img={props.img}/>
      </>
    )
  }
};

export default Card;