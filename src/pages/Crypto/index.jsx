import styles from "./Crypto.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";

export default function Crypto() {
    const [moeda, setMoeda] = useState();
    var local = useLocation();

    console.log(local.pathname);

    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/coins${local.pathname}?currency=USD`)
            .then((resp) => resp.json())
            .then((dados) => {
                setMoeda(dados.coin);
                console.log(dados.coin);
            })
            
    }, []);

    if (!moeda) {
        return (
            <>
                <h1>Estou trabalho nisso...</h1>
                <LoadingSpinner />
            </>
        );
    }

    return (
        <section>
            <h1>CRYPTO</h1>
            <h2>moeda --- {moeda.id}</h2>
        </section>
    );
}
