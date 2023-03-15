import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ news }) {
  return (
    <li>
    <Link target="_blank" to={news.link}>
      <div className={styles.artigo}>
        <img src={news.imgURL} alt={news.title} className={styles.news} />
        <h1>{news.title}</h1>
        <p>{news.description}</p>
      </div>
    </Link>
    </li>
  );
}
