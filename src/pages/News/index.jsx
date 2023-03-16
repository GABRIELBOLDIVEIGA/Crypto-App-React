import styles from "./News.module.scss";
import Card from "./Card";
import { useNewsContext } from 'common/context/News';

export default function News() {
    const { news } = useNewsContext();
    
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
