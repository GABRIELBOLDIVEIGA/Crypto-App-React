import styles from "./Mercado.module.scss";
import Coin from "components/Coin";
import { useMoedasAPIContext } from "common/context/MoedasAPI";

export default function Mercado() {
    const { coins } = useMoedasAPIContext();
    

    return (
        <div className={styles.mercado}>
            <h1>Mercado</h1>

            <ul>
                {coins.map((moeda) => {
                    return <Coin key={moeda.id} id={moeda.id} {...moeda}></Coin>;
                })}
            </ul>
        </div>
    );
}
