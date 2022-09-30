import styles from '../styles/Card.module.scss';

const Card = ({ data }) => {
  console.log('dadddd', data.featuredImage); 
  const { id, title, date, content, slug } = data;

  return (
    <article className={`${styles.card} text-slate-800`}>
      <div className="thumbnail">
        <img src='' alt="" srcset="" className="img"/>
      </div>
      <h1 className="title">{title}</h1>
      <a href="/" className={`${styles.readmore}`}>READ MORE</a>
    </article>
  )
}

export default Card;