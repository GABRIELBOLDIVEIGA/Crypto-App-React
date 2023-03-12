import { useMoedasAPIContext } from "common/context/MoedasAPI";
import { useState, useEffect } from "react";
import Coin from "components/Coin";

export default function Itens({ busca, ordenador }) {
    const { coins } = useMoedasAPIContext();
    const [lista, setLista] = useState(coins);

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
        const novaLista = coins.filter((item) => testaBusca(item.name) || testaBusca(item.symbol));

        setLista(ordenar(novaLista));
    }, [busca, ordenador]);

    return (
        <ul>
            {lista.map((moeda) => {
                return <Coin key={moeda.id} {...moeda} busca={busca} ordenador={ordenador} />;
            })}
        </ul>
    );
}
