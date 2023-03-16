import styles from "./Mercado.module.scss";
import Buscador from "components/Buscador";
import Ordenador from "components/Ordenador";
import { useState } from "react";
import Itens from "./Itens";
import Indicadores from "components/Indicadores";

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

            <Indicadores />

            <Itens busca={busca} ordenador={ordenador} />
        </div>
    );
}
