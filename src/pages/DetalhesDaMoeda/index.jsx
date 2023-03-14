import styles from "./DetalhesDaMoeda.module.scss";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useFavoritoContext } from "common/context/Favorito";
import getHistoricalPrice from "common/functions/getHistoricalPrice.js";
import { Line } from "react-chartjs-2";
import opcoes from "./opcoes.json";
import { RxTriangleDown } from 'react-icons/rx';
import { RxTriangleUp } from 'react-icons/rx';

export default function DetalhesDaMoeda() {
  const [moeda, setMoeda] = useState();
  const params = useParams();
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === params.id);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const unidade = new Intl.NumberFormat("en-US");

  useEffect(() => {
    fetch(`https://api.coinstats.app/public/v1/coins/${params.id}?currency=USD`)
      .then((resp) => resp.json())
      .then((dados) => {
        setMoeda(dados.coin);
        console.log(dados.coin);
      });
  }, []);

  // -----------------------------------------------------------------------------------------
  const [historicoPreco, setHistoricoPreco] = useState([]);
  const [periodoDoGrafico, setPeriodoDoGrafico] = useState("");

  useEffect(() => {
    fetch(
      `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${params.id}`
    )
      .then((resp) => resp.json())
      .then((dados) => {
        setHistoricoPreco(getHistoricalPrice(dados.chart));
      });
  }, []);

  const data = {
    labels: historicoPreco.map(() => ""),
    datasets: [
      {
        label: "$",
        data: historicoPreco.map((data) => data.preco),

        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 80, 0, 400);
          gradient.addColorStop(0, "#123f44");
          gradient.addColorStop(0.5, "#122d31");
          gradient.addColorStop(1, "#131415");
          return gradient;
        },

        borderColor: "#0f99a6",
        borderWidth: 3,
        pointRadius: 3,
        // pointStyle: false,
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
        type: "logarithmic",
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },

    elements: {
      line: {
        tension: 0.4,
      },
    },
  };
  // -----------------------------------------------------------------------------------------

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
        <div> 1D | 1W | 1M | 3M | 1Y</div>
      </div>
      <div className={styles.grafico}>
        <Line data={data} options={options} />
      </div>

      <section className={styles.info}>
        <div className={styles.info__priceStats}>
          <h2>Price Stats</h2>
          <div>
            <p>
              Volume <span>{USDollar.format(moeda.volume)}</span>
            </p>
            
            <p >        
              1H <span style={Number(moeda.priceChange1h) < 0 ? { color: "#b9283d" } : { color: "#66be54" }}>{Number(moeda.priceChange1h) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}{moeda.priceChange1h}%</span>
            </p>
            <p >
              1D <span style={Number(moeda.priceChange1d) < 0 ? { color: "#b9283d" } : { color: "#66be54" }}>{Number(moeda.priceChange1d) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}{moeda.priceChange1d}%</span>
            </p>
            <p >
              1W <span style={Number(moeda.priceChange1w) < 0 ? { color: "#b9283d" } : { color: "#66be54" }}>{Number(moeda.priceChange1w) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}{moeda.priceChange1w}%</span>
            </p>
          </div>
        </div>

        <div className={styles.info__mark_supply}>
          <div className={styles.info__mark_supply__marketCapStats}>
            <h2>Market Cap</h2>
            <div>
              <p>
                Rank <span>#{moeda.rank}</span>
              </p>
              <p>
                MarketCap <span>{USDollar.format(moeda.marketCap)}</span>
              </p>
            </div>
          </div>

          <div className={styles.info__mark_supply__SupplyStats}>
            <h2>Supply</h2>
            <div>
              <p>
                Max Supply <span>{unidade.format(moeda.totalSupply)}</span>
              </p>
              <p>
                Available Supply
                <span>{unidade.format(moeda.availableSupply)}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  ) : (
    <>
      <h1>Estou trabalho nisso...</h1>
      <LoadingSpinner />
    </>
  );
}
