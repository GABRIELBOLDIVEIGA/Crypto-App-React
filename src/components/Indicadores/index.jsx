import styles from "./Indicadores.module.scss";

export default function Indicadores() {
    return (
        <div className={styles.indicador}>
            <div className={styles.indicador__rankName}>
                <p>Rank</p>
                <p>Nome</p>
            </div>

            <p className={styles.indicador__preco}>Preço</p>

            <div className={styles.indicador__tempo}>
                <p>1h</p>
                <p>1d</p>
                <p>1w</p>
            </div>

            <p className={styles.indicador__grafico}>Grafico semanal</p>
        </div>
    );
}
