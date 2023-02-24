import { Outlet } from "react-router-dom";
import styles from "./PaginaPrincipal.module.scss";
import Cabecalho from "componentes/Cabecalho/index";
import Menu from "componentes/Menu/index";

export default function PaginaPrincipal() {
    return (
        <div className={styles.paginaPrincipal}>
            <Menu />
            <div className={styles.paginaPrincipal__container}>
                <Cabecalho />

                <Outlet />
            </div>
        </div>
    );
}
