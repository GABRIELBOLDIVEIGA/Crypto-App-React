import styles from "./DetalhesDaMoeda.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";
import Coin from "components/Coin";

export default function DetalhesDaMoeda() {
    const [moeda, setMoeda] = useState();
    const local = useLocation();

    useEffect(() => {
        const regex = /\/([^\/]*)$/;
        const match = local.pathname.match(regex);

        if (match) {
            var id = match[1];
        }

        fetch(`https://api.coinstats.app/public/v1/coins/${id}?currency=USD`)
            .then((resp) => resp.json())
            .then((dados) => {
                setMoeda(dados.coin);
                console.log(dados.coin)
            });
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
            <h1>Detalhes sobre {moeda.id}</h1>
            
            <Coin {...moeda}/>
        </section>
    );
}
