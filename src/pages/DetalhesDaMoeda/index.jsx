import styles from "./DetalhesDaMoeda.module.scss";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavoritoContext } from "common/context/Favorito";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Line } from "react-chartjs-2";
import LoadingSpinner from "components/LoadingSpinner";
import getHistoricalPrice from "common/functions/getHistoricalPrice.js";
import Filtro from "./Filtro";
import Info from "./Info/index";

export default function DetalhesDaMoeda() {
  const params = useParams();
  const [moeda, setMoeda] = useState();
  const [historicoPreco, setHistoricoPreco] = useState([]);
  const [periodoDoGrafico, setPeriodoDoGrafico] = useState("1y");
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === params.id);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/coins/${params.id}?currency=USD`)
      .then((resp) => resp.json())
      .then((dados) => {
        setMoeda(dados.coin);
        console.log(dados.coin);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/charts?period=${periodoDoGrafico}&coinId=${params.id}`
    )
      .then((resp) => resp.json())
      .then((dados) => {
        setHistoricoPreco(getHistoricalPrice(dados.chart));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodoDoGrafico]);

  const data = {
    labels: historicoPreco.map(() => ""),
    datasets: [
      {
        label: "$",
        data: historicoPreco.map((data) => data.preco),
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 80, 0, 400);
          gradient.addColorStop(0, "#123f44");
          gradient.addColorStop(0.5, "#122d31");
          gradient.addColorStop(1, "#131415");
          return gradient;
        },

        borderColor: "#0f99a6",
        borderWidth: 3,
        pointRadius: 0.5,
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

    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        // type: "logarithmic",
        display: true,
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

  return moeda ? (
    <section className={styles.moedaDetalhada}>
      <div className={styles.cabecalho}>
        <img src={moeda.icon} alt={moeda.name} />
        <div>
          <h1>
            {moeda.name}
            <button onClick={() => adicionarFavorito(moeda)}>
              {!ehFavorito ? (
                <AiOutlineStar size={25} color="#c6cfd2" />
              ) : (
                <AiFillStar size={25} color="#8b80db" />
              )}
            </button>
          </h1>
          <p>{moeda.symbol}</p>
        </div>
      </div>

      <div className={styles.price}>
        <div>
          <p>Price</p>
          <h2>{USDollar.format(moeda.price)}</h2>
        </div>

        <Filtro
          periodoDoGrafico={periodoDoGrafico}
          setPeriodoDoGrafico={setPeriodoDoGrafico}
        />
      </div>
      <div className={styles.grafico}>
        <Line data={data} options={options} />
      </div>

      <Info moeda={moeda} />
    </section>
  ) : (
    <>
      <h1>Estou trabalho nisso...</h1>
      <LoadingSpinner />
    </>
  );
}
