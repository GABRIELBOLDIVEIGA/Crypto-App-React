import styles from "./News.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://api.coinstats.app/public/v1/news/trending?skip=0&limit=20")
            .then((response) => response.json())
            .then((dados) => {
                console.log(dados.news);
                setNews(dados.news);
            });
    }, []);

    return (
        <section className={styles.news}>
            <h1>News</h1>
            <ul className={styles.news__container}>
                {news.map((article, index) => (
                    <Link key={index} target="_blank" to={article.link}>
                        <div className={styles.artigo}>
                            <img src={article.imgURL} alt={article.title} className={styles.article} />
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                        </div>
                    </Link>
                ))}
            </ul>
        </section>
    );
}
