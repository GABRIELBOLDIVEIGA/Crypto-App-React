import styles from "./Mercado.module.scss";
import Buscador from "components/Buscador";
import Ordenador from "components/Ordenador";
import { useState } from "react";
import Itens from "./Itens";

export default function Mercado() {
    const [busca, setBusca] = useState("");
    const [ordenador, setOrdenador] = useState("");

    console.log(busca);
    console.log(ordenador);

    return (
        <div className={styles.mercado}>
            <h1>Mercado</h1>
            <div className={styles.mercado__container}>
                <Buscador busca={busca} setBusca={setBusca} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                <Itens busca={busca} ordenador={ordenador} />
            </div>
        </div>
    );
}
