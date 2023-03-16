import styles from "./Card.module.scss";

export default function Card({ news }) {
    return (
        <li className={styles.artigo}>
            <a target="_blank" rel="noreferrer" href={news.link}>
                <img src={news.imgURL} alt={news.title} className={styles.news} />
                <div className={styles.artigo__texto}>
                    <h1>{news.title}</h1>
                    <p>{news.description}</p>
                </div>
                <p>Saiba Mais</p>
            </a>
        </li>
    );
}
