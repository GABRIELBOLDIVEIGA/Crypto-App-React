import styles from "./Mercado.module.scss";
import Buscador from "components/Buscador";
import Ordenador from "components/Ordenador";
import { useState } from "react";
import Itens from "./Itens";

export default function Mercado() {
    const [busca, setBusca] = useState("");
    const [ordenador, setOrdenador] = useState("");

    return (
        <div className={styles.mercado}>
            <h1>Mercado</h1>
            <div className={styles.mercado__filtros}>
                <Buscador busca={busca} setBusca={setBusca} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>

            <div className={styles.mercado__indicador}>
                <div className={styles.mercado__indicador__rankName}>
                    <p>Rank</p>
                    <p>Nome</p>
                </div>

                <p className={styles.mercado__indicador__preco}>Preço</p>

                <div className={styles.mercado__indicador__tempo}>
                    <p>1h</p>
                    <p>1d</p>
                    <p>1w</p>
                </div>

                <p className={styles.mercado__indicador__grafico}>Grafico semanal</p>
            </div>

            <Itens busca={busca} ordenador={ordenador} />
        </div>
    );
}
