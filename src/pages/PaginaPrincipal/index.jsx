import { Outlet } from "react-router-dom";
import styles from "./PaginaPrincipal.module.scss";
import Cabecalho from "components/Cabecalho/index";
import Menu from "components/Menu/index";
import FavoritosProvider from "common/context/Favorito";
import MoedasAPIProvider from "common/context/MoedasAPI";

export default function PaginaPrincipal() {
    return (
        <div className={styles.paginaPrincipal}>
            <Menu />
            <div className={styles.paginaPrincipal__container}>
                <Cabecalho />

                <MoedasAPIProvider>
                    <FavoritosProvider>
                        <Outlet />
                    </FavoritosProvider>
                </MoedasAPIProvider>
            </div>
        </div>
    );
}
