import styles from "./Favotiros.module.scss";
import { useState, useEffect } from "react";
import { useFavoritoContext } from "common/context/Favorito";
import Coin from "components/Coin";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import Buscador from "components/Buscador";
import Ordenador from "components/Ordenador";

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    const [busca, setBusca] = useState("");
    const [ordenador, setOrdenador] = useState("");

    const [lista, setLista] = useState(favorito);

    function testaBusca(title) {
        const regex = new RegExp(busca, "i");
        return regex.test(title);
    }

    function ordenar(novaLista) {
        switch (ordenador) {
            case "rank":
                return novaLista.sort((a, b) => (a.size > b.size ? -1 : 1));
            case "maior_ganho":
                return novaLista.sort((a, b) => (a.priceChange1w > b.priceChange1w ? -1 : 1));
            case "maior_perda":
                return novaLista.sort((a, b) => (a.priceChange1w > b.priceChange1w ? 1 : -1));
            case "preco_mais_barato":
                return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
            case "preco_mais_caro":
                return novaLista.sort((a, b) => (a.price > b.price ? -1 : 1));
            default:
                return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = favorito.filter((item) => testaBusca(item.name) || testaBusca(item.symbol));

        setLista(ordenar(novaLista));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [busca, ordenador]);

    return favorito.length !== 0 ? (
        <div className={styles.favorito}>
            <h1>Favoritos</h1>
            <div className={styles.favorito__filtros}>
                <Buscador busca={busca} setBusca={setBusca} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            {lista.map((fav) => {
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
