import styles from "./Ordenador.module.scss";
import { useState } from "react";
import classNames from "classnames";
import opcoes from "./opcoes.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function Ordenador({ ordenador, setOrdenador }) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordenador !== "",
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div
                className={classNames({
                    [styles.ordenador__options]: true,
                    [styles["ordenador__options--ativo"]]: aberto,
                })}
            >
                {opcoes.map((opcao) => {
                    return (
                        <div key={opcao.value} className={styles.ordenador__option} onClick={() => setOrdenador(opcao.value)}>
                            {opcao.nome}
                        </div>
                    );
                })}
            </div>
        </button>
    );
}