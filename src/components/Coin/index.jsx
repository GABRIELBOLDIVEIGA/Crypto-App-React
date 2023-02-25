import styles from "./Coin.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import grafico from "../Coin/grafico.PNG";

export default function Coin(moeda) {
    return (
        <Link to={`/${moeda.id}`} key={moeda.id} className={styles.moeda} token={moeda} >
            <div className={styles.containerToken}>
                <p>{moeda.rank}</p>
                <img className={styles.moeda__icone} src={moeda.icon} alt={moeda.name} />
                <div>
                    <p>{moeda.name}</p>
                    <p>{moeda.symbol}</p>
                </div>
            </div>

            <div className={styles.containerValores}>
                <p className={styles.containerValores__price}>$ {Number(moeda.price).toFixed(2)}</p>
                <p className={styles.containerValores__change} style={Number(moeda.priceChange1w) < 0 ? { color: "#b9283d" } : { color: "#66be54" }}>
                    {moeda.priceChange1w}
                </p>
            </div>
            <img className={styles.moeda__grafico} src={grafico} alt="grafico variação de preço" />
        </Link>
    );
}
