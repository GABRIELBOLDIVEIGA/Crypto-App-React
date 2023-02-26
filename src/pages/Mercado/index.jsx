import { useState, useEffect } from "react";
import styles from "./Mercado.module.scss";
import Coin from "components/Coin";

export default function Mercado() {
    const [moedas, setMoedas] = useState([]);

    useEffect(() => {
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD")
            .then((resp) => resp.json())
            .then((dados) => {
                setMoedas(dados.coins);
                // console.log(dados.coins);
            });
    }, []);

    return (
        <div className={styles.mercado}>
            <h1>Mercado</h1>

            <ul>
                {moedas.map((moeda) => {
                    return <Coin key={moeda.id} {...moeda}></Coin>;
                })}
            </ul>
        </div>
    );
}
