import styles from "./Coin.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getHistoricalPrice from "common/functions/getHistoricalPrice.js";
// import { ScriptableContext } from "react-chartjs-2";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { useFavoritoContext } from "common/context/Favorito";
import LineChart from "./LineChat/index";
import styled, { css } from "styled-components";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const data = {
        labels: historicoPreco.map(() => ""),
        datasets: [
            {
                label: "Titulo aqui",
                data: historicoPreco.map((data) => data.preco),
                fill: false,
                borderColor: "#c4c9cc",
                borderWidth: 1.5,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,

        plugins: {
            legend: {
                display: false,
            },
        },

        layout: {
            padding: {
                top: 0,
            },
        },

        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                type: "logarithmic",
                display: false,
                grid: {
                    display: false,
                },
                // beginAtZero: true,
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
    };

    const P = styled.p`
        display: flex;
        width: 100px;
        color: #66be54;

        ${(props) =>
            props.variacao < 0 &&
            css`
                color: #b9283d;
            `}
    `;

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

                <p className={styles.moeda__price}>$ {moeda.price.toFixed(2)}</p>

                <div className={styles.containerValores}>
                    <P variacao={moeda.priceChange1h}>
                        {moeda.priceChange1h < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                        {moeda.priceChange1h}%
                    </P>

                    <P variacao={moeda.priceChange1d}>
                        {moeda.priceChange1d < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                        {moeda.priceChange1d}%
                    </P>

                    <P variacao={moeda.priceChange1w}>
                        {moeda.priceChange1w < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                        {moeda.priceChange1w}%
                    </P>
                </div>

                <div className={styles.moeda__grafico}>
                    <LineChart chartData={data} chartOptions={options} />
                </div>
            </Link>
        </div>
    );
}
