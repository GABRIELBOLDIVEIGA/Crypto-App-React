import styles from "./Cabecalho.module.scss";
import icons from "./icons.json";

export default function Cabecalho() {
    return (
        <div className={styles.cabecalho}>
            {icons.map((icon) => {
                return (
                    <div key={icon.id} className={styles.cabecalho__container}>
                        <img src={icon.path} alt={icon.nome} title={icon.nome} />
                    </div>
                );
            })}
        </div>
    );
}
