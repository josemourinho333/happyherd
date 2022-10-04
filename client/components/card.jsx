import styles from '../styles/Card.module.scss';
import { capitalize } from '../helpers/capitalize';
import parse from 'html-react-parser';

const Card = (props) => {
  console.log('dadddd', props); 
  // const { id, title, date, content, slug } = data;
  if (!props.blogs) {
    return (
      <article className={`${styles.card} text-slate-800 bg-white mx-2 shadow-xl`}>
        <img src={props.data.sourceUrl} alt="" className={`${styles.img}`}/>
        <div className={`${styles.content}`}>
          <h1 className="title text-slate-800 text-3xl">{capitalize(props.data.altText)}</h1>
          {parse(props.data.caption)}
          <a href={`/${props.data.altText}`} className={`${styles.readmore} bg-slate-800 text-slate-200`}>{capitalize(props.data.altText)}</a>
        </div>
      </article>
    )
  };

  const parsed = parse(props.data.content).filter((item) => item.type === "p");
  // console.log('parsed', parsed);


  return (
    <article className={`${styles.card} text-slate-800 bg-white mx-2 shadow-xl`}>
      <img src={props.data.featuredImage?.node.sourceUrl ? props.data.featuredImage?.node.sourceUrl : `https://happyherd.org/wp-content/uploads/2020/06/lincoln-lola-e1624407341856.jpg`} alt="" className={`${styles.img}`}/>
      <div className={`${styles.content}`}>
        <h1 className="title text-slate-800 text-2xl">{props.data.title}</h1>
        {/* {parse(props.data.content).slice(0, 1)} */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eum alias et repellendus nesciunt officiis debitis aliquam, sit sint temporibus!...</p>
        <a href={`/${props.data.slug}`} className={`${styles.readmore} bg-slate-800 text-slate-200`}>Read More</a>
      </div>
    </article>
  );
};

export default Card;