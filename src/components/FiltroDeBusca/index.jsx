import styles from "./FiltroDeBusca.module.scss";

import blocos from "assets/icons/blocos.svg";
import lista from "assets/icons/lista.svg";
import lupa from "assets/icons/procurar.svg";

export default function FiltroDeBusca() {
    return (
        <div className={styles.filtro}>
            <div className={styles.containerInput}>
                <img src={lupa} alt="lupa" />
                <input placeholder="Procurar..." />
            </div>

            <div className={styles.filtro__container}>
                <div className={styles.containerSelect}>
                    <p>Filtrar por</p>
                    <select name="select">
                        <option value="valor1">Favoritos</option>
                        <option value="valor2">Nome A-Z</option>
                        <option value="valor3">Nome Z-A</option>
                    </select>
                </div>

                <div className={styles.containerOpcoes}>
                    <img src={lista} alt="lista" title="Mostrar itens em fomato de lista" />
                    <img src={blocos} alt="blocos" title="Mostrar itens em formato de blocos" />
                </div>
            </div>
        </div>
    );
}
