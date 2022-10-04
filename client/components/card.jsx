import styles from '../styles/Card.module.scss';
import { capitalize } from '../helpers/capitalize';
import parse from 'html-react-parser';
import { HiOutlineArrowRight } from "react-icons/hi";


const Card = (props) => {
  // console.log('dadddd', props); 

  const parsed = parse(props.data.content).filter((item) => item.type === "p");
  // console.log('parsed', parsed);


  return (
    <article className={`${styles.cardBlog} bg-white mx-2 shadow-xl`}>
      <img src={props.data.featuredImage?.node.sourceUrl ? props.data.featuredImage?.node.sourceUrl : `https://happyherd.org/wp-content/uploads/2020/06/lincoln-lola-e1624407341856.jpg`} alt="" className={`${styles.img}`}/>
      <div className={`${styles.content}`}>
        <h1 className="text-2xl">{props.data.title}</h1>
        {/* {parse(props.data.content).slice(0, 1)} */}
        <a href={`/${props.data.slug}`} className={`${styles.readmore}`}>
          Read More
          <HiOutlineArrowRight className="ml-2 mt-1.5"/>
        </a>
      </div>
    </article>
  );
};

export default Card;