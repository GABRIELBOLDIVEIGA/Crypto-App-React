import styles from "./News.module.scss";
import styled  from 'styled-components';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://api.coinstats.app/public/v1/news/")
            .then((response) => response.json())
            .then((dados) => {
                console.log(dados.news);
                setNews(dados.news);
            });
    }, []);

    // console.log();

    // const Article = styled.

    return (
        <section className={styles.news}>
            <h1>News</h1>
            {/* <ul>
                {news.map((article, index) => (
                    <Link key={index} to={article.link} >
                        <img src={article.imgURL} alt={article.title} className={styles.article}/>
                        <h1>{article.tite}</h1>
                    </Link>
                ))}
            </ul> */}
        </section>
    );
}

/* 
{
    title: "Avalanche price analysis: AVAX continues bearish trend after falling below $18",
    imgURL: "https://www.cryptopolitan.com/wp-content/uploads/2023/02/Screenshot-2023-02-27-at-11.23.07-PM-1200x482.jpg",
    description: "Avalanche price analysis shows a continued bearish trend in place, after price fell below the $18 mark for the first time since February 14. AVAX dropped 2 percent to move as low as $17.74, after initially dropping below the $20 resistance last Friday. Avalanche has faced multiple rejections at the current resistance point, whereas support &#8230;",
    link: "https://www.cryptopolitan.com/avalanche-price-analysis-2023-02-27/?utm_medium=referral&utm_source=coinstats",
    source: "Cryptopolitan",
    searchKeyWords:["i","hope","everyone","is","ready...","bitcoin","amp","link","status"]
}
*/
