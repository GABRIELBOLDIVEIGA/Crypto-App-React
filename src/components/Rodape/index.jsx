import styles from "./Rodape.module.scss";
import classNames from "classnames";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Rodape({ expandido }) {
    return (
        <section className={styles.rodape}>
            <div className={styles.rodape__borda}></div>

            <div className={styles.rodape__itens}>
                <a className={classNames({ 
                        [styles.rodape__itens__item]: true, 
                        [styles.expandido]: expandido 
                    })} 
                    href="https://www.linkedin.com/in/gabriel-boldi-278891247/" target="_blank" rel="noreferrer"
                >
                    <AiFillLinkedin size={20} />
                    {expandido ? <p>Linkedin</p> : ""}
                </a>

                <a className={classNames({ 
                        [styles.rodape__itens__item]: true, 
                        [styles.expandido]: expandido 
                    })} href="https://github.com/GABRIELBOLDIVEIGA" target="_blank" rel="noreferrer"
                >
                    <AiFillGithub size={20} />
                    {expandido ? <p>Github</p> : ""}
                </a>
            </div>
        </section>
    );
}
