import styles from "./Info.module.scss";
import styled, { css } from "styled-components";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

export default function Info({ moeda }) {
    const USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const unidade = new Intl.NumberFormat("en-US");

    const Span = styled.span`
        display: flex;
        align-itens: center;
        color: #66be54;

        ${(props) =>
            props.variacao < 0 &&
            css`
                color: #b9283d;
            `}
    `;

    return (
        <section className={styles.info}>
            <div className={styles.info__priceStats}>
                <h2>Price Stats</h2>
                <div>
                    <p>
                        Volume <span>{USDollar.format(moeda.volume)}</span>
                    </p>

                    <p>
                        1h
                        <Span variacao={moeda.priceChange1h}>
                            {moeda.priceChange1h < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                            {moeda.priceChange1h}%
                        </Span>
                    </p>

                    <p>
                        1d
                        <Span variacao={moeda.priceChange1d}>
                            {moeda.priceChange1d < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                            {moeda.priceChange1d}%
                        </Span>
                    </p>

                    <p>
                        1w
                        <Span variacao={moeda.priceChange1w}>
                            {moeda.priceChange1w < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
                            {moeda.priceChange1w}%
                        </Span>
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
    );
}
