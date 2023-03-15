import classNames from "classnames";
import opcoes from "./opcoes.json";
import styles from "./Filtro.module.scss";

export default function Filtro({ periodoDoGrafico, setPeriodoDoGrafico }) {
  return (
    <div className={styles.filtros}>
      {opcoes.map((op) => {
        return (
          <button
            className={classNames({
              [styles.filtros__filtro]: true,
              [styles["filtros__filtro--ativo"]]: periodoDoGrafico === op.value,
            })}
            key={op.value}
            onClick={() => {
              setPeriodoDoGrafico(op.value);
            }}
          >
            {op.nome}
          </button>
        );
      })}
    </div>
  );
}
