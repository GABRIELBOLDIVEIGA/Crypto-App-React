import styles from "./Favotiros.module.scss";
import React from "react";
import { useFavoritoContext } from "common/context/Favorito";
import Coin from "components/Coin";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Favoritos() {
    const { favorito } = useFavoritoContext();

    return favorito.length !== 0 ? (
        <div>
            {favorito.map((fav) => {
                return <Coin key={fav.id} {...fav} />;
            })}
        </div>
    ) : (
        <div className={styles.vazio}>
            <h2>Parece que você não tem nem uma moeda favorita...</h2>

            <Link to="/mercado">
                <MdOutlineKeyboardBackspace size={25} color="#8b80db" /> Voltar para o mercado
            </Link>
        </div>
    );
}
