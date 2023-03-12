import styles from "./Coin.module.scss";
import { Link } from "react-router-dom";
import LineChart from "components/LineChart";
import { useEffect, useState } from "react";
import getHistoricalPrice from "components/Coin/getHistoricalPrice.js";
import { ScriptableContext } from "react-chartjs-2";
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { useFavoritoContext } from "common/context/Favorito";

export default function Coin(moeda) {
    const [historicoPreco, setHistoricoPreco] = useState([]);
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === moeda.id);

    useEffect(() => {
        fetch(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${moeda.id}`)
            .then((resp) => resp.json())
            .then((dados) => {
                setHistoricoPreco(getHistoricalPrice(dados.chart));
            });
    }, []);

    const data = {
        labels: historicoPreco.map(() => ""),
        datasets: [
            {
                label: "Titulo aqui",
                data: historicoPreco.map((data) => data.preco),

                fill: true,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    return gradient;
                },
                borderColor: "#c4c9cc",
                borderWidth: 1.5,
                pointRadius: 0,
            },
        ],
    };

    return (
        <div className={styles.item}>
            <button onClick={() => adicionarFavorito(moeda)}>{!ehFavorito ? <AiOutlineStar size={20} color="#c6cfd2" /> : <AiFillStar size={20} color="#8b80db" />}</button>

            <Link to={`/mercado/${moeda.id}`} className={styles.moeda} key={moeda.id}>
                <div className={styles.containerToken}>
                    <p># {moeda.rank}</p>
                    <img className={styles.moeda__icone} src={moeda.icon} alt={moeda.name} />
                    <div className={styles.containerToken__nameSymbol}>
                        <p>{moeda.name}</p>
                        <p>{moeda.symbol}</p>
                    </div>
                </div>

                <div className={styles.containerValores}>
                    <p className={styles.containerValores__price}>$ {Number(moeda.price).toFixed(2)}</p>
                    <p className={styles.containerValores__change} style={Number(moeda.priceChange1w) < 0 ? { color: "#b9283d" } : { color: "#66be54" }}>
                        {Number(moeda.priceChange1w) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                        {moeda.priceChange1w}%
                    </p>
                </div>

                <div className={styles.moeda__grafico}>
                    <LineChart chartData={data} />
                </div>
            </Link>
        </div>
    );
}
