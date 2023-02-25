import { Outlet } from "react-router-dom";
import styles from "./PaginaPrincipal.module.scss";
import Cabecalho from "components/Cabecalho/index";
import Menu from "components/Menu/index";

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
