import styles from "./News.module.scss";
import { useEffect, useState } from "react";
import Card from "./Card";

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
          <Card key={index} news={article} />
        ))}
      </ul>
    </section>
  );
}
