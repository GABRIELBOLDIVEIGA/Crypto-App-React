import styles from "./Swap.module.scss";

export default function Swap() {
    return (
        <section className={styles.swap}>
            <h1>Swap</h1>

            <div className={styles.swap__conteudo}>
                <div className={styles.swap__container}>
                    <div className={styles.wrapper}>
                        <div>
                            <select>
                                <option>Moeda 1</option>
                                <option>Moeda 2</option>
                                <option>Moeda 3</option>
                            </select>
                        </div>

                        <div>
                            <input type="number" placeholder="0" />
                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        <div>
                            <select>
                                <option>Moeda 1</option>
                                <option>Moeda 2</option>
                                <option>Moeda 3</option>
                            </select>
                        </div>

                        <div>
                            <input type="number" placeholder="0" />
                        </div>
                    </div>
                    <input type="range" />

                    <button>Confirma</button>
                </div>

                <div className={styles.swap__conteudo__saldo}>
                    <h2>Saldo</h2>
                    <ul>
                        <li>
                            <p>Token</p> <p>0.0</p>
                        </li>
                        <li>
                            <p>Token</p> <p>0.0</p>
                        </li>
                        <li>
                            <p>Token</p> <p>0.0</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
