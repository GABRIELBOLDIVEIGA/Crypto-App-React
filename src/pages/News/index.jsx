import styles from "./News.module.scss";
import { useEffect } from "react";

export default function News() {
    useEffect(() => {
        fetch("https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20")
            .then((response) => response.json())
            .then((dados) => {
                console.log(dados);
            });
    }, []);
    return <div>News</div>;
}
