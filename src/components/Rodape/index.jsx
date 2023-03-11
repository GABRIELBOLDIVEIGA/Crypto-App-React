import styles from "./Rodape.module.scss";
import icons from "./icons.json";

export default function Rodape() {
    return (
        <section className={styles.rodape}>
            <div></div>
            {icons.map((icon) => {
                return (
                    <a key={icon.id} className={styles.rodape__item} href={icon.href} target="_blank" rel="noreferrer">
                        <img src={icon.path} alt="" /> {icon.texto}
                    </a>
                );
            })}
        </section>
    );
}
